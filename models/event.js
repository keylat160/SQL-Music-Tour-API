'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
  static associate ({ Stage, StageEvent }) {
      //stages
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent
      })
    }
  }
  event.init({
    event_id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    name: {
    type:DataTypes.STRING,
    allowNull: false
    },
    genre: {
   type: DataTypes.TEXT,
   allowNull: false
    },
    available_start_time: {
     type:DataTypes.DATE,
     allowNull: false
    },
    end_time: {
        type:DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'event',
    tableName: 'events',
    timestamps: false
  });
  return event;
};