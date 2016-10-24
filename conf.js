(function(){
    "use strict";
    var Xvfb = require("xvfb");
    var xvfb = new Xvfb({
        displayNum: 99,
        xvfb_args: ["-screen", "0", "1280x1024x16"]
    });
    module.exports.config = {
        directConnect: true,
        multiCapabilities: [
            {
                'browserName': 'firefox'
            },
            {
                'browserName': 'chrome'
            }
        ],
        specs: ['specs/**/*.js'],
        jasmineNodeOpts: {
            showColors: true, // Use colors in the command line report.
        },
        baseUrl: 'http://www.protractortest.org/#/',
        beforeLaunch: function(){
            xvfb.startSync();
        },
        onPrepare: function(){
            browser.getCapabilities().then(function(caps){
               var browserName = caps.caps_.browserName.toUpperCase();
                jasmine.getEnv().addReporter(new Reporter(browserName));               
            });
            browser.ignoreSynchronization=true;
            var Reporter = require("./reporter.js");
        },
        onComplete: function(){
        },
        onCleanup: function(){
        },
        afterLaunch: function(){
            xvfb.stopSync();
        }
    };
}());