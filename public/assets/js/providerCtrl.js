app.controller("ProviderCtrl", function($scope, providerService){
    
    providerService.query(function(data){
        console.log("helooooo");
        $scope.providers = data;
        console.log(data);
    }, function(err){
        console.error("Error occured: ", err);
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
        console.log($scope.lastName);
    };
});