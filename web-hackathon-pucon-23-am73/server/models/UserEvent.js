module.exports = (sequelize, DataTypes) => {
    const UserEvent = sequelize.define(" UserEvent", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        relation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    UserEvent.associate = (models) => {
        UserEvent.belongsTo(models.Event, {
            onDelete: "cascade",
        });
        UserEvent.belongsTo(models.User, {
            onDelete: "cascade",
        });

    };
    //  UserEvent.sync({ alter: true })
    return UserEvent;
}