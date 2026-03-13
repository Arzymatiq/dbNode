import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  image: {
    type: String
  },

  price: {
    type: Number,
    required: true
  },

  wholesalePrice: {
    type: Number
  },

  minWholesaleQty: {
    type: Number,
    default: 10
  },

  colors: [
    {
      color: { type: String },
      stock: { type: Number, default: 0 }
    }
  ],

  totalStock: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Product", ProductSchema);
