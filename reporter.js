(function(){
    "use strict";
    module.exports = function() {
        this.jasmineStarted = function(){
            console.log("EXCITED");
            console.log(arguments);
        };
        
        this.specStarted = function() {
            console.log("SPEC STARTED") ;
            console.log(arguments);
        };
    };
}());