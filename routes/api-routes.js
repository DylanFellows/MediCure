// Import tables in models
const db = require('../models');
const Sequelize = require('sequelize');


// Allows routes to be used outside of this file
module.exports = function (myApp) {


    
    const sequelize;
    if(process.env.JAWSDB_URL){
       sequelize = new Sequelize(process.env.JAWSDB_URL);
    }
    else{
       sequelize = new Sequelize('Medicure_db', 'root', 'root', {
           host: 'localhost',
           dialect: 'mysql',
           operatorsAliases: false,
       });
    }

    // Gets the product infomration from the db, sorting on product name within department name
    myApp.get('/api/professionals/', function (req, res) {
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

    myApp.post('/api/PostProfessional/:prof_firstName&:prof_lastName&:profession&:workplace&:languages&:fac_phone&:address&:gender', function (req, res) {
        console.log("Posted new data!");
        let postProfessionalQuery = "INSERT INTO professionals(prof_firstName, prof_lastName, profession, workplace, languages, fac_phone, address, gender) VALUES" + '(:prof_firstName, :prof_lastName, :profession, :workplace, :languages, :fac_phone, :address, :gender)';
        sequelize.query(postProfessionalQuery,
            {
                replacements: {
                    prof_firstName: req.params.prof_firstName, prof_lastName: req.params.prof_lastName, profession: req.params.profession, workplace: req.params.workplace, languages: req.params.languages, fac_phone: req.params.fac_phone, address: req.params.address, gender: req.params.gender
                },
                type: sequelize.QueryTypes.INSERT
            }
        ).then(function (rows) {
            console.log(rows);
            res.json(rows)
        }).catch(function (error) {
            console.log(error);
            res.json({ error: error });
        });
    })


    // Update existing dealer in db 
    myApp.put('/api/UpdateProfessional/:id&:prof_firstName&:prof_lastName&:profession&:workplace&:languages&:fac_phone&:address&:gender', function (req, res) {
        console.log("Made it to update backend");
        let updateProfessionalQuery = 'UPDATE Professionals SET prof_firstName = :prof_firstName, profession=:profession, workplace=:workplace, languages=:languages, fac_phone=:fac_phone, address=:address, gender=:gender ' +
            'WHERE id=:id';
        sequelize.query(updateProfessionalQuery,
            {
                replacements: {
                    id: req.params.id, prof_firstName: req.params.prof_firstName, prof_lastName: req.params.prof_lastName, profession: req.params.profession, workplace: req.params.workplace, languages: req.params.languages,
                    fac_phone: req.params.fac_phone, address: req.params.address, gender: req.params.gender
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

    myApp.delete('/api/DeleteProfessional/:id', function (req, res) {
        console.log("Made it to the backend delete.");
        let deleteProfessionalQuery = 'DELETE FROM Professionals ' + 'WHERE id=:id';
        sequelize.query(deleteProfessionalQuery,
            {
                replacements: {
                    id: req.params.id
                },
                type: sequelize.QueryTypes.DELETE
            }
        ).then(function (response) {
            res.json(response);
        }).catch(function (error) {
            console.log("ERROR WHILE ATTEMPTING TO DELETE PROFESSIONAL");
            console.log(error);
            res.json({ error: error });
        });
    });
}; 