class Student {
    fullName: string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName+""+middleInitial+lastName;
    }
}
interface Person{
    firstName: string;
    lastName: string;
}
function greeter(person: Person){
    return "Hello,"+person.firstName+""+person.lastName;
}
let user = new Student("Jane","M.","User")
document.body.innerHTML = greeter(user);

//动态决定变量的类型
let apple : any;
apple = "I like to eat apples";
apple = true;
console.log(apple);
