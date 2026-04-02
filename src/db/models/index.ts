import { Connection, Model } from "mongoose";
import { IUser, UserSchema } from "./users";
import { COLLECTIONS } from "../../utils/v1/constants";
import { IAdmin, AdminSchema } from "./admin";
import { IOtpModel, OtpSchema } from "./otp";
import { IAccessTokenModel, AccessTokenSchema } from "./accessToken";
import { IRefreshTokenModel, RefreshTokenSchema } from "./refreshToken";


export interface DBModels {

    [COLLECTIONS.USER]: Model<IUser>;
    [COLLECTIONS.ADMIN]: Model<IAdmin>;
    [COLLECTIONS.OTP]: Model<IOtpModel>;
    [COLLECTIONS.ACCESS_TOKEN]: Model<IAccessTokenModel>;
    [COLLECTIONS.REFRESH_TOKEN]: Model<IRefreshTokenModel>;

}

export async function registerAllModels(conn: Connection) {

    conn.model<IUser>(COLLECTIONS.USER, UserSchema)
    conn.model<IAdmin>(COLLECTIONS.ADMIN, AdminSchema)
    conn.model<IOtpModel>(COLLECTIONS.OTP, OtpSchema)
    conn.model<IAccessTokenModel>(COLLECTIONS.ACCESS_TOKEN, AccessTokenSchema)
    conn.model<IRefreshTokenModel>(COLLECTIONS.REFRESH_TOKEN, RefreshTokenSchema)
}
