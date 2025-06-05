const repeatString = function(mystring, num) {

    if (num < 0) {
        return 'ERROR';
    }

    let repeatString = '';
    for (let i = 0; i < num; i++) {
        repeatString += mystring;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
