const obj = {
    hello:'hello everyone!',
    sayHi(){
        const bar = () => this.hello;//上下文绑定到上层
        return bar;
    }
}
//console.log((obj.sayHi())());
const a = {
    init(){
        this.bar = () => this.dam
    },
    dam:'hei',
    foo(){
        console.log(this);
        return this.dam;
    }
}
const b = {
    dam:'ha'
}
a.init();
//console.log(a.foo());
//console.log(a.foo.bind(b));//返回foo函数
//bind和apply/call的区别：bind返回一个函数，未调用；后者直接使用在函数上
//console.log(a.foo.bind(b).call(a));//???
//console.log(a.foo.call(b));
//console.log(a.bar.call(b));//箭头函数this的绑定是强制性的，不能改变
//console.log(b.foo.call(a));


const obj2 = {
    msg:'pong',
    ping:() => this.msg
}
console.log(obj2.ping());//箭头函数有绑定上下文的特性，所以最好不要再顶层作用域中使用箭头函数。