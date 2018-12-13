/**
 * 使用模式匹配swap变量的值
 */

 let a = "apple";
 let b = "pear";
 console.log(a,b);
 //swap
 [a,b] = [b,a];
 console.log(a,b);
 /**
  * 模式匹配高级用法
  * 嵌套解构表达式
  */
 const sourceData = {
    "title":"person",
    "grade":"sex",
    "items":[
        {
            "title":"张三",
        "grade":"男",
        "media":{
            "m":"http://www.baidu.com",
            "hobbies":["打篮球","游泳"]
        }
        }
    ]
 }

 const target = sourceData.items.map(
     ({title,grade,media:{m:img}}) => ({title,grade,img})
 )
 console.log(target);
 