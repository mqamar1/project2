// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('User', {
//
//     userName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 25]
//       }
//     },
//     passWord: {
//       type: DataTypes.STRING,
//       len: [1, 140]
//     },
//     createdAt: {
//       type: DataTypes.DATE(3),
//       defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
//     },
//     updatedAt: {
//       type: DataTypes.DATE(3),
//       defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
//     }
//   });
//
//
//   User.associate = function(models) {
//     User.hasMany(models.EscapePost, {
//       onDelete: "cascade"
//     });
//   };
//   return User;
// };




module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.TEXT},
		about : {type:Sequelize.TEXT},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		password : {type: Sequelize.STRING,allowNull: false },
		last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

User.associate = function(models) {
  User.hasMany(models.EscapePost, {
    onDelete: "cascade"
  });
};

	return User;

};

// User table only Holds user name and password.


// User table only Holds user name and password.
