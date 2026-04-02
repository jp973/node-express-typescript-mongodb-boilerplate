
import mongoose from "mongoose";
import uniqid from "uniqid";
// import { body } from "express-validator";


export function generateTransactionId(): string {
  return uniqid("tx");
}

export function getObjectIdFromDate(date: Date): string {
  const objectId = Math.floor(date.getTime() / 1000).toString(16) + "0000000000000000";
  return objectId;
}

export function getDateFromObjectId(objectId: string): Date {
  const timestamp = parseInt(objectId.substring(0, 8), 16) * 1000;
  return new Date(timestamp);
}

export function isDateValid(date: Date | null | undefined): boolean {
  return date instanceof Date && !isNaN(date.valueOf());
}

export function toObjectId(id: string | mongoose.Types.ObjectId | unknown): mongoose.Types.ObjectId {
  if (id instanceof mongoose.Types.ObjectId) {
    return id;
  }
  if (typeof id === "string") {
    return new mongoose.Types.ObjectId(id);
  }
  try {
    return new mongoose.Types.ObjectId(String(id));
  } catch (error) {
    console.error("Error converting to ObjectId:", error);
    throw new Error("Invalid ObjectId input");
  }
}

export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export function generateOtp(): string {
  return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit numeric
}
// export const getAllValidator = [
//   body("projection").optional().isObject().withMessage("projection must be an object"),
//   body("options").optional().isObject().withMessage("options must be an object"),
//   body("options.page").optional().isInt({ min: 1 }).withMessage("options.page must be a positive integer"),
//   body("options.itemsPerPage")
//     .optional()
//     .isInt({ min: 1 })
//     .withMessage("options.itemsPerPage must be a positive integer"),
//   body("options.sortBy").optional().isArray().withMessage("options.sortBy must be an array of strings"),
//   body("options.sortDesc").optional().isArray().withMessage("options.sortDesc must be an array of booleans"),
//   body("search").optional().isArray().withMessage("search must be an array"),
//   body("search.*.term").optional().isString().withMessage("search.term must be a string"),
//   body("search.*.fields").optional().isArray().withMessage("search.fields must be an array of strings"),
//   body("search.*.startsWith").optional().isBoolean().withMessage("search.startsWith must be a boolean"),
//   body("search.*.endsWith").optional().isBoolean().withMessage("search.endsWith must be a boolean"),
//   body("filter").optional().isObject().withMessage("filter must be an object"),
// ];

export function findJsonInJsonArray<T>(list: { [key: string]: T }[], value: T, keyToSearch: string): boolean {
  for (const element of list) {
    if (element[keyToSearch] === value) {
      return true;
    }
  }
  return false;
}

export function addJson<T>(obj: Record<string, T>, key: string, value: T): Record<string, T> {
  obj[key] = value;
  return obj;
}




export function escapeRegExp(text: string): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
