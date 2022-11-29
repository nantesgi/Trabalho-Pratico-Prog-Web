import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";

import { booksRoutes } from "./book.routes";
import { gamesRoutes } from "./game.routes";
import { laptopsRoutes } from "./laptop.routes";
import { microWavesRoutes } from "./micro-wave.routes";
import { productsRoutes } from "./product.routes";
import { refrigeratorsRoutes } from "./refrigerator.routes";
import { usersRoutes } from "./users.routes";
import { washingMachinesRoutes } from "./washing-machine.routes";

const router = Router();

router.use("/products", productsRoutes);
router.use("/books", booksRoutes);
router.use("/games", gamesRoutes);
router.use("/laptops", laptopsRoutes);
router.use("/refrigerators", refrigeratorsRoutes);
router.use("/washing-machines", washingMachinesRoutes);
router.use("/micro-waves", microWavesRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
