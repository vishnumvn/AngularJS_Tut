(function () {
    function showing() {
        console.log("fun showing");
    }

    function welcome(text) {
        return "Welcome" + text;
    }
    showing();
    var g = welcome('Vishnu');
    console.log(g);

    function showValue(passingFun) {
        var value = passingFun();
        console.log(value)
        return value;
    }

    showValue(function () { return 'Fun returning another fun'; });

    function displayNum(num) {
        var value = 1000;
        return function () {
            return value * num;
        }
    }

    var funRef_closure = displayNum(20);
    console.warn(funRef_closure());



    function calculate() {
        var name = "boxer";

        return function() {
            return name + ' length - ' + name.length;
        }
        //console.log(findLength());
    }

    console.log(calculate()());

    
})();