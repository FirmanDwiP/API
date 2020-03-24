'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    drive_id: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};