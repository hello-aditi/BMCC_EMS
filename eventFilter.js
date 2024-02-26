// filtering events as period in which they are conducted.
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