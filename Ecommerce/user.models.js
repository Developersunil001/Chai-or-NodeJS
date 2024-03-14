import mongoose from "mongoose";

const userSchema = new mongoose.userSchema({
      usename: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
      },
      email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
      }
}, { timestamp: true })

export const User = mongoose.model("User", userSchema)