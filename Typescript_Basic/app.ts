

// interface Iutil {
//     name:string;
//     log(msg: string): string;
// }

// const util: Iutil = {
//     name: 'hello',
//     log:(msg:string): string=> {
//         return msg+ util.name
//     }
// }

// const res : string = util.log('hi s ');
// console.log(res);

// class Animal {
//     private myprop: string;
//     public anotherProps: string;
//     protected abc: string;
// }


// class Dog extends Animal{
//     bark(msg: string): void{
//         console.log('dog barks ' +msg);
//    }
// }

// const a = new Animal();
// const d= new Dog();
// d.bark('hjn')

let someVar :number | string;
someVar= 10;
someVar= "sdfdf"
 interface IAnimal{
     name: string;
     walk(msg: string | number): string;

 }
 class Animal implements IAnimal{
     name: string ="animal";
     walk(msg: string | number): string {

         return '${this.name} is walikng';
     }
 }

 interface IAdmin{
     role: string;
     name: string;
 }

 interface Iuser {
     name:string;
     designation: string;
 }

 function getuser(usr: IAdmin | Iuser){
     const newUser: Iuser = usr as Iuser;
 }