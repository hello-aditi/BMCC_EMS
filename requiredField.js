eventApp.directive('requiredField', function () {
    return {
        restrict: 'M',
        replace: true,
        template: "<div>*</div>"
    };
});