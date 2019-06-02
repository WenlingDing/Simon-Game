/*global expect getRand colorShow reset*/
describe("getRand function", function() {
        it("should be greater than 0", function() {
            expect(getRand(1,4)).toBeGreaterThan(0);
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

