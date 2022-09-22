<p align="center">
    <img src="art/cover.png" width="1280" title="Blade Flags For Countries & Languages">
</p>

# Blade Flags For Countries & Languages

<a href="https://github.com/MohmmedAshraf/blade-flags/actions?query=workflow%3ATests">
    <img src="https://github.com/MohmmedAshraf/blade-flags/workflows/Tests/badge.svg" alt="Tests">
</a>
<a href="https://github.styleci.io/repos/539659619">
    <img src="https://github.styleci.io/repos/539659619/shield?style=flat" alt="Code Style">
</a>
<a href="https://packagist.org/packages/outhebox/blade-flags">
    <img src="https://img.shields.io/packagist/v/outhebox/blade-flags" alt="Latest Stable Version">
</a>
<a href="https://packagist.org/packages/outhebox/blade-flags">
    <img src="https://img.shields.io/packagist/dt/outhebox/blade-flags" alt="Total Downloads">
</a>

A package to easily make use of [TwEmoji Countries & Languages Flags](https://github.com/twitter/twemoji) in your Laravel Blade views.

For a full list of available icons see [the SVG directory](resources/svg) or preview all the available flags, check [the gallery](https://github.com/twitter/twemoji).

## Requirements

- PHP 8.0 or higher
- Laravel 9.0 or higher

## Installation

```bash
composer require outhebox/blade-flags
```

## Blade Icons

Blade Flags uses Blade Icons under the hood. Please refer to [the Blade Icons readme](https://github.com/blade-ui-kit/blade-icons) for additional functionality. We also recommend to [enable icon caching](https://github.com/blade-ui-kit/blade-icons#caching) with this library.

## Configuration

Blade Flags also offers the ability to use features from Blade Icons like default classes, default attributes, etc. If you'd like to configure these, publish the `blade-flags.php` config file:

```bash
php artisan vendor:publish --tag=blade-flags-config
```

## Usage

Icons can be used as self-closing Blade components which will be compiled to SVG icons:

```blade
<x-flag-country-br />
<x-flag-country-cn />
<x-flag-country-gb />
<x-flag-country-ru />
<x-flag-country-us />
```

...produces this:<br/><br/>
<img src="resources/svg/country-br.svg" width="48">
<img src="resources/svg/country-cn.svg" width="48">
<img src="resources/svg/country-gb.svg" width="48">
<img src="resources/svg/country-ru.svg" width="48">
<img src="resources/svg/country-us.svg" width="48">

```blade
<x-flag-language-en />
<x-flag-language-ar />
<x-flag-language-es />
```

...produces this:<br/><br/>
<img src="resources/svg/language-en.svg" width="48">
<img src="resources/svg/language-ar.svg" width="48">
<img src="resources/svg/language-es.svg" width="48">

You can also pass classes to your icon components:

```blade
<x-flag-country-us class="w-6 h-6 text-gray-500"/>
```

And even use inline styles:

```blade
<x-flag-country-us style="color: #555"/>
```

Or use the `@svg` directive:

```blade
@svg('flag-country-us', 'w-6 h-6', ['style' => 'color: #555'])
```

### Raw SVG Icons

If you want to use the raw SVG icons as assets, you can publish them using:

```bash
php artisan vendor:publish --tag=blade-flags --force
```

Then use them in your views like:

```blade
<img src="{{ asset('vendor/blade-flags/country-us.svg') }}" width="10" height="10"/>
```

```blade
<img src="{{ asset('vendor/blade-flags/language-en.svg') }}" width="10" height="10"/>
```

## Changelog

Check out the [CHANGELOG](CHANGELOG.md) in this repository for all the recent changes.

## License

Blade Flags is open-sourced software licensed under [the MIT license](LICENSE.md).