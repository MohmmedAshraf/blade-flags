<p align="center">
    <img src="art/cover.png" width="1280" title="Blade Flags For Countries & Languages">
</p>

<p align="center">
    <a href="#installation">Installation</a> |
    <a href="#usage">Usage</a> |
    <a href="#configuration">Configuration</a> |
    <a href="#language-flag-overrides">Language Overrides</a> |
    <a href="#raw-svg-icons">Raw SVGs</a> |
    <a href="#contributing">Contributing</a> |
    <a href="#changelog">Changelog</a>
</p>

<p align="center">
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/packagist/v/outhebox/blade-flags" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/packagist/dt/outhebox/blade-flags" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/packagist/php-v/outhebox/blade-flags.svg" alt="PHP from Packagist"></a>
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/badge/Laravel-9.x%20|%2010.x%20|%2011.x%20|%2012.x-brightgreen.svg" alt="Laravel Version"></a>
</p>

## Introduction

A package to easily make use of country & language flags in your Laravel Blade views. Ships with three flag styles out of the box:

| Variant           | Component                      | Countries | Languages | Source                                                     |
|-------------------|--------------------------------|:---------:|:---------:|------------------------------------------------------------|
| Default (rounded) | `<x-flag-country-us />`        |    264    |    281    | [TwEmoji](https://github.com/twitter/twemoji)              |
| Circle            | `<x-flag-circle-country-us />` |    405    |    275    | [circle-flags](https://github.com/HatScripts/circle-flags) |
| Flat (4:3)        | `<x-flag-flat-country-us />`   |    270    |    264    | [flag-icons](https://github.com/lipis/flag-icons)          |

Language flags are generated from country flags using a [config-driven mapping](config/language-countries.json) covering 128 languages. All variants include regional language variants (e.g. `ar-sa`, `en-us`, `fr-ca`) where applicable.

For a full list of available icons see the SVG directories: [default](resources/svg), [circle](resources/svg-circle), [flat](resources/svg-flat).

## Requirements

- PHP 8.0 or higher
- Laravel 9.0 or higher

## Installation

```bash
composer require outhebox/blade-flags
```

## Blade Icons

Blade Flags uses Blade Icons under the hood. Please refer to [the Blade Icons readme](https://github.com/blade-ui-kit/blade-icons) for additional functionality. We also recommend to [enable icon caching](https://github.com/blade-ui-kit/blade-icons#caching) with this library.

> **[Watch a 3-minute video by Povilas Korop](https://www.youtube.com/watch?v=XTnKU-VCOB8)** showcasing the package.

## Configuration

Blade Flags also offers the ability to use features from Blade Icons like default classes, default attributes, etc. If you'd like to configure these, publish the `blade-flags.php` config file:

```bash
php artisan vendor:publish --tag=blade-flags-config
```

### Language Flag Overrides

By default, language flags use the country mappings defined in [`config/language-countries.json`](config/language-countries.json) (e.g. `ar` → UAE, `en` → UK). You can override these defaults per-language:

1. Publish the config file:
   ```bash
   php artisan vendor:publish --tag=blade-flags-config
   ```

2. Edit `config/blade-flags.php` to set your preferred mappings:
   ```php
   'language_overrides' => [
       'ar' => ['default' => 'sa'],  // Arabic → Saudi Arabia
       'en' => ['default' => 'us'],  // English → United States
   ],
   ```

3. Publish the SVG assets and apply your overrides:
   ```bash
   php artisan vendor:publish --tag=blade-flags --force
   php artisan vendor:publish --tag=blade-flags-circle --force
   php artisan vendor:publish --tag=blade-flags-flat --force
   php artisan blade-flags:generate
   ```

The `blade-flags:generate` command reads the package defaults, merges your overrides, and regenerates the language flag SVGs in the published vendor directories.

## Usage

Icons can be used as self-closing Blade components which will be compiled to SVG icons.

### Default (Rounded Rectangle)

```blade
<x-flag-country-us />
<x-flag-country-gb />
<x-flag-country-br />
<x-flag-country-cn />
<x-flag-country-ru />
```

...produces this:<br/><br/>
<img src="resources/svg/country-us.svg" width="48">
<img src="resources/svg/country-gb.svg" width="48">
<img src="resources/svg/country-br.svg" width="48">
<img src="resources/svg/country-cn.svg" width="48">
<img src="resources/svg/country-ru.svg" width="48">

```blade
<x-flag-language-en />
<x-flag-language-ar />
<x-flag-language-es />
```

...produces this:<br/><br/>
<img src="resources/svg/language-en.svg" width="48">
<img src="resources/svg/language-ar.svg" width="48">
<img src="resources/svg/language-es.svg" width="48">

### Circle

```blade
<x-flag-circle-country-us />
<x-flag-circle-country-gb />
<x-flag-circle-country-br />
<x-flag-circle-country-cn />
<x-flag-circle-country-ru />
```

...produces this:<br/><br/>
<img src="resources/svg-circle/circle-country-us.svg" width="48">
<img src="resources/svg-circle/circle-country-gb.svg" width="48">
<img src="resources/svg-circle/circle-country-br.svg" width="48">
<img src="resources/svg-circle/circle-country-cn.svg" width="48">
<img src="resources/svg-circle/circle-country-ru.svg" width="48">

```blade
<x-flag-circle-language-en />
<x-flag-circle-language-ar />
<x-flag-circle-language-ar-sa />
<x-flag-circle-language-ar-eg />
```

...produces this:<br/><br/>
<img src="resources/svg-circle/circle-language-en.svg" width="48">
<img src="resources/svg-circle/circle-language-ar.svg" width="48">
<img src="resources/svg-circle/circle-language-ar-sa.svg" width="48">
<img src="resources/svg-circle/circle-language-ar-eg.svg" width="48">

### Flat (4:3 Rectangle)

```blade
<x-flag-flat-country-us />
<x-flag-flat-country-gb />
<x-flag-flat-country-br />
<x-flag-flat-country-cn />
<x-flag-flat-country-ru />
```

...produces this:<br/><br/>
<img src="resources/svg-flat/flat-country-us.svg" width="48">
<img src="resources/svg-flat/flat-country-gb.svg" width="48">
<img src="resources/svg-flat/flat-country-br.svg" width="48">
<img src="resources/svg-flat/flat-country-cn.svg" width="48">
<img src="resources/svg-flat/flat-country-ru.svg" width="48">

```blade
<x-flag-flat-language-en />
<x-flag-flat-language-ar />
<x-flag-flat-language-fr />
```

...produces this:<br/><br/>
<img src="resources/svg-flat/flat-language-en.svg" width="48">
<img src="resources/svg-flat/flat-language-ar.svg" width="48">
<img src="resources/svg-flat/flat-language-fr.svg" width="48">

### Classes & Attributes

You can pass classes to any variant:

```blade
<x-flag-country-us class="w-6 h-6"/>
<x-flag-circle-country-us class="w-6 h-6"/>
<x-flag-flat-country-us class="w-6 h-6"/>
```

### Dynamic Icons

For dynamic icon names (e.g. from a database or variable), use the `@svg` Blade directive:

```blade
@svg('flag-country-'.$country->iso2_code)
@svg('flag-circle-country-'.$country->iso2_code, 'w-6 h-6')
@svg('flag-flat-country-'.$country->iso2_code)

@svg('flag-language-'.$language->code)
@svg('flag-circle-language-'.$language->code, 'w-6 h-6')
@svg('flag-flat-language-'.$language->code)
```

You can also use the `svg()` helper directly in PHP:

```php
svg('flag-country-us')->toHtml()
svg('flag-circle-country-us', 'w-6 h-6')->toHtml()
```

### Raw SVG Icons

If you want to use the raw SVG icons as assets, you can publish them using:

```bash
php artisan vendor:publish --tag=blade-flags --force
php artisan vendor:publish --tag=blade-flags-circle --force
php artisan vendor:publish --tag=blade-flags-flat --force
```

Then use them in your views like:

```blade
<img src="{{ asset('vendor/blade-flags/country-us.svg') }}" width="32" height="32"/>
<img src="{{ asset('vendor/blade-flags-circle/circle-country-us.svg') }}" width="32" height="32"/>
<img src="{{ asset('vendor/blade-flags-flat/flat-country-us.svg') }}" width="32" height="32"/>
```

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Changelog

Check out the [CHANGELOG](CHANGELOG.md) in this repository for all the recent changes.

## License

Blade Flags is open-sourced software licensed under [the MIT license](LICENSE.md).
