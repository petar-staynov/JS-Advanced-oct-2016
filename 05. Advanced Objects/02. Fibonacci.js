let fib = (function () {
    let f0 = 0;
    let f1 = 1;

    return function () {
        let oldf0 = f0;
        let oldf1 = f1;
        f0 = oldf1;
        f1 = oldf0 + oldf1;
        return oldf1;
    };
})();

function fibNyms() {
    let fibNums = [];
    for (let i = 0; i <= n; i++){
        fibNums.push(fib());
    }
    return fibNums;
}

