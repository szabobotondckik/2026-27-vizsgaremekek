const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>
{
    class Loans extends Model {};

    Loans.init
    (
        {
             loan_id:
            {
                type: DataTypes.UUID,
                secondarykey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            book_id:
            {
                type: DataTypes.UUID,
                secondarykey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },

            user_id:
            {
                type: DataTypes.UUID,
                secondarykey: true,
                defaultValue: DataTypes.UUIDV4,
            },


            loan_date:
            {
                type: DataTypes.DATE,
                allowNull: false,
            },

            status:
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
            modelName: "Loan",
            tableName: "loans",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Pet;
}