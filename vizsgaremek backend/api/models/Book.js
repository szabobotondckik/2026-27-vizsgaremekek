const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>
{
    class Book extends Model {};

    Book.init
    (
        {
            book_id:
            {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },

            title:
            {
                type: DataTypes.STRING,
                allowNull: true,
            },

            publication_year:
            {
                type: DataTypes.DATE,
                allowNull: false,
            },

            description:
            {
                type: DataTypes.STRING,
                allowNull: true,
            },

             category:
            {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },

        {
            sequelize,
            modelName: "Book",
            tableName: "Books",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Pet;
}