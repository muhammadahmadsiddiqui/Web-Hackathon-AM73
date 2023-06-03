module.exports = (sequelize, DataTypes) => {
    const EventCapacity = sequelize.define(" EventCapacity", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        remainingCapacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    EventCapacity.associate = (models) => {
        EventCapacity.belongsTo(models.Event, {
            onDelete: "cascade",
        });

    };
    //  EventCapacity.sync({ alter: true })
    return EventCapacity;
}