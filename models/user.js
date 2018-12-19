'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Song, {through: SongUser})
  };
  return User;
};