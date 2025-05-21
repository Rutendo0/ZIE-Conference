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
      const { tierId } = req.body;
      
      // In a real application, we would collect more information
      // For now, we'll just acknowledge the tier selection
      res.status(200).json({ 
        success: true, 
        message: "Registration interest recorded", 
        tierId 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "An error occurred during registration" 
      });
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
