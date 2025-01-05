// Array is growable & shrinkable dyamically 
// array store  homogenous as well as hetrogenous data 
// []=> it is symbol 
// let a=[10,20,30,4];
// let a1=[];
// let a2=[2.5,'Sumit',true];

// for(let i=0;i<a.length;i++){
//     console.log("Value of array is "+a[i])
// }

// console.log(a);
// console.log(a.join("#"));
// console.log(a.join(" "));
// console.log(a.join());

// foreach

// a.forEach((myvalue,i,arr)=>{
//     console.log(myvalue+" Index is "+i+ " Array is  "+arr )
// });

// push & pop
// LIFO

// let a=[];

// a.push(63);
// console.log(a);
// a.push(65,80,90);
// console.log(a);
// let popedValue=a.pop();
// console.log(a);
// console.log("Poped value Is "+popedValue);

// splice
// let a=[45,80,97];

// a.splice(1,0,100);
// console.log(a);
// a.splice(2,1);
// console.log(a);
// a.splice(1,1,200);
// console.log(a);

// map
// element by element Operation 

let a=[2,3,4,5,6];

let sqrArr= a.map((myvalue)=>{
    return (myvalue*myvalue);
});
console.log(`
        Orginal Array :: ${a}
    -------------------------------
        Square Array :: ${sqrArr}
`);






