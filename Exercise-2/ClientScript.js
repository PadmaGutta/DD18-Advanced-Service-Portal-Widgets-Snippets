function($scope,$http) {
    /*widget controller */
    var c = this;
    c.data.loading = true;

   $http.get('/api/now/table/incident?sysparm_query=active%3Dtrue').success(function(response){
        c.data.loading=false;
        c.data.list = response.result;
    })
}