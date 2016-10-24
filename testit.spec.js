(function(){
    "use strict";
    describe("A", function(){
        beforeEach(function(){
            browser.get("");
        });
        describe("B", function(){
            it("C", function(){
                expect(element.all(by.tagName("h2")).count()).toEqual(5);
            });
        });
    });
}());
