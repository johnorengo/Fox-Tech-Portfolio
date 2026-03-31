<?php

use Illuminate\Support\Facades\Route;

$portfolioPaths = [
    '/',
    '/design',
    '/design/logo-design',
    '/design/social-media-design',
    '/design/full-branding',
    '/get-online',
    '/get-online/domains',
    '/get-online/email-setup',
    '/get-online/custom-website',
    '/get-online/ecommerce',
    '/get-online/hosting',
    '/get-online/vps-server',
    '/advertise',
    '/sell',
    '/proof',
    '/results',
    '/portfolio',
    '/blog',
    '/learn',
    '/contact',
    '/free-guide',
    '/client-space',
];

foreach ($portfolioPaths as $path) {
    Route::view($path, 'welcome');
}

Route::fallback(function () {
    return view('welcome');
});

