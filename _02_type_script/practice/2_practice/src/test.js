let sum = 0;
let countPrime = 0;
let num =1;
while (countPrime < 30) {
    let count = 0;
    for (let i = 1; i<= num;i++) {
        if (num%i==0) {
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
console.log(sum);
