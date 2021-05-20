var o = {}; // 创建一个新对象
// 在对象中添加一个属性与存取描述符的示例
var messageValue = '陈子旭';
Object.defineProperty(o, "message", {
  get : function(){
    return messageValue;
  },
  set : function(newValue){
    messageValue = newValue;
  },
});
{}
o.message
"陈子旭"
o.message = 'w o'
"w o"