const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT == '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: true
      }
    });
  }

  async sendContactEmail(contactData) {
    const { name, email, subject, message } = contactData;

    // Email to you (the recipient)
    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 5px;">Contact Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; background-color: #f8f9fa; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 8px; background-color: #f8f9fa;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Email:</td>
                  <td style="padding: 8px;"><a href="mailto:${email}" style="color: #007bff;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px; background-color: #f8f9fa; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px; background-color: #f8f9fa;">${subject}</td>
                </tr>
              </table>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 5px;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This email was sent from your Virtual CV contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Submitted on: ${new Date().toLocaleString()}
      `
    };

    // Auto-reply email to the sender
    const replyOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
            
            <p style="color: #555; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #555; line-height: 1.6;">
              Thank you for contacting me through my portfolio website. I've received your message about 
              "<strong>${subject}</strong>" and I really appreciate you taking the time to reach out.
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              I'll review your message and get back to you within 24 hours. If your inquiry is urgent, 
              feel free to reach out to me directly at kjburriss@gmail.com.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 5px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0; color: #333;">Your Message Summary:</h4>
              <p style="margin: 0; color: #666; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              In the meantime, feel free to explore my portfolio and check out my latest projects on 
              <a href="https://github.com/krispykeenz" style="color: #007bff;">GitHub</a> or connect with me on 
              <a href="https://linkedin.com/in/keenan-burriss-07b23127a/" style="color: #007bff;">LinkedIn</a>.
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              Best regards,<br>
              <strong>Keenan Burriss</strong><br>
              Full-Stack Developer
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thank you for contacting me through my portfolio website. I've received your message about "${subject}" and I really appreciate you taking the time to reach out.

I'll review your message and get back to you within 24 hours. If your inquiry is urgent, feel free to reach out to me directly at kjburriss@gmail.com.

Your Message Summary:
"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"

In the meantime, feel free to explore my portfolio and check out my latest projects on GitHub (https://github.com/krispykeenz) or connect with me on LinkedIn (https://linkedin.com/in/keenan-burriss-07b23127a/).

Best regards,
Keenan Burriss
Full-Stack Developer

This is an automated response. Please do not reply to this email.
      `
    };

    try {
      // Send both emails
      const [mainEmail, replyEmail] = await Promise.all([
        this.transporter.sendMail(mailOptions),
        this.transporter.sendMail(replyOptions)
      ]);

      console.log('📧 Main email sent:', mainEmail.messageId);
      console.log('📧 Auto-reply sent:', replyEmail.messageId);

      return {
        success: true,
        messageId: mainEmail.messageId,
        replyId: replyEmail.messageId
      };
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      throw new Error('Failed to send email');
    }
  }

  async testConnection() {
    try {
      await this.transporter.verify();
      console.log('✅ Email service connection verified');
      return true;
    } catch (error) {
      console.error('❌ Email service connection failed:', error);
      return false;
    }
  }
}

module.exports = new EmailService();
