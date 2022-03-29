import { NextApiRequest, NextApiResponse } from "next";

// NOTE: This is very barebone, this needs a little bit of worker in the future.
// Allowed methods, proper streaming, caching and refactor.

export default async function favicon(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!req.query.url) {
      throw new Error("Missing URL");
    }

    const result = await fetch(
      `http://www.google.com/s2/favicons?domain=${req.query.url}`,
    );

    if (result.ok) {
      const buffer = await result.blob();

      const stream = buffer.stream();

      res.setHeader("Content-Type", result.headers.get("content-type") ?? "image/png");
      res.setHeader("Content-Length", buffer.size);
      res.setHeader("Cache-Control", "public, max-age=86400");

      res.send(stream);
    }
  } catch (error) {
    console.log(error);

    const placeholder =
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0O2qmlbUEnt5r3Juas+hsQD6KaG7dqCKPgx72Pe9GIY27btZBrbtm3btm0nO12D7tVXe63jqtqqU/iDw9K58sEruKkngH0DBljOE+T/qqx/Ln718RZOFasxyd3XRbWzlFMxRbgOTx9QWFzHtZlD+aqLb108sOAIAai6+NbHW7lUHaZkDFJt+wp1DG7R1d0b7Z88EOL08oXwjokcOvvUxYMjBFCamWP5KjKBjKOpZx2HEPj+Ieod26U+dpg6lK2CIwTQH0oECGT5eHj+IgSueJ5fPaPg6PZrz6DGHiGAISE7QPrIvIKVrSvCe2DNHSsehIDatOBna/+OEOgTQE6WAy1AAFiVcf6PhgCGxEvlA9QngLlAQCkLsNWhBZIDz/zg4ggmjHfYxoPGEMPZECW+zjwmFk6Ih194y7VHYGOPvEYlTAJlQwI4MEhgTOzZGiNalRpGgsOYFw5lEfTKybgfBtmuTNdI3MrOTAQmYf/DNcAwDeycVjROgZFt18gMso6V5Z8JpcEk2LPKpOAH0/4bKMCAYnuqm7cHOGHJTBRhAEJN9d/t5zCxAAAAAElFTkSuQmCC";

    const buffer = Buffer.from(placeholder, "base64");

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Length", buffer.length);
    res.send(buffer);
  }
}
