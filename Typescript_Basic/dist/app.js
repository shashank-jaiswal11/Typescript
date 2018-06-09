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
var someVar;
someVar = 10;
someVar = "sdfdf";
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "animal";
    }
    Animal.prototype.walk = function (msg) {
        return '${this.name} is walikng';
    };
    return Animal;
}());
function getuser(usr) {
    var newUser = usr;
}
