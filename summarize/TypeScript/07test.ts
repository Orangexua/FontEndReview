// string 类型属性name、函数类型属性age的对象 language 作为参数（形参 Parameter）的函数
function Study ( language : {name : string , age : () => number}) {
  console.log(`ProgramLanguage ${language.name} created ${language.age()} years ago.`);
}

Study({
  name: 'TypeScript',
  age: () => new Date().getFullYear() - 2012
});

/** 关键字 接口名称 */
interface OptionalProgramLanguage {
  /** 语言名称 */
  name: string;
  /** 使用年限 */
  age?: () => number;
}
let OptionalTypeScript: OptionalProgramLanguage = {
  name: 'TypeScript'
}; // ok

//它的类型就变成了显式指定的类型与 undefined 类型组成的联合类型

interface ReadOnlyProgramLanguage {
  /** 语言名称 */
  readonly name: string;
  /** 使用年限 */
  readonly age: (() => number) | undefined;
}
 
let ReadOnlyTypeScript: ReadOnlyProgramLanguage = {
  name: 'TypeScript',
  age: undefined
}
/** ts(2540)错误，name 只读 */
ReadOnlyTypeScript.name = 'JavaScript'

// 这仅仅是静态类型检测层面的只读，实际上并不能阻止对对象的篡改。
// 因为在转译为 JavaScript 之后，readonly 修饰符会被抹除。因此，任何时候与其直接修改一个对象，不如返回一个新的对象，这会是一种比较安全的实践

interface LanguageRankInterface {
  [rank: number]: string;
}
interface LanguageYearInterface {
  [name: string]: number;
}
{
  let LanguageRankMap: LanguageRankInterface = {
    1: 'TypeScript', // ok
    2: 'JavaScript', // ok
    'WrongINdex': '2012' // ts(2322) 不存在的属性名
  };
  
  let LanguageMap: LanguageYearInterface = {
    TypeScript: 2012, // ok
    JavaScript: 1995, // ok
    1: 1970 // ok
  };
}

type IntersectionType = { id: number; name: string; } & { age: number; name: string };

// 数字作为对象索引时，它的类型既可以与数字兼容，也可以与字符串兼容，这与 JavaScript 的行为一致。因此，使用 0 或 '0' 索引对象时，这两者等价。

var a: IntersectionType = {
  id : 1,
  name : 'ce',
  age : 18,
}