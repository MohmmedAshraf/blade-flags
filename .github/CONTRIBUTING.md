# Contributing to Blade Flags

Thank you for considering contributing to Blade Flags! This guide will help you get started.

## Development Setup

1. Fork and clone the repository:
   ```bash
   git clone git@github.com:<your-username>/blade-flags.git
   cd blade-flags
   ```

2. Install dependencies:
   ```bash
   composer install
   pnpm install
   ```

3. Build the SVG flag assets:
   ```bash
   bash bin/build.sh
   ```
   This requires [jq](https://jqlang.github.io/jq/) to be installed.

4. Generate and build the JS packages:
   ```bash
   pnpm generate
   pnpm build
   ```

## Workflow

### Running Tests

```bash
composer test
```

### Code Formatting

This project uses [Laravel Pint](https://laravel.com/docs/pint) for code style (requires PHP 8.2+). Install it once, then run before committing:

```bash
composer require laravel/pint --dev
composer format
```

### Rebuilding Flags

Country flag SVGs come from upstream packages ([TwEmoji](https://github.com/twitter/twemoji), [circle-flags](https://github.com/HatScripts/circle-flags), [flag-icons](https://github.com/lipis/flag-icons)). Language flags are generated from country flags using the mappings in `config/language-countries.json`.

To regenerate all flags after changing the config:

```bash
bash bin/build.sh
```

### JavaScript Packages

The JS packages live in `packages/` and are managed as a pnpm workspace. After changing SVGs, regenerate the JS flag modules and rebuild:

```bash
pnpm generate   # reads resources/svg* → packages/core/src/flags/*.ts
pnpm build      # builds all three packages (core, vue, react)
```

### Adding or Updating Language Mappings

1. Edit `config/language-countries.json` with the new mapping
2. Run `bash bin/build.sh` to regenerate the SVGs
3. Run `pnpm generate && pnpm build` to regenerate the JS flag modules
4. Run `composer test` to verify everything works
5. Commit both the JSON config and the generated SVGs

## Pull Requests

- Create a feature branch from `main`
- Keep changes focused — one feature or fix per PR
- Include tests for new functionality
- Run `composer format` and `composer test` before submitting
- Run `pnpm generate && pnpm build` if SVGs changed
- Describe your changes clearly in the PR description

## Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/MohmmedAshraf/blade-flags/issues) with as much detail as possible.
