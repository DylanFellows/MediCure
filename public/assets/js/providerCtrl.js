app.controller("ProviderCtrl", function($scope, providerService, $http){
    
    providerService.query(function(data){
        $scope.providers = data;
    }, function(err){
        console.log("Error occured: ", err);
    });

    $scope.processData = function(data){
        console.log(data);
        $scope.id = data.id;
        $scope.firstName = data.prof_firstName;
        $scope.lastName = data.prof_lastName;
        $scope.profession = data.profession;
        $scope.facility = data.workplace;
        $scope.languages = data.languages;
        $scope.fac_phone = data.fac_phone;
        $scope.address = data.address;
        $scope.gender = data.gender;
    };

});