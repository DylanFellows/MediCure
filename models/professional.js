module.exports = function (sequelize, DataTypes) {
    const Professional = sequelize.define('Professional', {
        prof_firstName: {
            type: DataTypes.STRING,
        },
        prof_lastName: {
            type: DataTypes.STRING,
        },
        profession: {
            type: DataTypes.STRING
        },
        workplace: {
            type: DataTypes.STRING
        },
        languages: {
            type: DataTypes.STRING
        },
        fac_phone: {
            type: DataTypes.STRING
        }
    });
    return Professional;
}