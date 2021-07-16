
  /** 根据参数的类型，推断出返回值的类型也是 number */
  function add1(a: number, b: number) {
    return a + b;
  }
  const x1= add1(1, 1); // 推断出 x1 的类型也是 number
  /* 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字 */
  function add2(a: number, b = 1) {
    return a + b;
  }
  const x2 = add2(1);
  const x3 = add2(1, 1); // ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number | undefined


  type Adder = (a : number , b : number ) => number;

  const add : Adder = ( a, b ) => {
    return a + b
  }

  const add = 1

  // 我们将 TypeScript 的字面量子类型转换为父类型的这种设计称之为 "literal widening"，也就是字面量类型的拓宽

// 字面量类型拓宽

// 字面量类型 指的是 
let hello: 'hello' = 'hello'

// 字面量类型的应用
type Direction = 'up' | 'down';
function move(dir: Direction) {
  // ...
}
move('up'); // ok
move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'

// null undefined 类型拓宽
{
  let x = null; // 类型拓宽成 any
  let y = undefined; // 类型拓宽成 any
  /** -----分界线------- */
  const z = null; // 类型是 null
  /** -----分界线------- */
  let anyFun = (param = null) => param; // 形参类型是 null
  let z2 = z; // 类型是 null
  let x2 = x; // 类型是 null
  let y2 = y; // 类型是 undefined
}


// 从材料例子可以大致归纳出，let 声明的简单类型字面量会拓宽类型，const 声明的简单类型字面量会收窄，const 声明的对象变量会自动推断对应的类型，可以用as const 收窄，让每一个key都是固定类型