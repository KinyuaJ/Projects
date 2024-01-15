// // import { transpileModule } from "typescript";

// // type guitarist ={
// //     name: string,
// //     age: number,
// //     details: (string | number | boolean)[]
// // };
// //  type isAdmin = {
// //     name: string,
// //     age: number,
// //     isActive: boolean,
// //  }

// //  const add = (a:number, b:number):number=>{
// //     return a + b;
// //  }

// //  const messo = (message:any)=>{
// //     console.log(message);
    
// //  }

// // //  let user:isAdmin =;

// // //  if (user.isActive = true){
// // //     console.log(`Hello ${user}`);
    
// // //  }

// //  type mathFunction = (a:number, b:number) =>number;

// //  let multiply:mathFunction =(a,b)=>{
// //     return a * b
// //  }

// //  messo(multiply(7,900))
// // //
// //  function sum(...addition:number[]){
// //    let total =0;
// //    for(const add of addition){
// //       total += add;
// //    }
// //    return total;
// //  }

// //  console.log(sum(1,4,5,7));

// //  //type assertion
 
// class Coder{
//    public readonly name:string;
//    public music:string;
//    private age:number;
//    protected lang:string;
//    constructor(name:string,music:string,age:number,lang:string = "typescipt"){
//       this.name = name;
//       this.music = music;
//       this.age = age;
//       this.lang = lang;
//    }
// }

// const code = new Coder("JUlius", "bongo", 28, "baganda");
// console.log(code);

// class webDev extends Coder{
//    constructor(
//       public computer:string,
//       name:string,
//       music:string,
//       age:number
//    ){
//       super(name,music,age)
//       this.computer = computer
   
//    }
//     public getLang (){
//       return `I speak ${this.lang}`
//     }
// }

// const me = new webDev("hp","keta","reggae",35)

