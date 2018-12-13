var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + "" + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
//动态决定变量的类型
var apple;
apple = "I like to eat apples";
apple = true;
console.log(apple);

