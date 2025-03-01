import KYC from "../models/kyc.model.js";
import User from "../models/user.model.js";

export const kyc = async (req, res) => {
  const { documentType, documentNumber } = req.body;
  const kyc = new KYC({ user: req.user.id, documentType, documentNumber });

  await kyc.save();
  await User.findByIdAndUpdate(req.user.id, { kyc: kyc._id });
  res.status(201).json({ message: "KYC created" });
};
