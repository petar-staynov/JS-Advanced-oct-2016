// let sum = require("../00. Test").sum;
// let expect = require("chai").expect;
//
// describe("sum(arr)", function () {
//     it("should return 3 for [1,2]", function () {
//         let expectedSum = 3;
//         let actualSum = sum([1,2]);
//         expect(actualSum).to.be.equal(expectedSum);
//     });
//     it("should return 0 for []", function () {
//         let expectedSum = 0;
//         let actualSum = sum([]);
//         expect(actualSum).to.be.equal(expectedSum);
//     });
//     it("should return pesho for [1,1,1,1,1]", function () {
//         let expectedSum = 5;
//         let actualSum = sum([1,1,1,1,1]);
//         expect(actualSum).to.be.equal(expectedSum);
//     });
// });


let symmetric = require("../02. Symmetry.js");
let expect = require("chai").expect;

describe("isSymmetric(arr) ", function() {
    it("should return true for [1,2,3,3,2,1]", function () {
        let arr = isSymmetric([1, 2, 3, 3, 2, 1]);
        expect(arr).to.be.equal(true);
    });
});