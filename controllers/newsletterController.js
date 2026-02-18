import * as newsletterModel from "../models/newsletterModel.js"


//POST subscribe
export const subscribe = (req, res) => {
  const { name, email } = req.body;

  newsletterModel.subscribe({ name, email }, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Subscribed successfully" });
  });
};

//GET getsubscribers
export const getSubscribers = (req, res) => {
  newsletterModel.getSubscribers((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
