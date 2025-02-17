"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Build extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Build.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      Build.belongsTo(models.Hero, {
        foreignKey: "HeroId",
      });
      Build.belongsTo(models.Item, {
        foreignKey: "Item1Id",
        as: "item1",
        constraints: false,
      });
      Build.belongsTo(models.Item, {
        foreignKey: "Item2Id",
        as: "item2",
        constraints: false,
      });
      Build.belongsTo(models.Item, {
        foreignKey: "Item3Id",
        as: "item3",
        constraints: false,
      });
      Build.belongsTo(models.Item, {
        foreignKey: "Item4Id",
        as: "item4",
        constraints: false,
      });
      Build.belongsTo(models.Item, {
        foreignKey: "Item5Id",
        as: "item5",
        constraints: false,
      });
      Build.belongsTo(models.Item, {
        foreignKey: "Item6Id",
        as: "item6",
        constraints: false,
      });
      Build.belongsTo(models.Item, {
        foreignKey: "Item7Id",
        as: "item7",
        constraints: false,
      });
    }
  }
  Build.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "User ID is required",
          },
          notEmpty: {
            msg: "User ID is required",
          },
        },
      },
      HeroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Hero ID is required",
          },
          notEmpty: {
            msg: "Hero ID is required",
          },
        },
      },
      Item1Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item ID is required",
          },
          notEmpty: {
            msg: "Item ID is required",
          },
        },
      },
      Item2Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item ID is required",
          },
          notEmpty: {
            msg: "Item ID is required",
          },
        },
      },
      Item3Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item ID is required",
          },
          notEmpty: {
            msg: "Item ID is required",
          },
        },
      },
      Item4Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item ID is required",
          },
          notEmpty: {
            msg: "Item ID is required",
          },
        },
      },
      Item5Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item ID is required",
          },
          notEmpty: {
            msg: "Item ID is required",
          },
        },
      },
      Item6Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item ID is required",
          },
          notEmpty: {
            msg: "Item ID is required",
          },
        },
      },
      Item7Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item ID is required",
          },
          notEmpty: {
            msg: "Item ID is required",
          },
        },
      },
      vote: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Build",
    }
  );
  return Build;
};
