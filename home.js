eventApp.controller('homeCtrl', function ($scope, $interval) {
    $scope.title = "Home Page";
    $scope.Abt = "About Us"
    var img = document.querySelector(".slide");
    var images = ['/BMCCEventMgmt/images/cultural.jpg', '/BMCCEventMgmt/images/emerge.jpg', '/BMCCEventMgmt/images/troika.jpg'];
    var num = 0;

    $scope.next = function () {
        num++;
        if (num >= images.length) {
            num = 0;
            img.src = images[num];
        }

        else {
            img.src = images[num]
        }
    }
    $scope.back = function () {
        num--;
        if (num < 0) {
            num = images.length - 1;
            img.src = images[num];
        }
        else {
            img.src = images[num];
        }
    }
    var interval = 5000; // 4 seconds
    var intervalPromise = $interval($scope.next, interval);

    $scope.$on('$destroy', function () {
        $interval.cancel(intervalPromise);
    });
});