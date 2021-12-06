import express from "express";
import User from "../models/user";
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe";
// import Article from "../models/article";

const router = express.Router();

router.get("/prices", checkAuth, async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

router.post("/session", checkAuth, async (req, res) => {
  const user = await User.findOne({ email: req.user });

  // Create an article

  // Article.create({
  //   title: "The Secret Behind Success",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies lacus vitae lacus posuere malesuada. In metus dolor, vulputate ac mollis eget, efficitur quis elit. Fusce dignissim sapien non tincidunt facilisis. Nunc dictum tincidunt consectetur. Duis sed turpis ut quam viverra suscipit nec sit amet lacus. Curabitur molestie metus quis eleifend varius.",
  //   access: "Premium",
  // });

  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/articles",
      cancel_url: "http://localhost:3000/article-plans",
      customer: user.stripeCustomerId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  return res.json(session);
});

export default router;
