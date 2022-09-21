<?php

return [
    [
        'source' => __DIR__.'/../node_modules/circle-flags/flags',
        'destination' => __DIR__.'/../resources/svg',
        'output-prefix' => 'country-',
        'safe' => true,
    ],
    [
        'source' => __DIR__.'/../node_modules/circle-flags/flags/language',
        'destination' => __DIR__.'/../resources/svg',
        'output-prefix' => 'language-',
        'safe' => true,
    ],
];
