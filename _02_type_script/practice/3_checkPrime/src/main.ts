//function
function isPrime(num: number) : boolean {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        if (num%i==0) {
            count++;
        }
    }
  if (count == 2) {
      return true;
  }else {
      return false;
  }
}

//array --> check
// let arr: Array<number>
let arr: number[] =  [1,5,9,2,6,15,19,35,51,53];
let sum: number = 0;
for (let item of arr) {
    if (isPrime(item)) {
        console.log(item)
        sum += item;
    }
}
console.log('Tổng các số nguyên tố của mảng là: ' + sum);
