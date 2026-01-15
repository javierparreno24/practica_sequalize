import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class proveedores extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      contacto: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      telefono: {
        type: DataTypes.STRING(50),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'proveedores',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
}