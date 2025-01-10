import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

// pages/api/email.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ success: false, msg: 'Email is required' });
      }
  
      // Simulate a successful subscription process (e.g., send email, store in DB, etc.)
      // Replace this with actual logic, such as calling an email service or database.
  
      return res.status(200).json({ success: true, msg: 'Subscribed successfully!' });
    } else {
      res.status(405).json({ success: false, msg: 'Method Not Allowed' });
    }
  }
  