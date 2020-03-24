'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};