'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    songTag: DataTypes.STRING,
    ArtistId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.Artist)
    Song.belongsToMany(mdoels.User, {through: SongUser})
  };
  return Song;
};