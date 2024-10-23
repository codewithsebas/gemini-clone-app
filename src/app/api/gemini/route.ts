import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const { message } = await req.json();

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error consultando la data de Gemini API:", error);
    return NextResponse.json(
      { error: "Error en la solicitud" },
      { status: 500 },
    );
  }
}
