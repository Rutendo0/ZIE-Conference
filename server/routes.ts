
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertRegistrationSchema, insertSubscriberSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendEmailToAdmin, sendEmailToAttendee } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // Send email to Doreen
      await sendEmailToAdmin({
        to: 'doreen@zie.co.zw',
        subject: `New Contact Form Message: ${contactData.subject}`,
        text: `
Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}

Message:
${contactData.message}
        `
      });

      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        contactId: contact.id 
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Registration API endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const registrationData = insertRegistrationSchema.parse(req.body);
      
      // Generate a ticket number (format: ZIE-2025-XXXXX)
      const ticketNumber = `ZIE-2025-${Math.floor(10000 + Math.random() * 90000)}`;
      
      // Create the registration with pending payment status
      const registration = await storage.createRegistration({
        ...registrationData,
        ticketNumber,
        ticketIssued: false,
        paymentStatus: 'pending'
      });

      // Send notification to Doreen
      await sendEmailToAdmin({
        to: 'doreen@zie.co.zw',
        subject: 'New Registration Pending Payment',
        text: `
          New registration details:
          Name: ${registrationData.name}
          Email: ${registrationData.email}
          Phone: ${registrationData.phone}
          Organization: ${registrationData.organization}
          Ticket Type: ${registrationData.pricingTier}
          Ticket Number: ${ticketNumber}
          
          Doreen's Contact:
          Email: doreen@zie.co.zw
          Phone: +263774333937
        `
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Registration successful! Please wait for payment confirmation.", 
        registration: {
          id: registration.id,
          name: registration.name,
          email: registration.email,
          ticketNumber: registration.ticketNumber,
          pricingTier: registration.pricingTier
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ 
          success: false, 
          message: error.message || "Invalid registration data" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred during registration" 
        });
      }
    }
  });

  // Newsletter subscription API endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = insertSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(email);
      
      if (existingSubscriber) {
        return res.status(200).json({ 
          success: true, 
          message: "Email already subscribed" 
        });
      }
      
      const subscriber = await storage.createSubscriber({ email });
      res.status(201).json({ 
        success: true, 
        message: "Successfully subscribed to newsletter" 
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Payment confirmation endpoint
  app.post("/api/confirm-payment", async (req, res) => {
    try {
      const { ticketNumber, email } = req.body;
      
      const registration = await storage.updateRegistrationPayment(ticketNumber, email);
      
      if (registration) {
        // Send confirmation email to attendee
        await sendEmailToAttendee({
          to: registration.email,
          subject: 'ZIE Conference 2025 - Registration Confirmed',
          text: `
            Dear ${registration.name},
            
            Your payment has been confirmed and your registration is complete.
            Ticket Number: ${registration.ticketNumber}
            
            Please keep this email for your records.
            
            Best regards,
            ZIE Conference Team
          `
        });
        
        res.status(200).json({
          success: true,
          message: "Payment confirmed and ticket issued"
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Registration not found"
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error confirming payment"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
