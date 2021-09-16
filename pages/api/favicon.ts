import { VercelRequest, VercelResponse } from "@vercel/node";

class RequestError extends Error {
  public statusCode: number | undefined;

  constructor(statusCode: number, message?: string) {
    super(message);

    this.statusCode = statusCode;
  }
}

export default async function favicon(req: VercelRequest, res: VercelResponse) {
  try {
    const { url } = req.query;

    if (!url) {
      throw new Error("URL wasn't provided.");
    }

    const response = await fetch(
      `https://www.google.com/s2/favicons?domain=${url}`
    );

    if (response.ok) {
      const blob = await response.blob();
      const stream = blob.stream();

      res.setHeader(
        "Content-Type",
        response.headers.get("content-type") ?? "image/png"
      );
      res.setHeader("Cache-Control", "public, max-age=31536000");
      res.send(stream);
    } else {
      throw new RequestError(response.status, response.statusText);
    }
  } catch (error) {
    let message = "[API][FAVICON]: ";

    if (error instanceof RequestError) {
      message += `${error.statusCode} - ${error.message}`;
    } else if (error instanceof Error) {
      message += `${error.message}`;
    } else {
      message += `${error}`;
    }

    console.error(message);

    const placeholder =
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0O2qmlbUEnt5r3Juas+hsQD6KaG7dqCKPgx72Pe9GIY27btZBrbtm3btm0nO12D7tVXe63jqtqqU/iDw9K58sEruKkngH0DBljOE+T/qqx/Ln718RZOFasxyd3XRbWzlFMxRbgOTx9QWFzHtZlD+aqLb108sOAIAai6+NbHW7lUHaZkDFJt+wp1DG7R1d0b7Z88EOL08oXwjokcOvvUxYMjBFCamWP5KjKBjKOpZx2HEPj+Ieod26U+dpg6lK2CIwTQH0oECGT5eHj+IgSueJ5fPaPg6PZrz6DGHiGAISE7QPrIvIKVrSvCe2DNHSsehIDatOBna/+OEOgTQE6WAy1AAFiVcf6PhgCGxEvlA9QngLlAQCkLsNWhBZIDz/zg4ggmjHfYxoPGEMPZECW+zjwmFk6Ih194y7VHYGOPvEYlTAJlQwI4MEhgTOzZGiNalRpGgsOYFw5lEfTKybgfBtmuTNdI3MrOTAQmYf/DNcAwDeycVjROgZFt18gMso6V5Z8JpcEk2LPKpOAH0/4bKMCAYnuqm7cHOGHJTBRhAEJN9d/t5zCxAAAAAElFTkSuQmCC";

    const buffer = Buffer.from(placeholder, "base64");

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Length", buffer.length);
    res.end(buffer);
  }
}
