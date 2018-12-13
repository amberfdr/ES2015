/**
 * 利用agruments实现重载
 */
function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
    var length = arguments.length;
    this._greet.call(this,...arguments);
    if(length == 1) return this._greet.apply(this,arguments);//this指向不变，只是利用apply的扩展性this._greet(...arguments);同理
    console.log("Hey,I'm "+this.name + ".");
}

Person.prototype._greet = function(name){
    console.log("Hey "+name+"  I'm  "+this.name);
}
let p = new Person('Jane kevie');
p.greet('ok');
p._greet('hdhdhdh');