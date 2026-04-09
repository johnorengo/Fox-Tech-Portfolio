<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WebsiteLeadMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct(
        public string $subjectLine,
        public string $leadType,
        public array $details,
        public string $messageBody,
        public string $replyToEmail,
        public string $replyToName,
    ) {
    }

    public function build(): static
    {
        return $this
            ->subject($this->subjectLine)
            ->replyTo($this->replyToEmail, $this->replyToName)
            ->view('emails.website-lead')
            ->with([
                'leadType' => $this->leadType,
                'details' => $this->details,
                'messageBody' => $this->messageBody,
            ]);
    }
}
