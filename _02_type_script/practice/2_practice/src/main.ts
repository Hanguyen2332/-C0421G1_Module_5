let sum: number = 0;
let countPrime: number = 0;
let num: number = 1;
while (countPrime < 30) {
    let count: number = 0;
    for (let i = 1; i <= num;i++) {
        if (num%i == 0) {
            count++;
        }
    }
    if (count == 2) {
        countPrime++;
        sum+=num;
        console.log(num);
    }
    num++;
}
console.log('Tổng 30 số nguyên tố đầu tiên = ' + sum);
