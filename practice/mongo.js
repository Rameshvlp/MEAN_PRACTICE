function add(a,b){
   return  a+b;
    
}
function sub(a,b){
    return a-b;
}
function cal(a, b, oper){ // call back function
    return oper(a,b);
}
console.log(cal(2,2, add));