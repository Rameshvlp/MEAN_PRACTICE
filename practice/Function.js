// // var n=9;
// function num(n){
// var ans= n*n;
// return ans;
// }
// var square=num(9);
// console.log(square);
// var num=5;
// for(i=1;i<=num;i++){
//     var ans=num*i;
//     console.log(ans);
// }
// console.log(b)

// let a=10;
// var b=11;

// function isPositive (num){
//     if(num>0){
//         return true;
//     }else if(num<0){
//         return false;
//     }else{
//         return 0;
//     }
// }
// console.log(isPositive(0))

const students= new Map([
    ['Ramesh M]', 90],
    ['shiv', 90],
    ['Ramanathan', 99],
    ['sonali', 80],
    ['santhosh', 80],
    ['dharasana', 88],
    ['visali', 90],
    ['rough', 999]
]);
students.delete('rough');

const iterater1 = students[Symbol.iterator]();
// console.log(iterater1.next().value);

for(const item of iterater1){
    console.log(item);
}

const sett= new Set(
    [1,1,1,1,1,1,1]);
console.log(sett);
