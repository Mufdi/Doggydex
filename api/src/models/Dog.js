const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey : true,
      defaultValue : Sequelize.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMin: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    heightMax: {
      type: DataTypes.STRING,
      allowNull: true 
    },
    weightMin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weightMax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false
  });
};
