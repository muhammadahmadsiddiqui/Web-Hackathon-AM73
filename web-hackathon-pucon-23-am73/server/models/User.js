module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notificationPreference: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false
    });
    // User.associate = (models) => {

    // User.hasMany(models.PreferenceTag, {
    //     onDelete: "cascade",
    // });
    // User.hasMany(models.FavoriteItem, {
    //     onDelete: "cascade",
    // });
    // User.hasMany(models.Event, {
    //     onDelete: "cascade",
    // });
    // };
    User.sync({ alter: true })
    return User;
}