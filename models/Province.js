import mongoose from "mongoose";

const provinceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  inscrits: {
    type: String,
  },
  votants: {
    type: String,
  },
  nuls: {
    type: String,
  },
});

const Province = mongoose.model("Province", provinceSchema);

export default Province;
