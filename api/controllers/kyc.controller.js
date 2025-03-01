import KYC from "../models/kyc.model.js";

export const kyc = async (req, res) => {
  const { fullName, address } = req.body;
  const kyc = new KYC({ user: req.user.id, fullName, address });

  await kyc.save();
  await User.findByIdAndUpdate(req.user.id, { kyc: kyc._id });
  res.status(201).json({ message: "KYC created" });
};
