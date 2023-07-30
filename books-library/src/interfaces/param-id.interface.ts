import mongoose from "mongoose";

export interface IParamId {
  id: mongoose.Schema.Types.ObjectId | string;
}
