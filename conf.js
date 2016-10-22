(function(){
    "use strict";
    module.exports.conf = {
        directConnect: true,
        capabilities: {
            'browserName': 'firefox'
        },
        specs: ['specs/**/*.js'],
        jasmineNodeOpts: {
            showColors: true, // Use colors in the command line report.
        },
        baseUrl: 'http://www.protractortest.org/',
        beforeLaunch: function(){
            console.log("BEFORE LAUNCH");
        },
        onPrepare: function(){
            console.log("ON PREPARE");
        },
        onComplete: function(){
            console.log("ON COMPLETE");  
        },
        onCleanup: function(){
            console.log("ON CLEANUP");
        },
        afterLaunch: function(){
            console.log("AFTER LAUNCH");
        }
    };
}());