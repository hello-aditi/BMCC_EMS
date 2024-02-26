eventApp.filter('yearFilter', function () {
  return function (input, byYear) {
    var output = [];

    if (byYear === "") {
      return input;
    }
    else {
      angular.forEach(input, function (value, key) {
        if (value.eventYear == byYear) {
          output.push(value);
        }
      });
      return output;
    }

  }
});

eventApp.filter('eventFilter', function () {
  return function (input, byEvent) {
    var output = [];

    if (byEvent === "") {
      return input;
    }
    else {
      angular.forEach(input, function (value, key) {
        if (value.eventName === byEvent) {
          output.push(value)
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