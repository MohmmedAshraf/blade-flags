#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

CIRCLE_SRC="$ROOT_DIR/node_modules/circle-flags/flags"
FLAT_SRC="$ROOT_DIR/node_modules/flag-icons/flags/4x3"

DEFAULT_DEST="$ROOT_DIR/resources/svg"
CIRCLE_DEST="$ROOT_DIR/resources/svg-circle"
FLAT_DEST="$ROOT_DIR/resources/svg-flat"

CONFIG_FILE="$ROOT_DIR/config/language-countries.json"

# Flags to exclude (basename without extension)
EXCLUDED=""

is_excluded() {
    local name="$1"
    for ex in $EXCLUDED; do
        [ "$name" = "$ex" ] && return 0
    done
    return 1
}

# Clean destination directories (circle & flat only — default is managed upstream)
rm -rf "$CIRCLE_DEST" "$FLAT_DEST"
mkdir -p "$CIRCLE_DEST" "$FLAT_DEST"

# --- Circle flags (countries) ---
for file in "$CIRCLE_SRC"/*.svg; do
    name=$(basename "$file" .svg)
    is_excluded "$name" && continue
    cp "$file" "$CIRCLE_DEST/circle-country-$name.svg"
done

# --- Circle flags (languages from upstream) ---
if [ -d "$CIRCLE_SRC/language" ]; then
    for file in "$CIRCLE_SRC"/language/*.svg; do
        name=$(basename "$file")
        cp "$file" "$CIRCLE_DEST/circle-language-$name"
    done
fi

# --- Flat flags (countries only) ---
for file in "$FLAT_SRC"/*.svg; do
    name=$(basename "$file" .svg)
    is_excluded "$name" && continue
    cp "$file" "$FLAT_DEST/flat-country-$name.svg"
done

# ---------------------------------------------------------------------------
# Generate language variants from country flags
#
# Reads mappings from config/language-countries.json
# Creates language-{lang}.svg (from default) and language-{lang}-{country}.svg
# Default set: won't overwrite files that already exist (preserves TwEmoji designs)
# Circle/Flat: always writes (these are rebuilt from scratch each run)
# ---------------------------------------------------------------------------

generate_language_variants() {
    local lang="$1"
    local default_country="$2"
    shift 2
    local countries=("$@")

    # --- Default set (preserve existing upstream files) ---
    for country in ${countries[@]+"${countries[@]}"}; do
        local src="$DEFAULT_DEST/country-$country.svg"
        local dest="$DEFAULT_DEST/language-$lang-$country.svg"
        [ -f "$src" ] && [ ! -f "$dest" ] && cp "$src" "$dest"
    done
    local default_src="$DEFAULT_DEST/country-$default_country.svg"
    local default_dest="$DEFAULT_DEST/language-$lang.svg"
    [ -f "$default_src" ] && [ ! -f "$default_dest" ] && cp "$default_src" "$default_dest"

    # --- Circle set (always write — directory is rebuilt) ---
    for country in ${countries[@]+"${countries[@]}"}; do
        local src="$CIRCLE_DEST/circle-country-$country.svg"
        local dest="$CIRCLE_DEST/circle-language-$lang-$country.svg"
        [ -f "$src" ] && cp "$src" "$dest"
    done
    local default_src="$CIRCLE_DEST/circle-country-$default_country.svg"
    local default_dest="$CIRCLE_DEST/circle-language-$lang.svg"
    [ -f "$default_src" ] && cp "$default_src" "$default_dest"

    # --- Flat set (always write — directory is rebuilt) ---
    for country in ${countries[@]+"${countries[@]}"}; do
        local src="$FLAT_DEST/flat-country-$country.svg"
        local dest="$FLAT_DEST/flat-language-$lang-$country.svg"
        [ -f "$src" ] && cp "$src" "$dest"
    done
    local default_src="$FLAT_DEST/flat-country-$default_country.svg"
    local default_dest="$FLAT_DEST/flat-language-$lang.svg"
    [ -f "$default_src" ] && cp "$default_src" "$default_dest"

    return 0
}

# Read language mappings from JSON config and generate variants
for lang in $(jq -r 'keys[]' "$CONFIG_FILE"); do
    default_country=$(jq -r --arg l "$lang" '.[$l].default' "$CONFIG_FILE")
    countries_str=$(jq -r --arg l "$lang" '.[$l].countries // [] | .[]' "$CONFIG_FILE")
    if [ -n "$countries_str" ]; then
        generate_language_variants "$lang" "$default_country" $countries_str
    else
        generate_language_variants "$lang" "$default_country"
    fi
done

echo "Default flags: $(ls "$DEFAULT_DEST" | wc -l | tr -d ' ') files"
echo "Circle flags:  $(ls "$CIRCLE_DEST" | wc -l | tr -d ' ') files"
echo "Flat flags:    $(ls "$FLAT_DEST" | wc -l | tr -d ' ') files"
echo "Done."
