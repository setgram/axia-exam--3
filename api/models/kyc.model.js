import mongoose from "mongoose";

const kycSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  idProof: { type: String, required: true },
  addressProof: { type: String, required: true },
});

const KYC = mongoose.model("KYC", kycSchema);
export default KYC;
