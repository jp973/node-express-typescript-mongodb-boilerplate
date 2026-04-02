

export enum USER_ROLES {
  USER = "user",
  ADMIN = "admin",
}


export const CONSTANTS = {
  MONGODB_RECONNECT_INTERVAL: 5000,
  MONGODB_RETRY_COUNT: 6,
  OTP_EXPIRATION_TIME: 10,
  WHATSAPP_COLLECTION: "whatsapp",
  USER_COLLECTION:'users',
};

export enum COLLECTIONS {
  ACCESS_TOKEN = "accesstokens",
  REFRESH_TOKEN = "refreshtokens",
  USER = "users",
  OTP = "otps",
  ADMIN = "admins"
}