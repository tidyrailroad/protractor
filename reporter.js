(function(){
    "use strict";
    module.exports = function() {
        this.jasmineStarted = function(){
            console.log(arguments);
        };
    };
}());