(function() {
    "use strict";

    var module = angular.module("app");
    
    function buildEntries(value, max) {
        var entries = [];
        for(var i = 1; i <= max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty"
            entries.push(icon);
        }
        return entries;        
    }
    
    module.component("movieRating", {
        templateUrl: "movie-rating.component.html",
        bindings: {
            value: "<",
            max: "<",
            setRating: "&"
        },
        transclude: true, 
        controllerAs: "model",
        controller: function() {
            var model = this;
            
            model.$onInit = function() {
                model.entries = buildEntries(model.value, model.max);
            };
            
            model.$onChanges = function() {
                model.entries = buildEntries(model.value, model.max);
            };
        }        
    });

}());