const removeFromArray = function(arr, ...items) {
    return arr.filter((arrItem) =>  !items.includes(arrItem));
};

// Do not edit below this line
module.exports = removeFromArray;
