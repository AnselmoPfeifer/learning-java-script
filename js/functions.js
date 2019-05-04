function getResult(numberOne, numberTwo) {
    var result = numberOne + numberTwo;

    return result;
}
// print number
console.log(getResult(1000, 2000));

//print string 
console.log(getResult("1000", "2000"));

function getGenderResult(gender) {
    // M = Men
    // W = Woman
   
    var x = gender.toLowerCase();
    if (x === 'm') {
        return 'Man';

    } else if(x === 'w') {
        return 'Woman';
    } else {
        return 'Another';
    }
}
// Should print Woman!
console.log(getGenderResult('W'));

function getGenderResultSwitch(gender) {
    // M = Men
    // W = Woman
    
    switch (gender.toLowerCase()) {
        case 'm':
            return 'Man';
        case 'w':
            return 'Woman';
        default:
            return 'Another';
    }
}
// Should print Man!
console.log(getGenderResultSwitch('M'))

function validateGenderWithternayCondiction(gender) {

    return (gender.toLowerCase() === 'm' ? 'Man' : 'Woman');
}
// Should print Woman!
console.log(validateGenderWithternayCondiction('xxxx'))

function repetitionStructure(value) {
    for (var i = 0; i <= value; i ++) {
        //console.log(i)
    }

    while (value > 50) {
        console.log(value);
        value /= 5;
    }
}
// Should print 250000, 50000, 10000, 2000, 400, 80
console.log(repetitionStructure(250000))

function showIntervall() {
    console.log('Hello World');
}
// Should print Hello World each 1 second!
setInterval(showIntervall, 1000);

// Should print Hello World in 5 seconds!
setTimeout(showIntervall, 5000);
