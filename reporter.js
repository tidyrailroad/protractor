(function(){
    "use strict";
    module.exports = function() {
        var spawn = require("child-process-promise").spawn;
        var file;
        var say = require("say");
        var recordMyDesktop;
        
        this.specStarted = function(spec) {
            console.log("spec started");
            spawn("recordmydesktop", ["-display", ":99", "-o", require("path").join("/", "protractor", "report", this.browser+"_"+spec.fullName.replace(/\s/g,"_")), "--no-sound", "--on-the-fly-encoding"]).progress(function(progress){
                if(progress===null){
                    console.log("PROGRESS IS NULL!");
                }
                recordMyDesktop = progress;
                say.speak(spec.description);
            });
         };
        
        this.specDone = function(result) {
            console.log("SPEC FINISHED:  "+this.browser);
            console.log([arguments, recordMyDesktop]);
            spawn("kill", ["SIGINT", recordMyDesktop.pid])
        };
    };
}());