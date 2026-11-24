const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>
{
    class Author extends Model {};

    Author.init
    (
        {
            author_id:
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
            }
        },

        {
           sequelize,
           modelName: "Author",
           tableName: "authors",
        }
    );
    
    return Author;
}