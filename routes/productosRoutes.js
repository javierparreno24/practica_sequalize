// routes/productosRoutes.js
import express from "express";
import {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
} from "../controllers/base/productosController.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.post("/", crearProducto);
router.put("/:id", actualizarProducto);
router.delete("/:id", eliminarProducto);

export default router;