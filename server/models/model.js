const db = require("../database/db");

const { DataTypes } = require("sequelize");

const report = db.define("reports", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: null,
  },
  name: { type: DataTypes.STRING },
  comment: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  nameImage: { type: DataTypes.STRING },
  temp: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE },
});

module.exports = report;
