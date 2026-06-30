import express from "express";
import helmet from "helmet";
import cors from "cors";

import contactRouter from "./routes/contact.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Security headers
app.use(helmet());

// If you host frontend separately, adjust CORS accordingly.
app.use(cors());

// Parse JSON bodies
app.use(express.json({ limit: "64kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", contactRouter);

app.use(errorHandler);

const port = process.env.PORT ? Number(process.env.PORT) : 5174;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Contact API listening on http://localhost:${port}`);
});

