/**
 * 接口同时提供两种返回值的方式：
 *      回调函数 和 Promise函数
 *      在使用后者的时候，回掉函数应该为一个noop(空函数)，不做任何操作
 */
const noop = () => {};
 function api(callback = noop){
     return new Promise((resolve,reject) => {
        const value = 'foobar';
        resolve(value);
        callback(null,value);
     })
 }

 
 //callback
 api((err,data) => {
    if(err) return console.error(err);
    console.log("callback"+data);
 })
 //Promise
 api()
 .then(value => {
    console.log("promise"+value);
 })
 .catch((err) => console.error(err))
 
 