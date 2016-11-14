function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

let expect = require("chai").expect;
describe("sum(arr)", function () {
    it("should return 3 for [1,2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return 0 for []", function () {
        let expectedSum = 0;
        let actualSum = sum([]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return pesho for [1,1,1,1,1]", function () {
        let expectedSum = 5;
        let actualSum = sum([1,1,1,1,1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
});