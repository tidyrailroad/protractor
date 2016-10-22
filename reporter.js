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
        
        this.specDone = function(result) {
            console.log("SPEC FINISHED");
            console.log(arguments);
        };
    };
}());