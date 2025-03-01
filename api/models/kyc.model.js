import mongoose from "mongoose";

const kycSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
});

const KYC = mongoose.model("KYC", kycSchema);
export default KYC;
