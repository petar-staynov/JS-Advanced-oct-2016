//FUNCTION TO TEST
function produce(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}


//TESTING BEGINS HERE
let expect = require('chai').expect;
describe("list", function () {

    let list = [];
    beforeEach(function () {
        list = createList();
    }); //Turn IIFE list to normal function and make it new before every 'it'

    it('functions existence', function () {
        expect(list.add).to.exist;
        expect(list.shiftLeft).to.exist;
        expect(list.shiftRight).to.exist;
        expect(list.swap).to.exist;
        expect(list.toString).to.exist;
        expect(typeof(list.add)).to.equal('function');
        expect(typeof(list.shiftLeft)).to.equal('function');
        expect(typeof(list.shiftRight)).to.equal('function');
        expect(typeof(list.swap)).to.equal('function');
        expect(typeof(list.toString)).to.equal('function');
    }); //Checks if constructor adds fucntions

    it('empty list create', function () {
        expect(list.toString()).to.equal('', 'toString did not produce expected result');
    });

    describe('add', function () {
        it('should add correct value', function () {
            list.add(5);
            expect(list.toString()).to.equal('5', 'Add did not add correct value');
        });
        it('should add correct value', function () {
            list.add(3.14);
            expect(list.toString()).to.equal('3.14', 'Add did not add correct value');
        });
        it('should add correct value', function () {
            list.add('3.14');
            expect(list.toString()).to.equal('3.14', 'Add did not add correct value');
        });
        it('should add correct value', function () {
            list.add(3,14);
            expect(list.toString()).to.equal('3,14', 'Add did not add correct value');
        });
        it('should add correct ammount of times', function () {
            list.add('Pesho');
            expect(list.toString()).to.equal('Pesho', 'Add did not add correct value');
        });
        it('should add correct ammount of times', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.add('Ivan');
            expect(list.toString()).to.equal('Pesho, Gosho, Ivan', 'Add did not add correct value');
        })
    });
    describe('shiftLeft', function () {
        it('shift with 3 items', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.shiftLeft();
            // expect(list.toString()).to.equal('item2, item3, item1', 'shiftLeft works');
            list.shiftLeft();
            expect(list.toString()).to.equal('item3, item1, item2', 'shiftLeft notworks');
        });
        it('shift with 2 items', function () {
            list.add('item1');
            list.add('item2');
            list.shiftLeft();
            expect(list.toString()).to.equal('item2, item1', 'shiftLeft notworks');
        });
        it('shift with 1 items', function () {
            list.add('item1');
            list.shiftLeft();
            expect(list.toString()).to.equal('item1', 'shiftLeft notworks');
        });
        it('shift with 0 items', function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('', 'shiftLeft notworks');
        });
    });
    describe('shiftRight', function () {
        it('shift right 3 items', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.shiftRight();
            expect(list.toString()).to.equal('item3, item1, item2', 'shiftRight notworks');
        });
        it('shift right 2 items', function () {
            list.add('item1');
            list.add('item2');
            list.shiftRight();
            expect(list.toString()).to.equal('item2, item1', 'shiftRight notworks');
        });
        it('shift right 1 items', function () {
            list.add('item1');
            list.shiftRight();
            expect(list.toString()).to.equal('item1', 'shiftRight notworks');
        });
        it('shift right 0 items', function () {
            list.shiftRight();
            expect(list.toString()).to.equal('', 'shiftRight notworks');
        });
    });
    describe('swap', function () {
        it('index test with 1 items inside bounds', function () {
            list.add('item1');
            expect(list.swap(0, 0)).to.equal(false, 'false');
        });
        it('index test with 1 items outside bounds', function () {
            list.add('item1');
            expect(list.swap(2, 1)).to.equal(false, 'false');
        });
        it('index test with 3 items inside bounds', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            expect(list.swap(0, 1)).to.equal(true, 'true');
            expect(list.toString()).to.equal('item2, item1, item3', 'Out of bound swap2 notworks');
        });
        it('index test with 3 items outside bounds 1', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            expect(list.swap(0, 3)).to.equal(false, 'false');
            expect(list.toString()).to.equal('item1, item2, item3', 'Out of bound swap2 notworks');
        });
        it('index test with 3 items outside bounds 2', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            expect(list.swap(-1, 1)).to.equal(false, 'Out of bound swap2 not works')
            expect(list.toString()).to.equal('item1, item2, item3', 'Out of bound swap2 notworks');
        });
        it('index test with invalid indexes', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.swap('sad', 'asd');
            expect(list.swap()).to.equal(false, 'Out of bound swap2 notworks');
            expect(list.toString()).to.equal('item1, item2, item3', 'Out of bound swap2 notworks');

        });
        it('border indexes  swap', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.add('item4');
            // list.swap(0, 3);
            expect(list.swap(0,3)).to.equal(true, 'not works');
            expect(list.toString()).to.equal('item4, item2, item3, item1', 'not works')
        });
        it('same indexes  swap', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.add('item4');
            // list.swap(0, 3);
            expect(list.swap(1,1)).to.equal(false, 'not works');
            expect(list.toString()).to.equal('item1, item2, item3, item4', 'not works')
        });
    });
    describe('judge test', function () {
        it('index test with 3 items inside bounds', function () {
            let list = createList();
            list.add(1);
            list.add("two");
            list.add(3);
            console.log(`list = [${list}]`);
            list.shiftLeft();
            console.log("shifted left <--");
            console.log(`list = [${list}]`);
            list.add(["four"]);
            console.log(`list = [${list}]`);
            list.shiftRight();
            console.log("shifted right -->");
            console.log(`list = [${list}]`);
            console.log(`Swaping [0] and [3]: ${list.swap(0,3)}`);
            console.log(`list = [${list}]`);
            console.log(`Swaping [1] and [1]: ${list.swap(1,1)}`);
            console.log(`list = [${list}]`);
            expect(list.toString()).to.equal('1, two, 3, four', 'judge not work');
        });
    });
});