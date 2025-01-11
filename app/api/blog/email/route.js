// app/api/email/route.js

import { ConnectDB } from "@/lib/config/db"; // Update this path if needed
import EmailModel from "@/lib/models/EmailModel"; // Update this path if needed
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body as JSON
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, msg: "Email is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await ConnectDB();

    // Save email to the database
    const newEmail = new EmailModel({ email });
    await newEmail.save();

    return NextResponse.json(
      { success: true, msg: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
