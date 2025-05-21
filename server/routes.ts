import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertRegistrationSchema, insertSubscriberSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
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
      
      // Create the registration with ticket information
      const registration = await storage.createRegistration({
        ...registrationData,
        ticketNumber,
        ticketIssued: true
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Registration successful! Your ticket has been issued.", 
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

  const httpServer = createServer(app);
  return httpServer;
}
