const { Model, DataTypes } = require('sequelize');

const sequelize = require ('../config/connection');

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: DataTypes.STRING,
            allowNull: false
        // },
        // get tag_name() {
        //     return this._tag_name;
        // },
        // set tag_name(value) {
        //     this._tag_name = value;
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
            },
        // }
    // },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);

module.exports = Tag;