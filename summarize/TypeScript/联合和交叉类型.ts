// 联合类型
// 联合类型（Unions）用来表示变量、参数的类型不是单一原子类型，而可能是多种不同的类型的组合。

// function formatPX(size: number | string) {
//   // ...
// }
// formatPX(13); // ok
// formatPX('13px'); // ok
// formatPX(true); // ts(2345) 'true' 类型不能赋予 'number | string' 类型

// function formatUnit(size: number | string, unit: 'px' | 'em' | 'rem' | '%' = 'px') {
//   // ...
// }
// formatUnit(1, 'em'); // ok
// formatUnit('1px', 'rem'); // ok
// formatUnit('1px', 'bem'); // ts(2345)

// interface Bird {
//   fly(): void;
//   layEggs(): void;
// }
// interface Fish {
//   swim(): void;
//   layEggs(): void;
// }

//交叉类型
// type a = Bird & Fish

// type b = string & number
// const getPet: () => Bird | Fish = () => {
//   return {
//    // ...
//   } as Bird | Fish;
// };
// const Pet = getPet();
// Pet.layEggs(); // ok
// Pet.fly(); // ts(2339) 'Fish' 没有 'fly' 属性; 'Bird | Fish' 没有 'fly' 属性
// Pet.swim()


// 合并接口类型

// type InterSectionType = { id : number , name : string} & { age : number }

// const mixed : InterSectionType = {
//   id : 1 ,
//   name : "string",
//   age : 18
// }

// 合并联合类型

// type UnionA = 'px' | 'em' | 'rem' | '%';
// type UnionB = 'vh' | 'em' | 'rem' | 'pt';
// type IntersectionUnion = UnionA & UnionB;
// const intersectionA: IntersectionUnion = 'em'; // ok
// const intersectionB: IntersectionUnion = 'rem'; // ok
// const intersectionC: IntersectionUnion = 'px'; // ts(2322)
// const intersectionD: IntersectionUnion = 'pt'; // ts(2322)

// 联合交叉类型

// type UnionIntersectionC = ({ id: number; } & { name: string; } | { id: string; }) & { name: number; };
// type UnionIntersectionD = { id: number; } & { name: string; } & { name: number; } | { id: string; } & { name: number; }; // 满足分配率
// type UnionIntersectionE = ({ id: string; } | { id: number; } & { name: string; }) & { name: number; }; // 满足交换律

// 类型缩减

type URStr = 'string' | string; // 类型是 string
type URNum = 2 | number; // 类型是 number
type URBoolen = true | boolean; // 类型是 boolean
enum EnumUR {
  ONE,
  TWO
}
type URE = EnumUR.ONE | EnumUR; // 类型是 EnumUR

// 类型缩减被控制

type BorderColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string & {};

type BorderColor1 = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string