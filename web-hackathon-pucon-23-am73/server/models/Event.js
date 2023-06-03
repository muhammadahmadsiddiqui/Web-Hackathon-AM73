module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recurring: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    Event.associate = (models) => {
        Event.belongsToMany(models.User,
            { through: 'UserEvent' }
        );
        // Event.hasMany(models.PreferenceTag, {
        //     onDelete: "cascade",
        // });
    };
    Event.sync({ alter: true })
    return Event;
};