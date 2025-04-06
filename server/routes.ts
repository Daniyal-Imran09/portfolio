import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body using schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        id: savedMessage.id,
        message: 'Contact message submitted successfully'
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      res.status(400).json({ 
        message: 'Failed to submit contact message',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Get all contact messages
  app.get('/api/contact', async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error('Error retrieving contact messages:', error);
      res.status(500).json({ 
        message: 'Failed to retrieve contact messages',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Get a specific contact message by ID
  app.get('/api/contact/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
      
      const message = await storage.getContactMessageById(id);
      if (!message) {
        return res.status(404).json({ message: 'Contact message not found' });
      }
      
      res.status(200).json(message);
    } catch (error) {
      console.error('Error retrieving contact message:', error);
      res.status(500).json({ 
        message: 'Failed to retrieve contact message',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
