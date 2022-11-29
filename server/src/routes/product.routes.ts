import { Router } from "express";
import { listProductController } from "../modules/products/useCases/list/listProduct";

import multer from "multer";
import { checkoutProductController } from "../modules/products/useCases/checkoutProduct";

const storage = multer.diskStorage({
  destination: "./tmp",
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".")[1];
    return cb(null, `${Date.now()}.${extension}`);
  },
});

const upload = multer({
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Wrong file type"));
    }
    return cb(null, true);
  },
  storage: storage,
});

const productsRoutes = Router();

productsRoutes
  .get("/:searchField?", (req, res, next) => {
    return listProductController.handle(req, res, next);
  })
  .post("/import-photo", upload.single("file"), (req, res) => {
    res.status(201).json({ photo: req.file?.filename });
  })
  .post("/checkout/:userId", (req, res, next) => {
    return checkoutProductController.handle(req, res, next);
  });

export { productsRoutes };
