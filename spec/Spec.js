
describe("randNum function", function() {
        it("should be greater than 0", function() {
            expect(randNum(1,4)).toBeGreaterThan(0);
        });
});
    
describe("all colors function", function() {       
    it("should exist", function() {
        expect(colorShow).toBeDefined();
        }); 
});

describe("reset function", function() {       
        it("should exist", function() {
            expect(reset).toBeDefined();
            }); 
});

describe(" colour is macth' function", function(){
 // Make sure that colour returned is 'green', 'red', 'yellow' or 'blue'
        var pattern = /(green|red|orange|blue)/;

        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(colorblock()).toMatch(pattern);
        });
        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(colorblock()).toMatch(pattern);
        });
        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(colorblock()).toMatch(pattern);
        });
        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(colorblock()).toMatch(pattern);
        });
    });