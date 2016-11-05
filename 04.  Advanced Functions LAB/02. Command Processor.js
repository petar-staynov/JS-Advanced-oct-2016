commandProcessor = (function () {
    let text = '';
    return {
        append: (newText) => text += newText,
        removeStart: (count) => text = text.slice(count),
        removeEnd: (count) => text = text.slice(0, text.length - count),
        print: () => console.log(text)
    }
})();

commandProcessor.append('pesho');
commandProcessor.removeStart(3);
commandProcessor.print();