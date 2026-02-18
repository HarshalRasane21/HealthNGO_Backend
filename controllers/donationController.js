import * as donationModel from "../models/donationModel.js"


//get donations
export const getDonations = (req, res) => {
  donationModel.getDonations((err, results) => {
    if (err) return res.status(500).json(err);

    const donations = results.map((donation) => ({
      ...donation,
      
      // Format date column as "Feb 8, 2026"
      date: donation.created_at
        ? new Date(donation.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : null,
    }));

    res.json(donations);
  });
};


//create donations
export const createDonation = (req, res) => {
  const { user_name, user_email, amount } = req.body;

  donationModel.createDonation(
    { user_name, user_email, amount },
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Donation recorded successfully" });
    }
  );
};


//get total donations as number
export const totaldonation = (req, res) => {
  donationModel.totaldonation((err, result) => {
    if(err) return res.status(500).json(err);
    res.json(result);
  });
};
