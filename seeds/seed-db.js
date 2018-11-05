// Import Database Models
const db = require('../models');

// Syncing sequelize models 
db.sequelize.sync().then(function () {
    db.Professional.bulkCreate([
    {prof_firstName: 'Vincent', prof_lastName: 'Marco', profession: 'Neurosurgeon', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Lindsey', prof_lastName: 'Eaton', profession: 'Dentist', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Thomas', prof_lastName: 'Barley', profession: 'Surgeon', workplace: 'St.Joseph', languages: 'English, German', fac_phone: '427-983-9872'},
    {prof_firstName: 'Diego', prof_lastName: 'Rivetti', profession: 'Psychiatrist', workplace: 'Cardinal Glenon', languages: 'English, Italian, French', fac_phone: '239-646-2398'},
    {prof_firstName: 'Jesus', prof_lastName: 'Zavala', profession: 'Radiographer', workplace: 'Hellen Emergency Center', languages: 'English, Spanish', fac_phone: '427-983-9872'},
    {prof_firstName: 'Emily', prof_lastName: 'Eaton', profession: 'Sonographer', workplace: 'Umbredge Hospital', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Kaydi', prof_lastName: 'Fowler', profession: 'Nurse Practicioner', workplace: 'St.Lewis', languages: 'English', fac_phone: '427-983-9872'},
    {prof_firstName: 'Scott', prof_lastName: 'Miller', profession: 'Orthadonist', workplace: 'Waller Wentrow Hospital', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Nikkia', prof_lastName: 'Hickman', profession: 'Chiropractor', workplace: 'Xavier Chiropractal', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Henry', prof_lastName: 'Newman', profession: 'Orthopedic Surgeon', workplace: 'St.Jude', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Oliver', prof_lastName: 'DuPrince', profession: 'Anesthesiologist', workplace: 'Richardson County Hospital', languages: 'English, French', fac_phone: '427-983-9872'},
    {prof_firstName: 'Brent', prof_lastName: 'Matello', profession: 'Audiologist', workplace: 'Sainte Paul Emergency Center', languages: 'English, Spanish, Portuguese', fac_phone: '239-646-2398'},
    {prof_firstName: 'Ezekiel', prof_lastName: 'Stout', profession: 'Doctor', workplace: 'BJC Healthcare Center', languages: 'English', fac_phone: '427-983-9872'},
    {prof_firstName: 'Cora', prof_lastName: 'Martin', profession: 'Endoscopy Nurse', workplace: 'Gregor Healthcare', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Alissa', prof_lastName: 'Teilman', profession: 'Nurse Midwife', workplace: 'Sinclare Skincare Treatment Center', languages: 'English', fac_phone: '427-983-9872'},
    {prof_firstName: 'Nathan', prof_lastName: 'Yttrebren', profession: 'Nurse', workplace: 'Elton Emergency Treatment Center', languages: 'English, Russian', fac_phone: '239-646-2398'},
    {prof_firstName: 'Carlos', prof_lastName: 'Elizondo', profession: 'Nurse Anesthetist', workplace: 'St.Vincent', languages: 'English, Spanish', fac_phone: '427-983-9872'},
    {prof_firstName: 'Kayla', prof_lastName: 'Fellows', profession: 'Optometrist', workplace: 'St.Mary', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Russell', prof_lastName: 'Byrd', profession: 'Pediatric Nurse', workplace: 'Cardinal Glenon', languages: 'English, German', fac_phone: '427-983-9872'},
    {prof_firstName: 'Khalee', prof_lastName: 'Barton', profession: 'Prosthetist', workplace: 'Mercy Hospital', languages: 'English, Swedish', fac_phone: '239-646-2398'},
    {prof_firstName: 'Kathrine', prof_lastName: 'Malkowski', profession: 'Physician', workplace: 'St.Anne', languages: 'English, Hebrew', fac_phone: '427-983-9872'},
    {prof_firstName: 'Cara', prof_lastName: 'Martin', profession: 'Psychiatric Nurse', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Russell', prof_lastName: 'Wayne', profession: 'Therapist', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Edward', prof_lastName: 'Yelton', profession: 'Veterinarian', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Zachary', prof_lastName: 'Steiner', profession: 'Pediatric Endocrinology Nurse', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Brett', prof_lastName: 'Houle', profession: 'Paramedic', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Gage', prof_lastName: 'Regamey', profession: 'Oncology Nurse', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Aela', prof_lastName: 'Welton', profession: 'Occupational Therapist', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Jasmin', prof_lastName: 'Ruiz', profession: 'Occupational Health and Safety Specialist', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Karli', prof_lastName: 'Fowler', profession: 'Licensed Vocational Nurse', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Owen', prof_lastName: 'Uradez', profession: 'Licensed Practical Nurse', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Carly', prof_lastName: 'Vinte', profession: 'Intensive Care Nurse', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Daniel', prof_lastName: 'Stout', profession: 'Dialysis Nurse', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Brianna', prof_lastName: 'Stout', profession: 'Flight Nurse', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Bert', prof_lastName: 'Cuccatti', profession: 'Cardiovascular Technologist', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Andrew', prof_lastName: 'Kemp', profession: 'Ambulatory Nurse', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Brady', prof_lastName: 'Keller', profession: 'Cardiac Catheterization Lab Nurse', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Paul', prof_lastName: 'Armonet', profession: 'Dermatology Nurse', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Cheyanne', prof_lastName: 'Cash', profession: 'Microbiologist', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Madison', prof_lastName: 'Vickers', profession: 'Medical Surgery Nurse', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},
    {prof_firstName: 'Allison', prof_lastName: 'Cooke', profession: 'Optician', workplace: 'St.Mary', languages: 'English, Italian', fac_phone: '427-983-9872'},
    {prof_firstName: 'Trevor', prof_lastName: 'Troba', profession: 'Pharmacist', workplace: 'WideSmile', languages: 'English', fac_phone: '239-646-2398'},

    ]).then(function (response) {
        console.log('Data successfully added!')
    }).catch(function (error) {
        console.log('Error', error)
    });
});