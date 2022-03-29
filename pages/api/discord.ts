import { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";

const dataSchema = z.object({
  email: z.string().email("Invalid email"),
  message: z
    .string()
    .min(1, "Message too short")
    .max(2000, "Message too long (2000+ characters)."),
  name: z.string().min(2, "Name is too short").max(255, "Name is too long"),
});

export default async function favicon(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed.");
  }

  if (!process.env.DISCORD_CONTACT_MESSAGE_WEBHOOK) {
    console.error("Missing DISCORD_CONTACT_MESSAGE_WEBHOOK");
    return res.status(500).end("Server error");
  }

  try {
    const { email, message, name } = dataSchema.parse(req.body);

    const result = await fetch(process.env.DISCORD_CONTACT_MESSAGE_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "New message",
            description: message,
            color: 1920728,
            fields: [
              {
                name: "Email",
                value: email,
              },
            ],
            author: {
              name,
            },
            timestamp: new Date(),
          },
        ],
      }),
    });

    if (result.ok) {
      return res.status(200).end("OK");
    }

    throw new Error("Failed to send message");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).end("Validation error");
    }

    res.status(500).end("Server error");
  }
}
