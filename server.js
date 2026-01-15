import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

import initModels from "./models/init-models.js";
import { sequelize } from "./config/db.js";

const app = express();
app.use(express.json());

// Inicializa modelos (para que Sequelize tenga todo listo)
initModels(sequelize);

// =============================
// AUTO-MONTAJE DE RUTAS
// routes/<modelo>Routes.js  ->  /api/<modelo>
// =============================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const routesDir = path.join(__dirname, "routes");

// Detecta todos los *Routes.js
const routeFiles = fs
  .readdirSync(routesDir)
  .filter((f) => f.endsWith("Routes.js"));

for (const file of routeFiles) {
  const modelName = file.replace("Routes.js", ""); // productos, clientes, categorias...
  const routeUrl = pathToFileURL(path.join(routesDir, file)).href;

  // Import dinámico del router
  const mod = await import(routeUrl);

  // Montaje estándar:
  app.use(`/api/${modelName}`, mod.default);

  // Mantén compatibilidad con tu ruta actual de logs (plural)
  if (modelName === "log") {
    app.use("/api/logs", mod.default);
  }

  console.log(`✅ Ruta montada: /api/${modelName} -> ${file}`);
}

// =============================
// SINCRONIZAR DB
// =============================
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Tablas sincronizadas.");
  } catch (error) {
    console.error("❌ Error al sincronizar las tablas:", error);
  }
})();

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));