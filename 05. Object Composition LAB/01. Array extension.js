function outer() {
    console.log(this);
    function inner() {
     console.log(this);
    }
    inner();
}
let obj = {name: 'Peter', f: outer};
obj.f();