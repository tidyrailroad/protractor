(function() {
    "use strict";
    var Xvfb = require("xvfb");
    var xvfb = new Xvfb({
        displayNum: 99,
        xvfb_args: ["-screen", "0", "1280x1024x16"]
    });
    module.exports.config = {
        directConnect: true,
        capabilities: {
            'browserName': 'firefox'
        },
        specs: ['specs/**/*.js'],
        jasmineNodeOpts: {
            showColors: true, // Use colors in the command line report.
        },
        baseUrl: 'http://www.protractortest.org/#/',
        beforeLaunch: function() {
            xvfb.startSync();
        },
        onPrepare: function() {
            browser.ignoreSynchronization = true;
            var Reporter = require("./reporter.js");
            jasmine.getEnv().addReporter(new Reporter());
        },
        onComplete: function() {},
        onCleanup: function() {},
        afterLaunch: function() {
            xvfb.stopSync();
        }
    };
}());