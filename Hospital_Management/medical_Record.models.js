import mongoose from "mongoose"

const medicalrecordSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      age: {
            type: Number,
            required: true
      },
      clientAddress: {
            type: Number,
            required: true
      },
      phoneNumber: {
            type: Number,
            required: true
      },
      reportTime: {
            type: Number,
            required: true
      },
      doctorName: {
            type: mongoose.Schema.Types.objectId,
            ref:"Hospital"
      },
      diseaseName: {
            type: String,
            required: true
      },
      gender: {
            type: String,
            enum: ["M", "F", "O"],
            required: true
      },
}, { timestamps: true })

export const medicalRecord = mongoose.model("medicalRecord", medicalrecordSchema);