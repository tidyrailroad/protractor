(function(){
    "use strict";
    module.exports = function() {
        var spawn = require("child-process-promise").spawn;
        var file;
        var recordMyDesktop;
        
        this.specStarted = function(spec) {
            spawn("recordmydesktop", ["-display", ":99", "-o", require("path").join("/", "protractor", "report", spec.fullName.replace(/\s/g,"_")), "--no-sound", "--on-the-fly-encoding"]).progress(function(progress){
                if(progress===null){
                    console.log("PROGRESS IS NULL!");
                }
                recordMyDesktop = progress;
             });
         };
        
        this.specDone = function(result) {
            spawn("kill", ["SIGINT", recordMyDesktop.pid])
        };
    };
}());