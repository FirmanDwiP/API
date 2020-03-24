'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};