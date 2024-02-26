// eventApp.controller('registrationCtrl', function ($scope, properCaseService) {
//     $scope.title = "Event Registration";
//     $scope.templateUrl = '/BMCCEventMgmt/views/registration.html';

//     $scope.name = ""; // Bind this variable to your input field

//     $scope.convertToProperCase = function () {
//         $scope.name = properCaseService.convertToProperCase($scope.name);
//     };
// });

eventApp.controller('registrationCtrl', function ($scope) {
  $scope.user = {};
  $scope.formSubmitted = false;

  $scope.submitForm = function (isValid) {
    if (isValid) {
      $scope.formSubmitted = true;
    }
  };

  $scope.registerSubmit=function(){
    $scope.successMessage= true;
  }
});
