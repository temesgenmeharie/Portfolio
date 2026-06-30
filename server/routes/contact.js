import { Router } from "express";

import { validateContactPayload } from "../validation/contact.js";
import { sanitizeContactPayload } from "../validation/contact.js";
import { contactRateLimiter } from "../middleware/rateLimit.js";
import { sendContactEmail } from "../email/resend.js";

const router = Router();

router.post("/contact", contactRateLimiter, async (req, res, next) => {
  try {
    // 1) Server-side validation
    const validation = validateContactPayload(req.body);
    if (!validation.ok) {
      return res.status(400).json({ success: false, message: validation.message });
    }

    // 2) Sanitization (after validation so we can reliably validate raw data)
    const payload = sanitizeContactPayload(req.body);

    // 3) Email integration
    await sendContactEmail(payload);

    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    return next(err);
  }
});

export default router;

