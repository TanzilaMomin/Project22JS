const arr=[10,20,12,18,50,40,20,30];

//By using forEach method
let sum=0;
arr.forEach((item)=>  sum=sum+item);
console.log(sum);

//by using reduce method
// const result = arr.reduce((acc,curr)=>acc+curr);
// console.log(result)