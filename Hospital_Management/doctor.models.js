import mongoose from "mongoose"

const hospitalHours = new mongoose.Schema({
      workHours: {
            type: mongoose.Schema.Types.objectedId,
            ref: "Hospital"
      }
})
const doctorSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      salary: {
            type: String,
            required: true
      },
      qualification: {
            type: String,
            required: true
      },
      experiencInYears: {
            type: Numbers,
            default: 0
      },
      worksInHoapitals: [{
            type: [workHours]

      }]
}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema);