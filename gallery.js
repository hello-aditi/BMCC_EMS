eventApp.controller('galleryCtrl', function ($scope, $http, $log) {

  $http.get('gallery.json').then(function (response) {
    $scope.events = response.data;
    //$log.info($scope.events);

  }, function (error) {
    $log.error('Error loading JSON file:', error);
  });

  $scope.byYear = "";
  $scope.byEvent = "";

  // for resetting all the filters
  $scope.resetFilters = function () {
    $scope.byYear = "";
    $scope.byEvent = "";
  };

  $scope.recordsPerPage = 8;
  $scope.currentPage = 0;
  $scope.events = [];


    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    /* Disable previous page link for the first page */
    $scope.prevPageDisabled = function () {
        return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };

    /* Disable next page link for the last page */
    $scope.nextPageDisabled = function () {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.pageCount = function () {
        return Math.ceil($scope.events.length / $scope.recordsPerPage) - 1;
    };

});


