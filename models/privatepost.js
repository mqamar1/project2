module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('entry', {
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

    links_images: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    }
  });

  // post.associate = function(models) {

  return post;
// };
};
