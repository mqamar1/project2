module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    body: {
      type: DataTypes.TEXT,
      len: [1, 140]
    },
    share: {
      type: DataTypes.BOOLEAN

    },
  });

  return User;
};
