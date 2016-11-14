function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}


//TESTING BEGINS HERE
let expect = require('chai').expect;
describe("list", function () {

    let list = {};
    let test;
    beforeEach(function () {
        list = createList();
        test = list;
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
    it('is it a list', function () {
        console.log(typeof(list));
        expect(typeof(list)).to.equal('object');
    });
    describe('add', function () {
        it('should add correct value', function () {
            list.add({name:'Pesho'});
            expect(list.toString()).to.equal('[object Object]');
        });
        it('should add correct value', function () {
            list.add([1, 2, 3]);
            list.add([1, 2, 3]);
            expect(list.toString()).to.equal('1,2,3, 1,2,3');
        });
        it('adding object to list', function () {
            list.add(5);
            expect(list.toString()).to.equal('5');
        });
        it('should add correct ammount of times', function () {
            list.add('Pesho');
            expect(list.toString()).to.equal('Pesho');
        });
        it('should add correct ammount of times', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.add('Ivan');
            expect(list.toString()).to.equal('Pesho, Gosho, Ivan');
        });
        it('should add correct ammount of times', function () {
            list.add(5);
            list.add('5');
            list.add('Ivan');
            expect(list.toString()).to.equal('5, 5, Ivan');
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
            expect(list.toString()).to.equal('3', 'Add did not add correct value');
        });
        it('should add correct value', function () {
            list.add('3,14');
            expect(list.toString()).to.equal('3,14', 'Add did not add correct value');
        });
    });
    describe('shiftLeft', function () {
        it('shift with 3 items 2 times', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.equal('item3, item1, item2');
        });
        it('shift with 3 items 1 times', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.shiftLeft();
            expect(list.toString()).to.equal('item2, item3, item1');
        });
        it('shift with 2 items', function () {
            list.add('item1');
            list.add('item2');
            list.shiftLeft();
            expect(list.toString()).to.equal('item2, item1');
        });
        it('shift with 1 items', function () {
            list.add('item1');
            list.shiftLeft();
            expect(list.toString()).to.equal('item1');
        });
        it('shift with 0 items', function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('');
        });
    });
    describe('shiftRight', function () {
        it('shift right 2 items', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.equal('item2, item3, item1');
        });
        it('shift right 3 items', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.shiftRight();
            expect(list.toString()).to.equal('item3, item1, item2');
        });
        it('shift right 2 items', function () {
            list.add('item1');
            list.add('item2');
            list.shiftRight();
            expect(list.toString()).to.equal('item2, item1');
        });
        it('shift right 1 items', function () {
            list.add('item1');
            list.shiftRight();
            expect(list.toString()).to.equal('item1');
        });
        it('shift right 0 items', function () {
            list.shiftRight();
            expect(list.toString()).to.equal('');
        });
    });
    describe('swap', function () {
        it('same index swap', function () {
            list.add('item1');
            expect(list.swap(0, 0)).to.equal(false, 'false');
        });
        it('index test with 1 items outside bounds', function () {
            list.add('item1');
            expect(list.swap(0, 1)).to.equal(false, 'false');
        });
        it('index test with 3 items inside bounds', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            expect(list.swap(0, 1)).to.equal(true, 'true');
        });
        it('index test with 3 items outside bounds 1', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            expect(list.swap(0, 3)).to.equal(false, 'false');
        });
        it('index test with 3 items outside bounds 2', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            expect(list.swap(-1, 1)).to.equal(false, 'Out of bound swap2 not works')
        });
        it('index test with 3 items outside bounds 2', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            expect(list.swap(-1, 3)).to.equal(false, 'Out of bound swap2 not works')
        });
        it('index test with invalid indexes', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.swap('sad', 'asd');
            expect(list.swap()).to.equal(false, 'Out of bound swap2 notworks');
        });
        it('border indexes  swap', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.add('item4');
            expect(list.swap(0,3)).to.equal(true, 'not works');
        });
        it('same indexes  swap', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.add('item4');
            expect(list.swap(1,1)).to.equal(false, 'not works');
        });
        it('border indexes  swap', function () {
            list.add('item1');
            list.add('item2');
            list.add('item3');
            list.add('item4');
            expect(list.swap(3,0)).to.equal(true, 'not works');
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
            list.add(3.14);
            expect(list.toString()).to.equal('1, two, 3, four, 3.14', 'judge not work');

        });
    });
});