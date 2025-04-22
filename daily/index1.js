//array methods

//push
// let array=[1,2,3,4,5];
// array.push(7);
// console.log(array);

//pop
// let array=[1,2,34,5];
// array.pop();
// console.log(array);

//unshift
// let array=[1,2,3,4,5];
// array.unshift(7);
// console.log(array);

//shift
// let array=[1,2,34,5];
// array.shift();
// console.log(array);

//spread operator
// let arr1=[2,3,4,5,6,7,8];
// let arr2=[6,7,5,33,4,5,6];

// let array=[...arr1,...arr2];
// console.log(array);

//map
// let array=[1,2,3,4,5,6];
// array.map((val,index)=>{
//     console.log(val);
// })

//filter
let array=[1,2,3,4,5,6];
let arr=array.filter((val,index)=>{
    if(val%2==0) return val;
})
console.log(arr);


//slice
// let array=[1,2,34,4,5];
// let arr=array.slice(1,4);
// console.log(arr);

//splice
// let array=[12,3,4,5,6,7,8];
// let arr=array.splice(2,4);
// console.log(arr);








