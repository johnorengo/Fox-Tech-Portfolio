<?php

use App\Http\Controllers\WebsiteLeadController;
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
    '/pricing',
    '/payment',
    '/about',
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

Route::post('/contact', [WebsiteLeadController::class, 'contact'])->name('contact.submit');
Route::post('/payment-request', [WebsiteLeadController::class, 'payment'])->name('payment.submit');

foreach ($portfolioPaths as $path) {
    Route::view($path, 'welcome');
}

Route::fallback(function () {
    return view('welcome');
});
