'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
   static associate ({ Band }) {
   //band
   MeetGreet.belongsTo (Band, {
    foreingKey: "band_id",
    as:"band"
   })
   
    }
  }
  meetgreet.init({
    meetgreet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
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
    modelName: 'meetgreet',
    tableName: 'meetgreet',
    timestamps: false
  });
  return meetgreet;
};