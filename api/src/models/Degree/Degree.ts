//from modules
import mongoose, { Schema } from "mongoose";

//interface
import { IDegree } from "./IDegree";

const schemaDegree = new Schema({
  name: {
    type: String,
    required: true,
  },
  shifts: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Shift" }],
  },
  students: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Student" }],
  },
  teachers: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Teacher" }],
  },
  subjects: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Subject" }],
  },
});

const Degree = mongoose.model<IDegree>("Degree", schemaDegree);

export default Degree;
