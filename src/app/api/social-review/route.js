import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { 
      fullName,
      email, 
      whatsapp, 
      countryCode, 
      businessName,
      socialPlatforms, 
      reviewType, 
      additionalInfo 
    } = await request.json();

    // Use full name directly
    const name = fullName?.trim() || '';

    // Validate input
    if (!fullName || !email || !whatsapp) {
      return NextResponse.json(
        { error: 'Full name, email, and WhatsApp number are required' },
        { status: 400 }
      );
    }

    // Filter out empty social platform links
    const activeSocialPlatforms = Object.entries(socialPlatforms)
      .filter(([platform, url]) => url.trim() !== '')
      .reduce((acc, [platform, url]) => {
        acc[platform] = url;
        return acc;
      }, {});

    // Note: Social media links are now optional

    console.log('Environment variables check:', {
      user: process.env.NM_EMAIL_USER ? 'Set' : 'Missing',
      pass: process.env.NM_EMAIL_PW ? 'Set' : 'Missing'
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NM_EMAIL_USER,
        pass: process.env.NM_EMAIL_PW,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'SMTP configuration error', details: String(verifyError) },
        { status: 500 }
      );
    }

    // Helper function to format platform names
    const formatPlatformName = (platform) => {
      const platformNames = {
        facebook: 'Facebook',
        instagram: 'Instagram',
        twitter: 'Twitter/X',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',
        tiktok: 'TikTok',
        pinterest: 'Pinterest'
      };
      return platformNames[platform] || platform.charAt(0).toUpperCase() + platform.slice(1);
    };

    // Helper function to get platform icons
    const getPlatformIcon = (platform) => {
      const icons = {
        facebook: '📘',
        instagram: '📸',
        twitter: '🐦',
        linkedin: '💼',
        youtube: '📺',
        tiktok: '🎵',
        pinterest: '📌'
      };
      return icons[platform] || '🌐';
    };

    // Helper function to get review type display name
    const getReviewTypeDisplay = (type) => {
      const types = {
        basic: '🆓 Basic Review (Free)',
        detailed: '🔍 Detailed Analysis',
        consultation: '📞 Review + Consultation Call'
      };
      return types[type] || type;
    };

    // Generate social platforms HTML for email
    const socialPlatformsHtml = Object.keys(activeSocialPlatforms).length > 0 
      ? Object.entries(activeSocialPlatforms)
          .map(([platform, url]) => `
            <div style="margin: 8px 0; padding: 12px; background-color: #f8fafc; border-radius: 6px; border-left: 3px solid #10b981;">
              <span style="font-size: 18px; margin-right: 8px;">${getPlatformIcon(platform)}</span>
              <strong>${formatPlatformName(platform)}:</strong> 
              <a href="${url}" target="_blank" style="color: #0ea5e9; text-decoration: none;">${url}</a>
            </div>
          `).join('')
      : `
        <div style="margin: 8px 0; padding: 12px; background-color: #fef3c7; border-radius: 6px; border-left: 3px solid #f59e0b;">
          <p style="margin: 0; color: #92400e;">
            📝 <strong>Note:</strong> Client will provide social media links during consultation or wants general advice.
          </p>
        </div>
      `;

    // Email to you (receiving the social media review request)
    const mailToYou = {
      from: process.env.NM_EMAIL_USER,
      to: process.env.NM_EMAIL_USER,
      subject: `🔍 Social Media Review Request - ${name} | TheSocialHawks`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              🔍 Social Media Review Request
            </h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">
              New client wants social media analysis
            </p>
          </div>
          
          <!-- Client Information -->
          <div style="padding: 30px; background-color: #f8fafc; border-left: 4px solid #10b981;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              👤 Client Information
            </h2>
            <div style="display: grid; gap: 12px;">
              <p style="margin: 5px 0;"><strong>📝 Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>📱 WhatsApp:</strong> <a href="https://wa.me/${countryCode.replace('+', '')}${whatsapp}" style="color: #25d366; text-decoration: none;">${countryCode} ${whatsapp}</a></p>
              ${businessName ? `<p style="margin: 5px 0;"><strong>🏢 Business:</strong> ${businessName}</p>` : ''}
              <p style="margin: 5px 0;"><strong>⏰ Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>

          <!-- Review Type -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 15px; font-size: 22px;">
              📋 Review Type Requested
            </h2>
            <div style="padding: 15px; background-color: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #1d4ed8;">
                ${getReviewTypeDisplay(reviewType)}
              </p>
            </div>
          </div>

          <!-- Social Media Platforms -->
          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              🌐 Social Media Platforms to Review
            </h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              ${socialPlatformsHtml}
            </div>
          </div>

          <!-- Additional Information -->
          ${additionalInfo ? `
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 15px; font-size: 22px;">
              💭 Client Goals & Focus Areas
            </h2>
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; line-height: 1.6; color: #92400e; font-size: 15px;">
                "${additionalInfo}"
              </p>
            </div>
          </div>
          ` : ''}

          <!-- Action Buttons -->
          <div style="padding: 30px; text-align: center; background-color: #f8fafc;">
            <h3 style="color: #374151; margin-bottom: 20px;">Quick Actions</h3>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                📧 Reply via Email
              </a>
              <a href="https://wa.me/${countryCode.replace('+', '')}${whatsapp}" style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                💬 WhatsApp Chat
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; background-color: #1f2937; color: #9ca3af; border-radius: 0 0 12px 12px;">
            <p style="margin: 0; font-size: 14px;">
              🚀 Social Media Review Request | TheSocialHawks
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">
              This email was generated automatically from the social media review form.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the user
    const autoReplyToUser = {
      from: process.env.NM_EMAIL_USER,
      to: email,
      replyTo: process.env.NM_EMAIL_USER,
      subject: `🎉 Social Media Review Request Received - TheSocialHawks`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              🎉 Review Request Received!
            </h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">
              We're excited to analyze your social media presence
            </p>
          </div>
          
          <!-- Personal Greeting -->
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 18px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
              Hi <strong style="color: #10b981;">${name}</strong>! 👋
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
              Thank you for requesting a social media review from <strong>TheSocialHawks</strong>! 
              We've received your submission and our expert team is excited to analyze your social media presence.
            </p>
          </div>

          <!-- What We Received -->
          <div style="padding: 30px; background-color: #f0f9ff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              📝 What We Received
            </h2>
            
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e7ff; margin-bottom: 15px;">
              <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>📱 WhatsApp:</strong> ${countryCode} ${whatsapp}</p>
              ${businessName ? `<p style="margin: 5px 0;"><strong>🏢 Business:</strong> ${businessName}</p>` : ''}
              <p style="margin: 5px 0;"><strong>📋 Review Type:</strong> ${getReviewTypeDisplay(reviewType)}</p>
            </div>

            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e7ff;">
              <h3 style="margin-top: 0; color: #1f2937;">🌐 Platforms to Review:</h3>
              ${socialPlatformsHtml}
            </div>
          </div>

          <!-- What Happens Next -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              🚀 What Happens Next?
            </h2>
            
            <div style="space-y: 15px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style=" color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Initial Review (24-48 hours)</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">Our team will analyze your social media profiles and current strategy</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style=" color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Detailed Analysis</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">We'll create a comprehensive report with findings and recommendations</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style=" color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Personalized Response</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">You'll receive actionable insights tailored to your specific goals</p>
                </div>
              </div>

              ${reviewType === 'consultation' ? `
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style="background-color: #f59e0b; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">4</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Strategy Call</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">We'll schedule a 30-minute consultation to discuss findings and next steps</p>
                </div>
              </div>
              ` : ''}
            </div>
          </div>

          <!-- Expected Timeline -->
          <div style="padding: 30px; background-color: #fef3c7; border-left: 4px solid #f59e0b;">
            <h2 style="color: #92400e; margin-top: 0; margin-bottom: 15px; font-size: 20px;">
              ⏰ Expected Timeline
            </h2>
            <p style="color: #92400e; margin: 0; font-size: 16px; font-weight: 500;">
              You can expect to hear back from us within <strong>24-48 business hours</strong> with your personalized social media analysis and recommendations.
            </p>
          </div>

          <!-- Connect With Us -->
          <div style="padding: 30px; background-color: #f8fafc; text-align: center;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">🤝 Stay Connected</h2>
            <p style="color: #6b7280; margin-bottom: 20px;">Follow us on social media for tips and insights:</p>
            
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
              <a href="https://www.facebook.com/thesocialhawks" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #1877f2; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">📘 Facebook</a>
              <a href="https://www.linkedin.com/company/thesocialhawks" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">💼 LinkedIn</a>
              <a href="https://www.instagram.com/thesocialhawks" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #e4405f; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">📸 Instagram</a>
              <a href="https://www.youtube.com/@thesocialhawks" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #ff0000; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">📺 YouTube</a>
            </div>
          </div>

          <!-- Signature -->
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
              We're looking forward to helping you elevate your social media presence! 🚀
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Best regards,<br>
              <strong style="color: #10b981;">TheSocialHawks Team</strong><br>
              <em style="color: #6b7280;">Your Social Media Growth Partners</em>
            </p>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; background-color: #1f2937; color: #9ca3af; border-radius: 0 0 12px 12px;">
            <p style="margin: 0; font-size: 14px;">
              🎯 Social Media Review | TheSocialHawks
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">
              This is an automated response. We'll be in touch soon with your personalized review!
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    try {
      console.log('Sending social media review request to owner...');
      const sendResult1 = await transporter.sendMail(mailToYou);
      console.log('Email to owner sent successfully:', sendResult1.messageId);

      console.log('Sending auto-reply to user...');
      const sendResult2 = await transporter.sendMail(autoReplyToUser);
      console.log('Auto-reply sent successfully:', sendResult2.messageId);

      return NextResponse.json(
        { message: 'Social media review request submitted successfully! We\'ll analyze your profiles and get back to you soon.' },
        { status: 200 }
      );
    } catch (sendErr) {
      console.error('Error during email sending:', sendErr);
      return NextResponse.json(
        { error: 'Failed to send email(s)', details: String(sendErr) },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('General error in social media review API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}