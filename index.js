//promises

//resolve
/*
let a = 1;
let p = new Promise (function (resolve, reject){
if(a<5){
    resolve ("apelat resolve()");
} else {
    reject("apelat reject()");
}
});

p.then((res) =>{
console.log(`promisiunea este indeplinita: ${res}`);
}).catch((err)=>{
 console.log(`promisiunea este incalcata: ${err}`);
});

//reject

let b = 9;
let e = new Promise (function (resolve, reject){
if(b<5){
    resolve ("apelat resolve()");
} else {
    reject("apelat reject()");
}
});

e.then((res) =>{
console.log(`promisiunea este indeplinita: ${res}`);
}).catch((err)=>{
    console.log(`promisiunea este incalcata: ${err}`);
});

*/

//fetchAPI
/*
fetch('https://jsonplaceholder.typicode.com/users/1/posts').then(res=> {
    console.log('Success', res);
    return res.json();
}).then(posts => {
    console.log(posts);
}).catch(err=>{
    console.log(err);
});

*/

/*
fetch('https://jsonplaceholder.typicode.com/users/1/postss').then(res=> {
    if (res.ok){
        return res.json();
    }else{
        throw new Error ("Eroare");
    }
    
}).then(posts => {
    console.log(posts);
}).catch(err=>{
    console.log(err);
});  

*/

//spread

/*
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
*/

/*
const arr = [1, 2, 3];
const arr2 = [...arr]; 

arr2.push(4);
console.log(arr2);
*/
