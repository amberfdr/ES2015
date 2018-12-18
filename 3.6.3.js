let that = this;
function fn(){
    console.log(this);
    console.log(that === this);
    // console.log(arguments);
}
var obj = {foo:'bar'}
//fn();
//fn.apply(obj,[1,2,3]);
// fn.call(obj,1,2,3);

function sum(...numbers){
    return numbers.reduce((a,b) => a+b)
}

console.log(sum(...[1,2,3]));