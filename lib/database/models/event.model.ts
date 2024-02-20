import { Document, Schema, model, models } from "mongoose";


export interface IEvent extends Document {
  _id: string;
  title: string;
  description: string;
  location: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree?: boolean;
  url?: string;
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  organizer: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createAt: { type: Date, default: Date.now },
  startDateTime: { type: Date, default: Date.now, required: true },
  endDateTime: { type: Date, default: Date.now, required: true },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
