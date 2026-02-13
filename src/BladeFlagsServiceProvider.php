<?php

declare(strict_types=1);

namespace OutheBox\BladeFlags;

use BladeUI\Icons\Factory;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\ServiceProvider;

final class BladeFlagsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->registerConfig();

        $this->callAfterResolving(Factory::class, function (Factory $factory, Container $container) {
            $config = $container->make('config')->get('blade-flags', []);

            $factory->add('blade-flags', array_merge([
                'paths' => [
                    __DIR__.'/../resources/svg',
                    __DIR__.'/../resources/svg-circle',
                    __DIR__.'/../resources/svg-flat',
                ],
            ], $config));
        });
    }

    private function registerConfig(): void
    {
        $this->mergeConfigFrom(__DIR__.'/../config/blade-flags.php', 'blade-flags');
    }

    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                Console\GenerateLanguageFlagsCommand::class,
            ]);

            $this->publishes([
                __DIR__.'/../resources/svg' => public_path('vendor/blade-flags'),
            ], 'blade-flags');

            $this->publishes([
                __DIR__.'/../resources/svg-circle' => public_path('vendor/blade-flags-circle'),
            ], 'blade-flags-circle');

            $this->publishes([
                __DIR__.'/../resources/svg-flat' => public_path('vendor/blade-flags-flat'),
            ], 'blade-flags-flat');

            $this->publishes([
                __DIR__.'/../config/blade-flags.php' => $this->app->configPath('blade-flags.php'),
            ], 'blade-flags-config');
        }
    }
}
