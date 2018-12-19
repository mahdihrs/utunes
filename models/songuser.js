'use strict';
module.exports = (sequelize, DataTypes) => {
  const songUser = sequelize.define('songUser', {
    UserId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER
  }, {});
  songUser.associate = function(models) {
    // associations can be defined here
  };
  return songUser;
};