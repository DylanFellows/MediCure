// Import tables in models
const db = require('../models');

// Allows routes to be used outside of this file
module.exports = function (myApp) {


    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('medicure_db', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
       operatorsAliases: false,
       define: {
        timestamps: false
    }
    });

    // Gets the product infomration from the db, sorting on product name within department name
    myApp.get('/api/professionals', function (req, res) {
        db.Professional.findAll(
            {
                order: [
                    ['prof_firstName', 'ASC'],
                ],
                type: sequelize.QueryTypes.SELECT
            }
        ).then(function (rows) {
            res.json(rows)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });


     // Update existing dealer in db 
     myApp.put('/api/UpdateProfessional/:id&:prof_firstName&:prof_lastName&:profession&:workplace&:languages&:fac_phone', function (req, res) {
        console.log("Made it to update backend");
        let updateDealerQuery = 'UPDATE Professionals SET prof_firstName = :prof_firstName, profession=:profession, workplace=:workplace, languages=:languages, fac_phone=:fac_phone ' +
            'WHERE id=:id';
        sequelize.query(updateDealerQuery,
            {
                replacements: {
                    id: req.params.id, prof_firstName: req.params.prof_firstName, prof_lastName: req.params.prof_lastName, profession: req.params.profession, workplace: req.params.workplace, languages: req.params.languages,
                    fac_phone: req.params.fac_phone
                },
                type: sequelize.QueryTypes.UPDATE
            }
        ).then(function (response) {
            res.json(response);
        }).catch(function (error) {
            console.log("ERROR WHILE ATTEMPTING TO UPDATE PROFESSIONAL");
            console.log(error);
            res.json({ error: error });
        });
    });
}