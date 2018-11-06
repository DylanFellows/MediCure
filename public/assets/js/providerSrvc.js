app.factory("providerService", function($resource){
    return $resource("http://localhost:8080/api/professionals");
})

