module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    passWord: {
      type: DataTypes.STRING,
      len: [1, 140]
    }
  });


  User.associate = function(models) {
    User.hasMany(models.EscapePost, {
      onDelete: "cascade"
    });
  };
  return User;
};



// User table only Holds user name and password.
