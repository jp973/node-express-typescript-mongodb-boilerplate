import { Express } from "express-serve-static-core";
import baseRoutes from "./admin/baseRoutes";
//import authRoutes from "./admin/auth";
import genericRoutes from "./generic/index";


export function importBaseRoutes(app: Express) {
  app.use("/v1", baseRoutes);
  //app.use("/v1/admin", authRoutes);
  app.use("/v1/generic", genericRoutes);
}



