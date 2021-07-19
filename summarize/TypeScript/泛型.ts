// 泛型指的是：当我们在引用一些函数接口类的时候，返回的数据类型为输入的参数数据类型，
// 但输入的数据类型很宽泛，不能特定的进行指定它，这时候就需要用到泛型了
// 未使用泛型
// function createArray(length: number, value: any): Array<any> {
//   let result = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }

// createArray(3, 'x'); // ['x', 'x', 'x']
// // 使用泛型

// function createArray1<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }

// createArray1<number>(3, 1); // ['x', 'x', 'x']

// // 多个类型参数

// function swap<T,U> (tuple: [T,U]) : [U,T] {
//   return [tuple[1], tuple[0]]
// }

// swap( [1,3] )

// // 约束类型

// interface A {
//   name : string
// }

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
      target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });