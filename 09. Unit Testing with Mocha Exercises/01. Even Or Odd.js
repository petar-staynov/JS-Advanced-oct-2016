function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require("chai").expect;
describe("isOddOrEven(string) ", function() {
    it("should return undefined for not a string", function () {
        let string = isOddOrEven(3);
        expect(string).to.equal(undefined,
        "Function did not return the correct result!");
    });
    it("should return undefined for not a string", function () {
        let string = isOddOrEven({name: "Pesho"});
        expect(string).to.equal(undefined,
            "Function did not return the correct result!");
    });
    it("should return odd for string.lenght = 3", function () {
        let string = isOddOrEven('Yes');
        expect(string).to.equal("odd",
            "Function did not return the correct result!");
    });
    it("should return odd for string.lenght = 5", function () {
        let string = isOddOrEven('pesho');
        expect(string).to.equal("odd",
            "Function did not return the correct result!");
    });
    it("should return even for string.lenght = 2", function () {
        let string = isOddOrEven('No');
        expect(string).to.equal("even",
            "Function did not return the correct result!");
    });
    it("should return even for string.lenght = 4", function () {
        let string = isOddOrEven('Yeah');
        expect(string).to.equal("even",
            "Function did not return the correct result!");
    });
});