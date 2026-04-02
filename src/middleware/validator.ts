// import { Request, Response, RequestHandler, NextFunction } from "express";
// import { validationResult, Result } from "express-validator";
// import { exitPoint } from "./exitPoint";

// export const validator: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
//   const errors: Result = validationResult(req);
//   if (!errors.isEmpty()) {
//     req.apiStatus = {
//       isSuccess: false,
//       message: errors.array()[0].msg,
//       status: 400,
//       data: {},
//       toastMessage: errors.array()[0].msg,
//     };
//     return exitPoint(req, res, next);
//   }
//   next();
// };
