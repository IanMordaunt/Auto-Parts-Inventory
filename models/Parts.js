const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parts extends Model {}

Parts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        part_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        store_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "stores",
                key: "id"
            }
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'parts',
    }
);

module.exports = Parts;
