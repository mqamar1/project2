module.exports = function(sequelize, DataTypes) {
  var EscapePost = sequelize.define("EscapePost", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    journal_entry: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    share: {
      type: DataTypes.BOOLEAN

    }
  });

  EscapePost.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    EscapePost.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return EscapePost;
};
