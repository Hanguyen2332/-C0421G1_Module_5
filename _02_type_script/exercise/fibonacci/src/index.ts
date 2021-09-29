// happy coding 👻
// console.log("hello world");
// let sum=0;
// function fibonacci():any {
//     let x=0;
//     let x1=1;
//     let xn;
//     for(let n=1;n<=20;n++) {
//         if (n<2) {
//             sum=1;
//         }
//         else {
//             xn=x+x1;
//             x=x1;
//             x1=xn;
//             sum=sum+xn;
//             console.log(x);
//             console.log(x1);
//         }
//     }
//     console.log('tổng 20 số fibonacci đầu tiên là ' + sum);
//     return sum;
// }
function fibonacciSum(num: number): number {
    if (num <= 2) {
        return 1;
    }
    return fibonacciSum(num - 1) + fibonacciSum(num - 2);
}
let sum = 0;
for(let n = 2; n <= 20; n++){
    console.log(fibonacciSum(n));
    if (fibonacciSum(n)){
        sum += fibonacciSum(n);
    }
}
console.log("Tổng của 20 số fibonaccy đầu tiên là: "+ sum);
