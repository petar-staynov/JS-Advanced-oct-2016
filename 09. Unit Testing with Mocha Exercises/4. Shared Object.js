let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>
</html>`;

describe('sharedObject', function () {
   it("name propery should tsart with null", function () {
       expect(sharedObject.name).to.equal(null, "")
   });
});