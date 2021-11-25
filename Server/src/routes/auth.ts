import express from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("The email is invald"),
  body("password").isLength({ min: 5 }).withMessage("The password is invald"),
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      return res.json({ errors });
    }

    const { email, password } = req.body;
    res.send("SIGNUP ROUTE");
  }
);

export default router;
