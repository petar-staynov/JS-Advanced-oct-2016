
function processCommands(commands) {
    let commandProcessor = (function(){
        function calcAgregates(arr) {
            function reduce(arr, func) {
                let result = arr[0];
                for (let nextElement of arr.slice(1)){
                    result = func(result, nextElement);
                }
                return result;
            }
            console.log('Sum = ' + reduce(arr, (a,b) => Number(a) + Number(b)));
            console.log('Min = ' + reduce(arr, (a,b) => Math.min(a, b)));
            console.log('Max = ' + reduce(arr, (a,b) => Math.max(a, b)));
            console.log('Product = ' + reduce(arr, (a,b) => Number(a) * Number(b)));
            console.log('Join = ' + reduce(arr, (a,b) => '' + a + b));
        }
    })();
    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}


processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);