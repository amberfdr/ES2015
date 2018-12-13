function fn(foo,...reset){
    console.log(reset);
}
// fn(1,2,3,4);

function merge(target={},...objs){
    for(const obj of objs){
        const keys = Object.keys(obj);
        for(const key of keys){
            target[key] = obj[key]
        }
    }
    return target;
}
console.log(merge({a:1},{b:2},{c:3}));

/**
 * 箭头函数的arguments会和上下文绑定到上层
 */


function test(){
    let myArrow = {
        name:'a',
        get:() => {
            console.log(arguments);
            return this.name;
        },
        set:(name) => {
            this.name = name;
        }
    }
   
myArrow.set('fdr');

console.log(myArrow.get());
}
test(20)