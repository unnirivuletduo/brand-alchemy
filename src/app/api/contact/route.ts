import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!process.env.FORM_SECRET) {
      return NextResponse.json(
        { error: "FORM_SECRET missing in Vercel" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.brandalchemy.co.nz/wp-json/secure/v1/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.FORM_SECRET,
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();

    return NextResponse.json({
      status: response.status,
      wordpress_response: text,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Server crash" },
      { status: 500 }
    );
  }
}
