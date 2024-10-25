const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PlVRqLMgtFI0dfMdifbRl468LuejIcFyi5Vk0cxJ4smB7u5AfLC4LFOZyJ01eCUg3KthxpuU1z3desxsGOOMp6X009x6aytLF"
);

// - API

// - APP CONFIG
const app = express();

// - MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// - API ROUTES
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //if okay created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - LISTEN COMMANDS
exports.api = functions.https.onRequest(app);
