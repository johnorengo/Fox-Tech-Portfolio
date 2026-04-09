<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>{{ $leadType }}</title>
    </head>
    <body style="margin:0;padding:24px;background:#f6f4fb;font-family:Arial,Helvetica,sans-serif;color:#1d183d;">
        <div style="max-width:640px;margin:0 auto;padding:24px;background:#ffffff;border:1px solid #e7def0;border-radius:20px;">
            <p style="margin:0 0 8px;color:#6f6986;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
                Fox Tech Solutions
            </p>
            <h1 style="margin:0 0 16px;font-size:28px;line-height:1.1;">{{ $leadType }}</h1>

            <table style="width:100%;border-collapse:collapse;">
                <tbody>
                    @foreach ($details as $label => $value)
                        <tr>
                            <td style="padding:10px 0;border-top:1px solid #efe8f4;font-weight:700;vertical-align:top;width:180px;">{{ $label }}</td>
                            <td style="padding:10px 0;border-top:1px solid #efe8f4;vertical-align:top;">{{ $value }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

            <div style="margin-top:24px;">
                <h2 style="margin:0 0 10px;font-size:18px;">Message</h2>
                <p style="margin:0;white-space:pre-wrap;line-height:1.7;color:#403c55;">{{ $messageBody }}</p>
            </div>
        </div>
    </body>
</html>
