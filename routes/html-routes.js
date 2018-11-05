const path = require('path');

module.exports = function(myApp) {


    myApp.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

     // Catch all route if nothing is entered in url, go to home page
    myApp.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    myApp.get('/AdminChanges', function(req, res){
        res.sendFile(path.join(__dirname, '../public/admin.html'))
    })

    
};