module.exports = (sequelize, DataTypes) => {
    const FavoriteItem = sequelize.define(" FavoriteItem", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    FavoriteItem.associate = (models) => {
        FavoriteItem.belongsTo(models.User, {
            onDelete: "cascade",
        });
        FavoriteItem.belongsTo(models.Event, {
            onDelete: "cascade",
        });

    };
    //  FavoriteItem.sync({ alter: true })
    return FavoriteItem;
}