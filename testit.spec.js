(function(){
    "use strict";
    describe("it", function(){
        it("works", function(){
            expect(element.all(by.tagName("h2")).count()).toEqual(5);
        });
    });
}());
