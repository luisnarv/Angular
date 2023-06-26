const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
sequelize.define("Users",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dni: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numphone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"USER"
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },

}, {
    timestamps: false
})
}