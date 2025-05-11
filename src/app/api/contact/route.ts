import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic in-memory store for demo purposes if not using a real email service initially
let contactRequests: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, date } = body;

    if (!name || !email || !message || !date) {
      return NextResponse.json({ message: "Name, email, message, and date are required" }, { status: 400 });
    }

    const preferredDate = new Date(date);

    // Simulate saving the request (e.g., to a database or sending an email)
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company: company || "N/A",
      phone: phone || "N/A",
      message,
      preferredDate: preferredDate.toLocaleString("es-ES", { timeZone: "UTC" }), // Example formatting
      receivedAt: new Date().toISOString(),
    };
    contactRequests.push(newRequest);

    console.log("New contact request received:", newRequest);

    // Configure Nodemailer (replace with your actual SMTP credentials or service)
    // For now, we will just log to console as if email was sent.
    // In a real scenario, you would configure a transporter like this:
    /*
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "your-email@example.com", // your SMTP username
        pass: "your-smtp-password",   // your SMTP password
      },
    });

    const mailOptions = {
      from: '"AIUX Studio Contact" <noreply@aiuxstudio.com>', // sender address
      to: "your-receiving-email@example.com", // list of receivers (your email)
      subject: "New Contact Request from AIUX Studio Website", // Subject line
      text: `A new contact request has been submitted:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nPhone: ${phone || 'N/A'}\nPreferred Date: ${preferredDate.toLocaleString("es-ES")}\nMessage: ${message}`,
      html: `<p>A new contact request has been submitted:</p>
             <ul>
               <li><strong>Name:</strong> ${name}</li>
               <li><strong>Email:</strong> ${email}</li>
               <li><strong>Company:</strong> ${company || 'N/A'}</li>
               <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
               <li><strong>Preferred Date:</strong> ${preferredDate.toLocaleString("es-ES")}</li>
               <li><strong>Message:</strong> ${message}</li>
             </ul>`,
    };

    try {
      // await transporter.sendMail(mailOptions);
      // console.log("Email notification sent successfully.");
      console.log("SIMULATING Email notification sent successfully with Nodemailer with data:", mailOptions);
    } catch (emailError) {
      console.error("Error sending email notification:", emailError);
      // Even if email fails, we might still want to return success if data was processed
      // Or handle this error more gracefully depending on requirements
    }
    */

    console.log("SIMULATING Email notification for new contact request:");
    console.log(`To: admin@aiux.studio (example)`);
    console.log(`Subject: Nueva Solicitud de Contacto - ${name}`);
    console.log(`Body:\nNombre: ${name}\nEmail: ${email}\nEmpresa: ${company || 'N/A'}\nTeléfono: ${phone || 'N/A'}\nFecha Preferida: ${preferredDate.toLocaleString("es-ES")}\nMensaje: ${message}`);


    return NextResponse.json({ message: "Request received successfully! We will contact you shortly.", requestId: newRequest.id }, { status: 200 });

  } catch (error) {
    console.error("Error processing contact request:", error);
    let errorMessage = "Internal Server Error";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: "Failed to process request", error: errorMessage }, { status: 500 });
  }
}

// Optional: GET handler to view stored requests (for debugging/demo)
export async function GET(request: NextRequest) {
  return NextResponse.json({ requests: contactRequests }, { status: 200 });
}

