(function(){
    "use strict";
    describe("it", function(){
        beforeEach(function(){
            browser.get("");
        });
        it("works", function(){
            expect(element.all(by.tagName("h2")).count()).toEqual(5);
        });
    });
}());
