const path = require('path');

module.exports = function(myApp) {


    myApp.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    myApp.get('/AdminChanges', function(req, res){
        res.sendFile(path.join(__dirname, '../public/admin.html'))
    })
    myApp.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });
    
};