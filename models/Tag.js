const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection')

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        // product_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "product",
        //         key: "id"
        //     }
        // },
        // // tag_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "tag",
        //         key: "id"
            }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = Tag;