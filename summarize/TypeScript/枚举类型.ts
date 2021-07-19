// 枚举 enums 一个例子

enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

// JavaScript 中其实并没有与枚举类型对应的原始实现，而 TypeScript 转译器会把枚举类型转译为一个属性为常量、命名值从 0 开始递增数字映射的对象，
// 在功能层面达到与枚举一致的效果（然而不是所有的特性在 JavaScript 中都有对应的实现）。
// js 没有对enums枚举类型的原始实现 使用js映射 进行基本实现
// var Day;
// (function (Day) {
//     Day[Day["SUNDAY"] = 0] = "SUNDAY";
//     Day[Day["MONDAY"] = 1] = "MONDAY";
//     Day[Day["TUESDAY"] = 2] = "TUESDAY";
//     Day[Day["WEDNESDAY"] = 3] = "WEDNESDAY";
//     Day[Day["THURSDAY"] = 4] = "THURSDAY";
//     Day[Day["FRIDAY"] = 5] = "FRIDAY";
//     Day[Day["SATURDAY"] = 6] = "SATURDAY";
// })(Day || (Day = {}));

// 7 种常见的枚举类型：数字类型、字符串类型、异构类型、常量成员和计算（值）成员、枚举成员类型和联合枚举、常量枚举、外部枚举。