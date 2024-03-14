import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
      productId: {
            type: mongoose.Schema.Types.objectId,
            ref: "Product"
      },
      quantity: {
            type: Number,
            required: true
      },
})
const orderSchema = new mongoose.Schema({
      orderPrice: {
            type: Number,
            required: true
      },
      customer: {
            type: mongoose.Schema.Types.objectId,
            ref: "User"
      },
      orderItems: {
            type: [orderItemSchema]
      },
      status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING"
      }
}, { timestamp: true })

export const order = mongoose.model("Order", orderSchema)