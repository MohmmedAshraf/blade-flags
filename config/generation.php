<?php

return [
    [
        'source' => __DIR__.'/../resources/flags',
        'destination' => __DIR__.'/../resources/svg',
        'output-prefix' => 'country-',
        'safe' => true,
    ],
    [
        'source' => __DIR__.'/../resources/flags/language',
        'destination' => __DIR__.'/../resources/svg',
        'output-prefix' => 'language-',
        'safe' => true,
    ],
    [
        'source' => __DIR__.'/../node_modules/circle-flags/flags',
        'destination' => __DIR__.'/../resources/svg-circle',
        'output-prefix' => 'circle-country-',
        'safe' => true,
    ],
    [
        'source' => __DIR__.'/../node_modules/circle-flags/flags/language',
        'destination' => __DIR__.'/../resources/svg-circle',
        'output-prefix' => 'circle-language-',
        'safe' => true,
    ],
    [
        'source' => __DIR__.'/../node_modules/flag-icons/flags/4x3',
        'destination' => __DIR__.'/../resources/svg-flat',
        'output-prefix' => 'flat-country-',
        'safe' => true,
    ],
];
