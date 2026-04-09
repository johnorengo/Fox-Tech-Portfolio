<?php

namespace App\Http\Controllers;

use App\Mail\WebsiteLeadMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class WebsiteLeadController extends Controller
{
    public function contact(Request $request): JsonResponse|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        $this->sendLeadMail(
            subject: 'New Contact Enquiry: '.$validated['name'],
            leadType: 'Contact enquiry',
            details: [
                'Name' => $validated['name'],
                'Email' => $validated['email'],
                'Phone' => $validated['phone'],
            ],
            messageBody: $validated['message'],
            replyToEmail: $validated['email'],
            replyToName: $validated['name'],
        );

        return $this->successResponse($request, 'Your message has been sent. We will get back to you shortly.');
    }

    public function payment(Request $request): JsonResponse|RedirectResponse
    {
        $validated = $request->validate([
            'plan_slug' => ['required', 'in:starter,growth,business'],
            'plan_name' => ['required', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'payment_method' => ['required', 'in:mpesa,bank_transfer'],
            'payment_reference' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
        ]);

        $this->sendLeadMail(
            subject: 'New Payment Request: '.$validated['plan_name'].' ('.Str::headline(str_replace('_', ' ', $validated['payment_method'])).')',
            leadType: 'Payment request',
            details: [
                'Plan' => $validated['plan_name'],
                'Plan slug' => $validated['plan_slug'],
                'Customer name' => $validated['name'],
                'Customer email' => $validated['email'],
                'Customer phone' => $validated['phone'],
                'Payment method' => Str::headline(str_replace('_', ' ', $validated['payment_method'])),
                'Payment reference' => $validated['payment_reference'] ?: 'Not provided',
            ],
            messageBody: $validated['message'] ?: 'No additional payment notes were provided.',
            replyToEmail: $validated['email'],
            replyToName: $validated['name'],
        );

        return $this->successResponse($request, 'Your payment request has been sent. We will confirm the next step shortly.');
    }

    private function sendLeadMail(
        string $subject,
        string $leadType,
        array $details,
        string $messageBody,
        string $replyToEmail,
        string $replyToName
    ): void {
        $recipientAddress = config('mail.from.address') ?: config('mail.mailers.smtp.username');
        $recipientName = config('mail.from.name') ?: config('app.name');

        Mail::to($recipientAddress, $recipientName)->send(
            new WebsiteLeadMail(
                subjectLine: $subject,
                leadType: $leadType,
                details: $details,
                messageBody: $messageBody,
                replyToEmail: $replyToEmail,
                replyToName: $replyToName,
            )
        );
    }

    private function successResponse(Request $request, string $message): JsonResponse|RedirectResponse
    {
        if ($request->expectsJson()) {
            return response()->json([
                'message' => $message,
            ], 201);
        }

        return back()->with('status', $message);
    }
}
