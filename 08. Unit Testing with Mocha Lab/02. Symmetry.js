function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal =
        (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let symmetric = isSymmetric;
let expect = require("chai").expect;
describe("isSymmetric(arr) ", function() {
    it("should return false for not an array", function () {
        let arr = isSymmetric({name: "Pesho"});
        expect(arr).to.be.equal(false);
    });
    it("should return true for [1,2,3,3,2,1]", function () {
        let arr = isSymmetric([1,2,3,3,2,1]);
        expect(arr).to.be.equal(true);
    });
    it("should return true for []", function () {
        let arr = isSymmetric([]);
        expect(arr).to.be.equal(true);
    });
    it("should return true for [1,2,3,4,2,11]", function () {
        let arr = isSymmetric([1,2,3,4,2,11]);
        expect(arr).to.be.equal(false);
    });
    it("should return true for [-1,2,-1]", function () {
        let arr = isSymmetric([-1,2,-1]);
        expect(arr).to.be.equal(true);
    });
    it("should return true for [[-1,2,1]", function () {
        let arr = isSymmetric([-1,2,1]);
        expect(arr).to.be.equal(false);
    });
    it("should return true for [1]", function () {
        let arr = isSymmetric([1]);
        expect(arr).to.be.equal(true);
    });
});