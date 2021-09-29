var sum = 0;
var countPrime = 0;
var num = 1;
while (countPrime < 30) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        countPrime++;
        sum += num;
        console.log(num);
    }
    num++;
}
console.log('Tổng 30 số nguyên tố đầu tiên = ' + sum);
