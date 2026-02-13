<?php

declare(strict_types=1);

namespace OutheBox\BladeFlags\Console;

use Illuminate\Console\Command;

use function Laravel\Prompts\note;
use function Laravel\Prompts\spin;
use function Laravel\Prompts\warning;

final class GenerateLanguageFlagsCommand extends Command
{
    protected $signature = 'blade-flags:generate';

    protected $description = 'Generate language flag SVGs from country flags using configured mappings';

    private const VARIANTS = [
        'default' => [
            'path' => 'vendor/blade-flags',
            'countryPrefix' => 'country-',
            'languagePrefix' => 'language-',
        ],
        'circle' => [
            'path' => 'vendor/blade-flags-circle',
            'countryPrefix' => 'circle-country-',
            'languagePrefix' => 'circle-language-',
        ],
        'flat' => [
            'path' => 'vendor/blade-flags-flat',
            'countryPrefix' => 'flat-country-',
            'languagePrefix' => 'flat-language-',
        ],
    ];

    public function handle(): int
    {
        $configFile = dirname(__DIR__, 2).'/config/language-countries.json';

        if (! file_exists($configFile)) {
            $this->components->error('Language config not found: '.$configFile);

            return self::FAILURE;
        }

        $mappings = $this->loadMappings($configFile);

        $activeVariants = $this->resolveActiveVariants();

        if (empty($activeVariants)) {
            $this->promptWarning();
            $this->line('  php artisan vendor:publish --tag=blade-flags --force');
            $this->line('  php artisan vendor:publish --tag=blade-flags-circle --force');
            $this->line('  php artisan vendor:publish --tag=blade-flags-flat --force');

            return self::FAILURE;
        }

        $generated = $this->promptSpin(
            fn () => $this->generateFlags($mappings, $activeVariants)
        );

        $this->promptNote("Generated {$generated} language flag SVGs across ".count($activeVariants).' variant(s).');

        return self::SUCCESS;
    }

    private function loadMappings(string $configFile): array
    {
        $mappings = json_decode(file_get_contents($configFile), true);
        $overrides = config('blade-flags.language_overrides', []);

        foreach ($overrides as $lang => $override) {
            if (isset($override['default'])) {
                $mappings[$lang] = array_merge($mappings[$lang] ?? [], ['default' => $override['default']]);
            }
        }

        return $mappings;
    }

    private function resolveActiveVariants(): array
    {
        $active = [];

        foreach (self::VARIANTS as $name => $variant) {
            $dir = public_path($variant['path']);

            if (is_dir($dir)) {
                $active[$name] = [
                    'dir' => $dir,
                    'countryPrefix' => $variant['countryPrefix'],
                    'languagePrefix' => $variant['languagePrefix'],
                ];
            }
        }

        return $active;
    }

    private function generateFlags(array $mappings, array $variants): int
    {
        $generated = 0;

        foreach ($variants as $variant) {
            foreach ($mappings as $lang => $mapping) {
                $defaultCountry = $mapping['default'];
                $countries = $mapping['countries'] ?? [];

                $src = $variant['dir'].'/'.$variant['countryPrefix'].$defaultCountry.'.svg';
                $dest = $variant['dir'].'/'.$variant['languagePrefix'].$lang.'.svg';

                if (file_exists($src)) {
                    copy($src, $dest);
                    $generated++;
                }

                foreach ($countries as $country) {
                    $src = $variant['dir'].'/'.$variant['countryPrefix'].$country.'.svg';
                    $dest = $variant['dir'].'/'.$variant['languagePrefix'].$lang.'-'.$country.'.svg';

                    if (file_exists($src)) {
                        copy($src, $dest);
                        $generated++;
                    }
                }
            }
        }

        return $generated;
    }

    private function promptSpin(callable $callback)
    {
        if (function_exists('\Laravel\Prompts\spin')) {
            return spin($callback, 'Generating language flag SVGs...');
        }

        $this->components->info('Generating language flag SVGs...');

        return $callback();
    }

    private function promptNote(string $message): void
    {
        if (function_exists('\Laravel\Prompts\note')) {
            note($message);

            return;
        }

        $this->components->info($message);
    }

    private function promptWarning(): void
    {
        if (function_exists('\Laravel\Prompts\warning')) {
            warning('No published variant directories found. Publish SVG assets first:');

            return;
        }

        $this->components->warn('No published variant directories found. Publish SVG assets first:');
    }
}
