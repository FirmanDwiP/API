'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drivers = sequelize.define('Drivers', {
    id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    phone_number: DataTypes.INTEGER
  }, {});
  Drivers.associate = function(models) {
    // associations can be defined here
  };
  return Drivers;
};