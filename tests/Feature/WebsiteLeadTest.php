<?php

namespace Tests\Feature;

use App\Mail\WebsiteLeadMail;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class WebsiteLeadTest extends TestCase
{
    public function test_contact_form_sends_mail(): void
    {
        Mail::fake();

        config([
            'mail.from.address' => 'enquiries@foxtechsolution.com',
            'mail.from.name' => 'Fox Tech Solutions',
        ]);

        $response = $this->postJson('/contact', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '+254700000111',
            'message' => 'I would like help with a new website.',
        ]);

        $response
            ->assertCreated()
            ->assertJson([
                'message' => 'Your message has been sent. We will get back to you shortly.',
            ]);

        Mail::assertSent(WebsiteLeadMail::class, function (WebsiteLeadMail $mail) {
            return $mail->subjectLine === 'New Contact Enquiry: Jane Doe'
                && $mail->replyToEmail === 'jane@example.com'
                && $mail->details['Phone'] === '+254700000111';
        });
    }

    public function test_payment_request_sends_mail(): void
    {
        Mail::fake();

        config([
            'mail.from.address' => 'enquiries@foxtechsolution.com',
            'mail.from.name' => 'Fox Tech Solutions',
        ]);

        $response = $this->postJson('/payment-request', [
            'plan_slug' => 'growth',
            'plan_name' => 'Growth',
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '+254700000111',
            'payment_method' => 'mpesa',
            'payment_reference' => 'QWE12345',
            'message' => 'Payment has been sent.',
        ]);

        $response
            ->assertCreated()
            ->assertJson([
                'message' => 'Your payment request has been sent. We will confirm the next step shortly.',
            ]);

        Mail::assertSent(WebsiteLeadMail::class, function (WebsiteLeadMail $mail) {
            return $mail->subjectLine === 'New Payment Request: Growth (Mpesa)'
                && $mail->replyToEmail === 'jane@example.com'
                && $mail->details['Payment method'] === 'Mpesa';
        });
    }

    public function test_payment_request_requires_supported_payment_method(): void
    {
        Mail::fake();

        $response = $this->postJson('/payment-request', [
            'plan_slug' => 'growth',
            'plan_name' => 'Growth',
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '+254700000111',
            'payment_method' => 'cash',
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors(['payment_method']);
    }
}
