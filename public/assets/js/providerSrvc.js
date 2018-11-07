app.factory("providerService", function($resource){
    return $resource("/api/professionals");
})

