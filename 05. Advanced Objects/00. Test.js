let counter = (function () {
    let count = 0;
    return function () {
        console.log(++count);
    }
})();
counter();