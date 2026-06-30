export function errorHandler(err, _req, res, _next) {
  // eslint-disable-next-line no-console
  console.error("API error:", err);

  // Keep response user-friendly.
  const message = typeof err?.message === "string" ? err.message : "Internal server error";

  return res.status(500).json({ success: false, message: message });
}

