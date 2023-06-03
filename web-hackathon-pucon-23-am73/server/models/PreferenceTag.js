module.exports = (sequelize, DataTypes) => {
    const PreferenceTag = sequelize.define(" PreferenceTag", {
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
    PreferenceTag.associate = (models) => {

        PreferenceTag.belongsTo(models.User, {
            onDelete: "cascade",
        });
    };
    //  PreferenceTag.sync({ alter: true })
    return PreferenceTag;
}