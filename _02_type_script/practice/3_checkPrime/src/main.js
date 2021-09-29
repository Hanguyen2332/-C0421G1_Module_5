//function
function isPrime(num) {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
}
//array --> check
// let arr: Array<number>
var arr = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    if (isPrime(item)) {
        console.log(item);
        sum += item;
    }
}
console.log('Tổng các số nguyên tố của mảng là: ' + sum);
