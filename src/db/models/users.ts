import { Document, ObjectId, Schema, SchemaOptions } from "mongoose";


/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: Unique identifier of the user
 *          example: "64d2fa92e5b5f7765e4e13a2"
 *        name:
 *          type: string
 *          description: Full name of the user
 *          example: "Shashank"
 *        countryCode:
 *          type: string
 *          description: Country code of the user's phone number
 *          example: "91"
 *        phone:
 *          type: string
 *          description: Phone number of the user
 *          example: "9876543210"
 *        isEnabled:
 *          type: boolean
 *          description: Indicates if the user account is enabled
 *          example: true
 *        isVerified:
 *          type: boolean
 *          description: Indicates if the user's email or phone is verified
 *          example: false
 *        isDeleted:
 *          type: boolean
 *          description: Indicates if the user account is deleted
 *          example: false
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: Date and time when the user account was created
 *          example: "2024-12-01T12:34:56.789Z"
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: Date and time when the user account was last updated
 *          example: "2024-12-10T09:30:45.123Z"
 */

export interface IUser {
  username?: string;
  countryCode?: string;
  phone?: string;
  isEnabled?: boolean;
  isVerified?: boolean;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserWithId extends IUser {
  _id: ObjectId;
}

export interface IUserModel extends IUser, Document {}

export const UserSchema: Schema = new Schema(
  {
    username: { type: String },
    phone: { type: String, required: true },
    countryCode: { type: String, required: true },
    isEnabled: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    usePushEach: true,
    bufferCommands: true,
    versionKey: false,
  } as SchemaOptions,
);

UserSchema.index({ countryCode: 1, phone: 1 }, { unique: true });
UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });
