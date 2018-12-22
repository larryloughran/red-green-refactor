describe("whatCanIDrink", function(){
    beforeEach(function(){
        drink = new whatCanIDrink();
    });
    
    describe("check age", function() {
        it("all good", function(){
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return drink toddy(13)", function(){
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy!");
        });
        
        it("should return drink coke(17)", function(){
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke!");
        
        });
        it("should return drink beer(18)", function(){
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer!");
    
        });
        it("should return drink more beer(20)", function(){
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer!");
        });
        it("should return drink whiskey(30)", function(){
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whiskey!");
        });
        it("should return no drink when called as whatCanIDrink(140)", function(){
            var result = whatCanIDrink(140)
            expect(result).toBe("Incorrect age input!");
        });
        it("should return drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});