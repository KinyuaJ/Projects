console.log("hello World");
let name = "Julius";
let person = {
    name: "keter",
    age: 45
};
console.log(person);

person.name = "keta";
person["age"] = 60;
 let friends =["mwas", "palmer", "keta"];
 friends[3] = "me";
 console.log(friends);

 function sing(){

    console.log("Doo");
    console.log("REE");
    console.log("Mii");
 }
 sing()
 sing()

 const myMath = {
     PI: 3.142,
     cube(num){
         return num ** 3;
     },
     square(num) {
         return num ** 2;
     },
     add(num){
         return num + num;
     }
 }
 //the call stack
 const multiply = num => num * num;
 const square = x => multiply(x);
 const isRightTriangle = (a, b, c) =>square(a) + square(b) === square(c);

 //promise
// const promise = new promise (function (resolve, reject))

console.log(isRightTriangle(3,4,5)); 
console.log(myMath.add(90));