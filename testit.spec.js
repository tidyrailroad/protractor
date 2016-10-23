(function(){
    "use strict";
    describe("it", function(){
        beforeEach(function(){
            browser.get("");
        });
        it("This is a simple test.  Does it work?", function(){
            expect(element.all(by.tagName("h2")).count()).toEqual(5);
        });
    });
}());
