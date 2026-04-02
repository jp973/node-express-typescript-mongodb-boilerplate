import { Document, Schema, Model, model, SchemaOptions } from "mongoose";
import { ObjectId } from "mongodb";
import { config } from "../../config/v1/config";
import { COLLECTIONS } from "../../utils/v1/constants";
import { addJson, findJsonInJsonArray } from "../../utils/v1/helper";

/**
 * @swagger
 * components:
 *   schemas:
 *     OTP:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *           description: Unique identifier for the OTP record
 *         otp:
 *           type: string
 *           description: The one-time password value
 *         email:
 *           type: string
 *           format: email
 *           description: Email address the OTP was sent to
 *         isVerified:
 *           type: boolean
 *           description: Indicates if the OTP was verified
 *         userId:
 *           type: string
 *           format: objectId
 *           description: Reference to the user this OTP belongs to
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the OTP was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the OTP was last updated
 */
export interface IOtp {
  _id?: ObjectId | string;
  otp: string;
  email: string;
  isVerified: boolean;
  userId: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IOtpModel extends Omit<IOtp, "_id">, Document {
  _id: ObjectId;
}

export const OtpSchema: Schema = new Schema(
  {
    otp: { type: String, required: true },
    email: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: COLLECTIONS.USER  ,required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  } as SchemaOptions,
);

OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });
OtpSchema.set("toObject", { virtuals: true });
OtpSchema.set("toJSON", { virtuals: true });

export const OtpModel: Model<IOtpModel> = model<IOtpModel>(COLLECTIONS.OTP, OtpSchema);

const outcome = findJsonInJsonArray(config.DYNAMIC_MODELS, COLLECTIONS.OTP, "name");

if (!outcome) {
  const obj: Record<string, string | typeof OtpModel> = {};
  addJson(obj, "name", COLLECTIONS.OTP);
  addJson(obj, "model", OtpModel);
  config.DYNAMIC_MODELS.push(obj);
}
