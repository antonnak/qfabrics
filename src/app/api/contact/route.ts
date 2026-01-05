import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, role, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'QuantumFabrics <contact@quantumfabrics.ai>',
      to: ['anton@quantumfabrics.ai'],
      replyTo: email,
      subject: `New Contact: ${name}${company ? ` from ${company}` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Discovery Call Request
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a;">${company}</td>
            </tr>
            ` : ''}
            ${role ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Role</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a1a;">${role}</td>
            </tr>
            ` : ''}
          </table>

          ${message ? `
          <div style="margin-top: 24px;">
            <h3 style="color: #666; font-size: 14px; margin-bottom: 8px;">What they're trying to solve:</h3>
            <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; color: #1a1a1a; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            Sent from quantumfabrics.ai contact form at ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
