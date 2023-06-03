module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        commentText: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        datePosted: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW, // set the default value to the current date
        }
    }, {
        timestamps: false
    });

    // Comment.sync({ alter: true })
    return Comment;
};