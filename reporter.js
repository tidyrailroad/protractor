(function(){
    "use strict";
    module.exports = function() {
        var spawn = require("child-process-promise").spawn;
        var say = require("say");
        var recordMyDesktop;
        
        this.specStarted = function(spec) {
            spawn("recordmydesktop", ["-display", ":99", "-o", "/protractor/report/out.ogv", "--on-the-fly-encoding"]).progress(function(progress){
                recordMyDesktop = progress;
                say.speak(spec.description);
            });
        };
        
        this.specDone = function(result) {
            console.log("SPEC FINISHED");
            console.log([arguments, recordMyDesktop]);
            spawn("kill", ["SIGINT", recordMyDesktop.pid])
        };
    };
}());