(function(){
    "use strict";
    module.exports = function() {
        var spawn = require("child-process-promise").spawn;
        var recordMyDesktop;
        
        this.jasmineStarted = function(){
            console.log("EXCITED");
            console.log(arguments);
        };
        
        this.specStarted = function() {
            console.log("SPEC STARTED") ;
            console.log(arguments);
            spawn("recordmydesktop", ["-display", ":99", "-o", "/protractor/report/out.ogv", "--no-sound", "--on-the-fly-encoding"]).progress(function(progress){
                console.log("START RECORDING");
                recordMyDesktop = progress;
            });
        };
        
        this.specDone = function(result) {
            console.log("SPEC FINISHED");
            console.log([arguments, recordMyDesktop]);
            spawn("kill", ["SIGINT", recordMyDesktop.pid])
        };
    };
}());