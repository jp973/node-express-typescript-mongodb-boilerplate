import { Connection, ObjectId, Schema, Types } from "mongoose";
import { IUser } from "../../db/models/users";
//import { DBModels } from "../../db/models";
import { Logger } from "pino";


declare global {
  namespace Express {
    interface Request {
      apiStatus?: {
        isSuccess?: boolean;
        status?: number;
        error?: {
          statusCode: number;
          message: string;
        };
        message?: string;
        data?: object | string;
        toastMessage?: string;
      };
      startTime?: number;
      txnId?: string;
      environment?: string;
      user?: IUser & {
        _id?: Types.ObjectId | string | unknown;
      };
      db: Connection & {
        // models: DBModels;
      };
      log: Logger;
    }
  }
}

export interface ResponseObject {
  status: number;
  message: string | null;
  data: object | string | null;
  toastMessage: string | null;
}

export interface CustomRequest extends Request {
  // Add custom properties here
  apiStatus?: {
    isSuccess?: boolean;
    message?: string;
    data?: object | object[] | string;
    error?: {
      status: number;
      message: string;
    };
    log?: string | object | unknown;
    count?: number;

    // Add other user-related properties
  };
  startTime?: number;
  txId?: string;
  path?: string;
  baseUrl?: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface SendOTPBody {
  email: string;
}

export interface VerifyOTPBody {
  email: string;
  otp: string;
}

export interface ResetPasswordBody {
  email: string;
  newPassword: string;
}

export interface RefreshTokenBody {
  refresh_token: string;
}
