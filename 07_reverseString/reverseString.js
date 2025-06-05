const reverseString = function(sentence) {
    let sentenceArray = sentence.split('');
    let reversedArray = sentenceArray.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
