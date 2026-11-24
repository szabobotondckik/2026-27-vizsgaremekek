const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>
{
    class User extends Model {};

    User.init
    (
        {
            user_id:
            {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },

            name:
            {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            email:
            {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },

            password:
            {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },

           
        },

        {
           sequelize,
           modelName: "Person",
           tableName: "persons",
           createdAt: "registeredAt"
        }
    );
    
    return Person;
}