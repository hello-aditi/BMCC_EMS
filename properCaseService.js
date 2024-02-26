eventApp.service('properCaseService', function () {
    this.convertToProperCase = function (input) {
        // Implement the logic to convert input to proper case
        // For example, you can use JavaScript's toLocaleUpperCase() and toLocaleLowerCase() methods
        // based on your specific requirements.
        return input.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
            return $1.toUpperCase();
        });
    };
});
