const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Category = require('./categoryModel');
const Professor = require('./professorModel');
const Evaluation = require('./evaluationModel'); // Importa el modelo Evaluation
const Content = require('./ContenidoModel');
const { is } = require('bluebird');

const Product = sequelize.define(
  'Product',
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'category_id',
      },
    },
  },
  {
    tableName: 'courses',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = Product;
