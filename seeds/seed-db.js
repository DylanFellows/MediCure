// Import Database Models
const db = require('../models');

// Syncing sequelize models 
db.sequelize.sync().then(function () {
    db.Professional.bulkCreate([
    {prof_firstName: 'Vincent', prof_lastName: 'Marco', profession: 'Neurosurgeon', workplace: 'St.Mary', languages: 'English, Italian', address: '2845 Charmaine Lane, Amarillo, TX 79101', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Lindsey', prof_lastName: 'Eaton', profession: 'Dentist', workplace: 'WideSmile', languages: 'English', address: '1365 New York Avenue, Fort Worth, TX 76110', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Thomas', prof_lastName: 'Barley', profession: 'Surgeon', workplace: 'St.Joseph', languages: 'English, German', address: '79 Kirkland Circle, Amarillo, TX 79106', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Diego', prof_lastName: 'Rivetti', profession: 'Psychiatrist', workplace: 'Cardinal Glenon', languages: 'English, Italian, French', address: '7263 Cactus Ave., Garland, TX 75043', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Jesus', prof_lastName: 'Zavala', profession: 'Radiographer', workplace: 'Hellen Emergency Center', languages: 'English, Spanish', address: '9091 Fawn Lane, Mcallen, TX 78501', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Emily', prof_lastName: 'Eaton', profession: 'Sonographer', workplace: 'Umbredge Hospital', languages: 'English', address: '7542 County Rd. Forney, TX 75126', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Kaydi', prof_lastName: 'Fowler', profession: 'Nurse Practicioner', workplace: 'St.Lewis', languages: 'English', address: '736 South Bridgeton Lane, San Angelo, TX 76901', fac_phone: '427-983-9872', gender: 'Female'},
    {prof_firstName: 'Scott', prof_lastName: 'Miller', profession: 'Orthadonist', workplace: 'Waller Wentrow Hospital', languages: 'English', address: '828 Pierce Lane, San Angelo, TX 76901', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Nikkia', prof_lastName: 'Hickman', profession: 'Chiropractor', workplace: 'Xavier Chiropractal', languages: 'English, Italian', address: '8 10th Drive, Helotes, TX 78023', fac_phone: '427-983-9872', gender: 'Female'},
    {prof_firstName: 'Henry', prof_lastName: 'Newman', profession: 'Orthopedic Surgeon', workplace: 'St.Jude', languages: 'English', address: '8283 West Hillside Lane, Victoria, TX 77904', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Oliver', prof_lastName: 'DuPrince', profession: 'Anesthesiologist', workplace: 'Richardson County Hospital', languages: 'English, French', address: '699 Miller St., Forney, TX 75126', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Brent', prof_lastName: 'Matello', profession: 'Audiologist', workplace: 'Sainte Paul Emergency Center', languages: 'English, Spanish, Portuguese', address: '8002 Lakewood Ave., Fort Worth, TX 76110', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Ezekiel', prof_lastName: 'Stout', profession: 'Doctor', workplace: 'BJC Healthcare Center', languages: 'English', address: '51 Somerset Ave., Houston, TX 77016', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Cora', prof_lastName: 'Martin', profession: 'Endoscopy Nurse', workplace: 'Gregor Healthcare', languages: 'English', address: '2 Ryan St., Copperas Cove, TX 76522', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Alissa', prof_lastName: 'Teilman', profession: 'Nurse Midwife', workplace: 'Sinclare Skincare Treatment Center', languages: 'English', address: '53 Devon Ave., Euless, TX 76039', fac_phone: '427-983-9872', gender: 'Female'},
    {prof_firstName: 'Nathan', prof_lastName: 'Yttrebren', profession: 'Nurse', workplace: 'Elton Emergency Treatment Center', languages: 'English, Russian', address: '31 Trenton Drive, Longview, TX 75604', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Carlos', prof_lastName: 'Elizondo', profession: 'Nurse Anesthetist', workplace: 'St.Vincent', languages: 'English, Spanish', address: '41 Devonshire Street, Longview, TX 75604', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Kayla', prof_lastName: 'Fellows', profession: 'Optometrist', workplace: 'St.Mary', languages: 'English', address: '735 Fieldstone St., Harlingen, TX 78552', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Russell', prof_lastName: 'Byrd', profession: 'Pediatric Nurse', workplace: 'Cardinal Glenon', languages: 'English, German', address: '85 Hall St., Sugar Land, TX 77478', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Khalee', prof_lastName: 'Barton', profession: 'Prosthetist', workplace: 'Mercy Hospital', languages: 'English, Swedish', address: '518 Big Rock Cove St., Sugar Land, TX 77478', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Kathrine', prof_lastName: 'Malkowski', profession: 'Physician', workplace: 'St.Anne', languages: 'English, Hebrew', address: '88 School Ave., Corpus Christi, TX 78418', fac_phone: '427-983-9872', gender: 'Female'},
    {prof_firstName: 'Cara', prof_lastName: 'Martin', profession: 'Psychiatric Nurse', workplace: 'WideSmile', languages: 'English', address: '8427 Cardinal Drive, Helotes, TX 78023', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Russell', prof_lastName: 'Wayne', profession: 'Therapist', workplace: 'St.Mary', languages: 'English, Italian', address: '8949 Devon Rd., Longview, TX 75604', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Edward', prof_lastName: 'Yelton', profession: 'Veterinarian', workplace: 'WideSmile', languages: 'English', address: '917 South Williams Ave., Desoto, TX 75115', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Zachary', prof_lastName: 'Steiner', profession: 'Pediatric Endocrinology Nurse', workplace: 'St.Mary', languages: 'English, Italian', address: '7439 E. Eagle Court, El Paso, TX 79930', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Brett', prof_lastName: 'Houle', profession: 'Paramedic', workplace: 'WideSmile', languages: 'English', address: '82 N. Wagon Street, Helotes, TX 78023', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Gage', prof_lastName: 'Regamey', profession: 'Oncology Nurse', workplace: 'St.Mary', languages: 'English, Italian', address: '33 Harvard Lane, Copperas Cove, TX 76522', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Aela', prof_lastName: 'Welton', profession: 'Occupational Therapist', workplace: 'WideSmile', languages: 'English', address: '749 Lees Creek Lane, Garland, TX 75043', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Jasmin', prof_lastName: 'Ruiz', profession: 'Occupational Health and Safety Specialist', workplace: 'St.Mary', languages: 'English, Italian', address: '9 Canterbury Lane, Forney, TX 75126', fac_phone: '427-983-9872', gender: 'Female'},
    {prof_firstName: 'Karli', prof_lastName: 'Fowler', profession: 'Licensed Vocational Nurse', workplace: 'WideSmile', languages: 'English', address: '852 NW. Cross St., Helotes, TX 78023', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Owen', prof_lastName: 'Uradez', profession: 'Licensed Practical Nurse', workplace: 'St.Mary', languages: 'English, Italian', address: '57 Cherry Hill Street, Desoto, TX 75115', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Carly', prof_lastName: 'Vinte', profession: 'Intensive Care Nurse', workplace: 'WideSmile', languages: 'English', address: '5 Bridge Dr., Fort Worth, TX 76110', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Daniel', prof_lastName: 'Stout', profession: 'Dialysis Nurse', workplace: 'St.Mary', languages: 'English, Italian', address: '28 South Spring St., Sugar Land, TX 77478', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Brianna', prof_lastName: 'Stout', profession: 'Flight Nurse', workplace: 'WideSmile', languages: 'English', address: '28 South Spring St., Sugar Land, TX 77478', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Bert', prof_lastName: 'Cuccatti', profession: 'Cardiovascular Technologist', workplace: 'St.Mary', languages: 'English, Italian', address: '504 Edinburgh Lane, Coppell, TX 75019', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Eden', prof_lastName: 'Harvell', profession: 'Ambulatory Nurse', workplace: 'WideSmile', languages: 'English', address: '8756 Old 53rd Dr., El Paso, TX 79930', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Brady', prof_lastName: 'Keller', profession: 'Cardiac Catheterization Lab Nurse', workplace: 'St.Mary', languages: 'English, Italian', address: '53 River Street, El Paso, TX 79930', fac_phone: '427-983-9872', gender: 'Male'},
    {prof_firstName: 'Paul', prof_lastName: 'Armonet', profession: 'Dermatology Nurse', workplace: 'WideSmile', languages: 'English', address: '6 Sherwood Court, Euless, TX 76039', fac_phone: '239-646-2398', gender: 'Male'},
    {prof_firstName: 'Cheyanne', prof_lastName: 'Cash', profession: 'Microbiologist', workplace: 'St.Mary', languages: 'English, Italian', address: '8064 Border Street, Sugar Land, TX 77478', fac_phone: '427-983-9872', gender: 'Female'},
    {prof_firstName: 'Madison', prof_lastName: 'Vickers', profession: 'Medical Surgery Nurse', workplace: 'WideSmile', languages: 'English', address: '7653 Tallwood St., Amarillo, TX 79106', fac_phone: '239-646-2398', gender: 'Female'},
    {prof_firstName: 'Allison', prof_lastName: 'Cooke', profession: 'Optician', workplace: 'St.Mary', languages: 'English, Italian', address: '8930 Hilltop Street, Helotes, TX 78023', fac_phone: '427-983-9872', gender: 'Female'},
    {prof_firstName: 'Trevor', prof_lastName: 'Troba', profession: 'Pharmacist', workplace: 'WideSmile', languages: 'English', address: '528 Indian Spring Drive, Longview, TX 75604', fac_phone: '239-646-2398', gender: 'Male'},

    ]).then(function (response) {
        console.log('Data successfully added!')
    }).catch(function (error) {
        console.log('Error', error)
    });
});