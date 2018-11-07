module.exports = function (sequelize, DataTypes) {
    const professional = sequelize.define('Professional', {
        prof_firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prof_lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false
        },
        workplace: {
            type: DataTypes.STRING,
            allowNull: false
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fac_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
          allowNull: true,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE
        }
    });
    return professional;
}