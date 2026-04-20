"use server";

import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const fullName = formData.get("fullName");
  const message = formData.get("message");

  if (!fullName || !message) {
    return NextResponse.json({
      success: false,
      message: "Empty fields detected",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Portfolio Message from ${fullName}`,
      html: `
        <h1>Message from: <strong>${fullName}</strong></h1>
        <p>Message:</p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json({
      success: true,
      message: "Thank you! I will get back to you",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "failed to send message. Error: " + error,
    });
  }
}
