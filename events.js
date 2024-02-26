eventApp.controller('eventCtrl', function ($scope, $http, $log) {
    $scope.sortMethod = "select";
    $scope.eventInfo = [];
    $scope.timePeriod = "select";


    $http.get('eventInfo.json').then(function (response) {
        $scope.eventInfo = response.data;
    });
    $scope.resetFilters = function () {
        $scope.timePeriod = "select";
    };

    $scope.eventsPerPage = 7;
    $scope.displayPage = 0;


    // Navigating to the next and the back page
    $scope.back = function () {
        if ($scope.displayPage > 0) {
            $scope.displayPage--;
        }
    }
    $scope.next = function () {
        if ($scope.displayPage < $scope.totalPages()) {
            $scope.displayPage++;
        }
    }

    // Disable back functionality on the first page
    $scope.backFreeze = function () {
        return $scope.displayPage === 0 ? "disabled" : "";
    }

    // Disable next functionality on the last page
    $scope.nextFreeze = function () {
        $log.debug('Display Page - ' + $scope.displayPage);
        $log.debug('Total Pages - ' + $scope.totalPages());
        return $scope.displayPage == $scope.totalPages() ? "disabled" : "";

    }

    // Function to count the total no of pages
    $scope.totalPages = function () {
        return Math.ceil($scope.eventInfo.length / $scope.eventsPerPage) - 1;
    };

});

eventApp.filter("periodFilter", function () {
    return function (input, timePeriod) {
        var output = [];
        if (timePeriod == "select") {
            return input;
        }
        else {
            angular.forEach(input, function (value, key) {
                if (value.period == timePeriod) {
                    output.push(value);
                }
            });
            return output;
        }
    }
});


eventApp.filter('offset', function () {
    return function (input, start) {
        return input.slice(start);
    };
});


