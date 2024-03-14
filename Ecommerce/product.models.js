import mongoose from "mongoose";

const productSchema = new mongoose.productSchema({
      name: {
            type: String,
            required: true,
      },
      description: {
            type: String,
            required: true
      },
      productImage: {
            type: String
      },
      price: {
            type: Number,
            default: 0
      },
      stock: {
            type: Number,
            default: 0
      },
      category: {
            type: mongoose.Schema.Types.objectId,
            ref: "Category"
      },
      owner: {
            type: mongoose.Schema.Types.objectId,
            ref: "User"
      }

}, { timestamp: true })

export const Product = mongoose.model("Product", productSchema);