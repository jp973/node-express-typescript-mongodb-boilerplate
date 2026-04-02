import { Document, Schema, Model, model, SchemaOptions } from "mongoose";
import { ObjectId } from "mongodb";
import { COLLECTIONS } from "../../utils/v1/constants";
import { config } from "../../config/v1/config";
import { addJson, findJsonInJsonArray } from "../../utils/v1/helper";

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *           description: Unique identifier for the admin
 *         name:
 *           type: string
 *           description: Name of the admin
 *           example: "Admin User"
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the admin
 *           example: "admin@gmail.com"
 *         password:
 *           type: string
 *           description: Hashed password of the admin
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was last updated
 */

export interface IAdmin {
  _id?: ObjectId | string;
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAdminModel extends Omit<IAdmin, "_id">, Document {
  _id: ObjectId;
}

export const AdminSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String},
  },
  {
    timestamps: true,
    versionKey: false,
  } as SchemaOptions,
);

AdminSchema.set("toObject", { virtuals: true });
AdminSchema.set("toJSON", { virtuals: true });

export const AdminModel: Model<IAdminModel> = model<IAdminModel>(COLLECTIONS.ADMIN, AdminSchema);

const outcome = findJsonInJsonArray(config.DYNAMIC_MODELS, COLLECTIONS.ADMIN, "name");

if (!outcome) {
  const obj: Record<string, string | typeof AdminModel> = {};
  addJson(obj, "name", COLLECTIONS.ADMIN);
  addJson(obj, "model", AdminModel);
  config.DYNAMIC_MODELS.push(obj);
}

