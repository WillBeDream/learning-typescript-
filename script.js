function isPalindrome(word) {
    var j = word.length - 1;
    for (var i = 0; i < word.length; i++) {
        if (word[i] != word[j]) {
            return false;
        }
        j--;
    }
    return true;
}
console.log(isPalindrome('racecar'));
function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i + 1]) {
            min = arr[i + 1];
        }
        if (max < arr[i + 1]) {
            max = arr[i + 1];
        }
    }
    return [min, max];
}
console.log(minMax([15, 2, 3, 8, 7, 9]));
