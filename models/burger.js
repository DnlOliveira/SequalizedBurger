
module.exports = function( sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,

      unique: {
        msg: "Burger with this name already exists"
      },
      validate: {
        notEmpty: {
          msg: "A name must be entered"
        }
      }
    },

    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });
  return Burger;
};
