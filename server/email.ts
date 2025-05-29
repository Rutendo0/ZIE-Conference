
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
}

export const sendEmailToAdmin = async (options: EmailOptions) => {
  await transporter.sendMail({
    from: '"ZIE Conference" <conference@zie.org>',
    ...options
  });
};

export const sendEmailToAttendee = async (options: EmailOptions) => {
  await transporter.sendMail({
    from: '"ZIE Conference" <conference@zie.org>',
    ...options
  });
};

interface WhatsAppOptions {
  phone: string;
  message: string;
}

export const sendWhatsAppMessage = async (options: WhatsAppOptions) => {
  // For production, you would integrate with WhatsApp Business API
  // For now, we'll log the message that would be sent
  console.log(`📱 WhatsApp Message to ${options.phone}:`);
  console.log(options.message);
  console.log('---');
  
  // In a real implementation, you would use services like:
  // - Twilio WhatsApp API
  // - WhatsApp Business API
  // - Or other messaging services
};
