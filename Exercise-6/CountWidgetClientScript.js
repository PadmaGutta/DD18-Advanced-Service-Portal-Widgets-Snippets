function($scope) {
    /*widget controller */
    var c = this;
    c.data.count = 0;
    $scope.$on("DD18ListWidgetUpdated",function(evt,results){
        console.log(results)
        c.data.count = results.length;
    })
}