import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }
      
      // In a real application, you would:
      // 1. Save the message to a database
      // 2. Send an email notification
      // 3. Potentially send an auto-reply
      
      // For now, we'll just simulate a successful submission
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({ 
        message: "Message sent successfully! I'll get back to you soon.",
        success: true 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "An error occurred while sending your message. Please try again." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real application, you would serve the actual resume file
    // For now, we'll just provide a placeholder response
    res.json({
      message: "Resume download would be implemented here",
      filename: "shreyash_desai_resume.pdf",
      url: "/public/resume/shreyash_desai_resume.pdf"
    });
  });

  // Analytics endpoint for tracking page views
  app.post("/api/analytics/page-view", (req, res) => {
    const { page, timestamp } = req.body;
    
    // In a real application, you would log this to an analytics service
    console.log("Page view tracked:", { page, timestamp });
    
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
