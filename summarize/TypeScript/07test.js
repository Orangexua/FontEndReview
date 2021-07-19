// string 类型属性name、函数类型属性age的对象 language 作为参数（形参 Parameter）的函数
function Study(language) {
    console.log("ProgramLanguage " + language.name + " created " + language.age() + " years ago.");
}
Study({
    name: 'TypeScript',
    age: function () { return new Date().getFullYear() - 2012; }
});
