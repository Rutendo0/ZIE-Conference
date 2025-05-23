
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  // Configure your email service here
  host: "smtp.example.com",
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
