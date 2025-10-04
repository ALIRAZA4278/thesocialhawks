import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const countryCode = formData.get('countryCode');
    const currentPosition = formData.get('currentPosition');
    const experience = formData.get('experience');
    const expectedSalary = formData.get('expectedSalary');
    const availableFrom = formData.get('availableFrom');
    const portfolio = formData.get('portfolio');
    const linkedin = formData.get('linkedin');
    const coverLetter = formData.get('coverLetter');
    const resume = formData.get('resume');
    const jobTitle = formData.get('jobTitle');
    const jobSlug = formData.get('jobSlug');
    const jobDepartment = formData.get('jobDepartment');

    // Use full name directly
    const name = fullName?.trim() || '';

    // Validate required fields
    if (!fullName || !email || !phone || !experience || !coverLetter || !resume) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate file type and size
    if (resume) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(resume.type)) {
        return NextResponse.json(
          { error: 'Resume must be a PDF, DOC, or DOCX file' },
          { status: 400 }
        );
      }

      if (resume.size > maxSize) {
        return NextResponse.json(
          { error: 'Resume file size must be less than 5MB' },
          { status: 400 }
        );
      }
    }

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

    // Prepare resume attachment
    let attachments = [];
    if (resume) {
      const resumeBuffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: `${name.replace(/\s+/g, '_')}_Resume_${jobSlug}.${resume.name.split('.').pop()}`,
        content: resumeBuffer,
        contentType: resume.type,
      });
    }

    // Email to HR (receiving the job application)
    const mailToHR = {
      from: process.env.NM_EMAIL_USER,
      to: process.env.NM_EMAIL_USER,
      subject: `💼 New Job Application: ${jobTitle} - ${name} | TheSocialHawks`,
      attachments: attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              💼 New Job Application
            </h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 18px;">
              ${jobTitle} Application
            </p>
          </div>
          
          <!-- Job Information -->
          <div style="padding: 30px; background-color: #f8fafc; border-left: 4px solid #3b82f6;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              📋 Position Details
            </h2>
            <div style="display: grid; gap: 12px;">
              <p style="margin: 5px 0;"><strong>🎯 Position:</strong> ${jobTitle}</p>
              <p style="margin: 5px 0;"><strong>🏢 Department:</strong> ${jobDepartment}</p>
              <p style="margin: 5px 0;"><strong>🔗 Job Slug:</strong> ${jobSlug}</p>
              <p style="margin: 5px 0;"><strong>📅 Applied:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>

          <!-- Candidate Information -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              👤 Candidate Information
            </h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <div style="display: grid; gap: 12px;">
                <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></p>
                <p style="margin: 5px 0;"><strong>📱 Phone:</strong> <a href="https://wa.me/${countryCode.replace('+', '')}${phone}" style="color: #25d366; text-decoration: none;">${countryCode} ${phone}</a></p>
                ${currentPosition ? `<p style="margin: 5px 0;"><strong>💼 Current Position:</strong> ${currentPosition}</p>` : ''}
                <p style="margin: 5px 0;"><strong>📈 Experience:</strong> ${experience}</p>
                ${expectedSalary ? `<p style="margin: 5px 0;"><strong>💰 Expected Salary:</strong> ${expectedSalary}</p>` : ''}
                ${availableFrom ? `<p style="margin: 5px 0;"><strong>📅 Available From:</strong> ${new Date(availableFrom).toLocaleDateString()}</p>` : ''}
              </div>
            </div>
          </div>

          <!-- Links -->
          ${portfolio || linkedin ? `
          <div style="padding: 30px; background-color: #f0f9ff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              🔗 Professional Links
            </h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e7ff;">
              ${portfolio ? `<p style="margin: 5px 0;"><strong>🌐 Portfolio:</strong> <a href="${portfolio}" target="_blank" style="color: #0ea5e9; text-decoration: none;">${portfolio}</a></p>` : ''}
              ${linkedin ? `<p style="margin: 5px 0;"><strong>💼 LinkedIn:</strong> <a href="${linkedin}" target="_blank" style="color: #0077b5; text-decoration: none;">${linkedin}</a></p>` : ''}
            </div>
          </div>
          ` : ''}

          <!-- Cover Letter -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              📝 Cover Letter
            </h2>
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; line-height: 1.8; color: #92400e; font-size: 15px; white-space: pre-wrap;">
                "${coverLetter}"
              </p>
            </div>
          </div>

          <!-- Resume Attachment Note -->
          ${resume ? `
          <div style="padding: 30px; background-color: #f0fdf4;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 15px; font-size: 22px;">
              📎 Resume Attached
            </h2>
            <div className="text-black" style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #065f46;">
                <strong>📄 File:</strong> ${resume.name}<br>
                <strong>📊 Size:</strong> ${(resume.size / 1024 / 1024).toFixed(2)} MB<br>
                <strong>📋 Type:</strong> ${resume.type}
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
              <a href="https://wa.me/${countryCode.replace('+', '')}${phone}" style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">
                💬 WhatsApp Chat
              </a>
              ${linkedin ? `<a href="${linkedin}" target="_blank" style="display: inline-block; background-color: #0077b5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">💼 View LinkedIn</a>` : ''}
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; background-color: #1f2937; color: #9ca3af; border-radius: 0 0 12px 12px;">
            <p style="margin: 0; font-size: 14px;">
              💼 Job Application | TheSocialHawks HR Department
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">
              This email was generated automatically from the career application form.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to candidate
    const autoReplyToCandidate = {
      from: process.env.NM_EMAIL_USER,
      to: email,
      replyTo: process.env.NM_EMAIL_USER,
      subject: `🎉 Application Received: ${jobTitle} - TheSocialHawks`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              🎉 Application Received!
            </h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">
              Thank you for applying to TheSocialHawks
            </p>
          </div>
          
          <!-- Personal Greeting -->
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 18px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
              Hi <strong style="color: #10b981;">${name}</strong>! 👋
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
              Thank you for your interest in the <strong>${jobTitle}</strong> position at <strong>TheSocialHawks</strong>! 
              We've successfully received your application and our HR team is excited to review your qualifications.
            </p>
          </div>

          <!-- Application Summary -->
          <div style="padding: 30px; background-color: #f0f9ff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              📝 Application Summary
            </h2>
            
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e7ff;">
              <p style="margin: 5px 0;"><strong>🎯 Position:</strong> ${jobTitle}</p>
              <p style="margin: 5px 0;"><strong>🏢 Department:</strong> ${jobDepartment}</p>
              <p style="margin: 5px 0;"><strong>👤 Applicant:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>📱 Phone:</strong> ${countryCode} ${phone}</p>
              <p style="margin: 5px 0;"><strong>📅 Applied:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>

          <!-- What Happens Next -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px; font-size: 22px;">
              🚀 What Happens Next?
            </h2>
            
            <div style="space-y: 15px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style=" color: white;  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Application Review (2-3 days)</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">Our HR team will carefully review your application and resume</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style=" color: white;  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Initial Screening</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">If your profile matches our requirements, we'll contact you for a phone/video screening</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style=" color: white;  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Interview Process</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">Face-to-face or virtual interviews with our team and department heads</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style="color: white;  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">4</div>
                <div>
                  <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Final Decision</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">We'll notify you of our decision and discuss next steps if selected</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div style="padding: 30px; background-color: #fef3c7; border-left: 4px solid #f59e0b;">
            <h2 style="color: #92400e; margin-top: 0; margin-bottom: 15px; font-size: 20px;">
              ⏰ Expected Timeline
            </h2>
            <p style="color: #92400e; margin: 0; font-size: 16px; font-weight: 500;">
              You can expect to hear back from us within <strong>3-5 business days</strong>. We appreciate your patience as we carefully review all applications.
            </p>
          </div>

          <!-- Contact Information -->
          <div style="padding: 30px; background-color: #f8fafc; text-align: center;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">📞 Questions?</h2>
            <p style="color: #6b7280; margin-bottom: 20px;">If you have any questions about your application or the process, feel free to reach out:</p>
            
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
              <div style="text-align: center; margin: 5px;">
                <div style="color: #374151; font-weight: bold;">📧 Email</div>
                <div style="color: #6b7280;">
info@thesocialhawks.com</div>
              </div>
              <div style="text-align: center; margin: 5px;">
                <div style="color: #374151; font-weight: bold;">📱 Phone</div>
                <div style="color: #6b7280;">+92 310-4999 701</div>
              </div>
            </div>
          </div>

          <!-- Company Links -->}
          <div style="padding: 30px; background-color: #ffffff; text-align: center;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">🤝 Stay Connected</h2>
            <p style="color: #6b7280; margin-bottom: 20px;">Follow us to learn more about our company culture:</p>
            
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
              <a href="https://www.linkedin.com/company/thesocialhawks" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">💼 LinkedIn</a>
              <a href="https://www.instagram.com/thesocialhawks" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #e4405f; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">📸 Instagram</a>
              <a href="https://www.facebook.com/thesocialhawks" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #1877f2; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">📘 Facebook</a>
            </div>
          </div>

          <!-- Signature -->
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
              We're excited about the possibility of having you join our team! 🚀
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Best regards,<br>
              <strong style="color: #10b981;">TheSocialHawks HR Team</strong><br>
              <em style="color: #6b7280;">Building Tomorrow's Digital Success Stories</em>
            </p>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; background-color: #1f2937; color: #9ca3af; border-radius: 0 0 12px 12px;">
            <p style="margin: 0; font-size: 14px;">
              💼 Career Application Confirmation | TheSocialHawks
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">
              This is an automated response. Please do not reply to this email directly.
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    try {
      console.log('Sending job application to HR...');
      const sendResult1 = await transporter.sendMail(mailToHR);
      console.log('Email to HR sent successfully:', sendResult1.messageId);

      console.log('Sending confirmation to candidate...');
      const sendResult2 = await transporter.sendMail(autoReplyToCandidate);
      console.log('Confirmation email sent successfully:', sendResult2.messageId);

      return NextResponse.json(
        { message: 'Job application submitted successfully! We\'ll review your application and get back to you soon.' },
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
    console.error('General error in job application API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}