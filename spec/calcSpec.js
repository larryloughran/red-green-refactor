describe("calculator", function(){
    describe("minus tests", function(){
        it("should return 10", function(){
            expect(minus(20, 10)).toBe(10);
        });
        it("should return 50", function(){
            expect(minus(100, 50)).toBe(50);
        })
    });
});