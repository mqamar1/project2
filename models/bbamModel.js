model.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    // define my columns here
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1] // what is len?
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false, // do I need this to be true if  they only wana post pics?
      len: [1]
    },
    share: {
      type: DataTypes.BOOLEAN
      // allowNull:false
    }

  });
  return User;
};


// Syncs with DB
User.sync(); // from documentaion

// Makes the User Model available for other files (will also create a table)



// image column needed
// assocaiation needed
