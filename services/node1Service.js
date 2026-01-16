// services/node1Service.js
import { sequelize } from "../config/db.js";
import node1 from "../models/node1.js";
import { DataTypes } from "sequelize";

// Inicializamos el modelo con la conexión activa
const Node1 = node1.init(sequelize, DataTypes);

export const crear = (data) => Node1.create(data);
export const listar = () => Node1.findAll();
export const obtenerPorId = (id) => Node1.findByPk(id);

export const actualizar = async (id, data) => {
  const item = await Node1.findByPk(id);
  if (!item) return null;
  await item.update(data);
  return item;
};

export const eliminar = async (id) => {
  const item = await Node1.findByPk(id);
  if (!item) return null;
  await item.destroy();
  return true;
};
