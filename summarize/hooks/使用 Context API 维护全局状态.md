数据是如何在 React 组件之间流动的？

React 的核心特征是“数据驱动视图”

React 的视图会随着数据的变化而变化

父子组件通信

父--子通过 props，传递states；

子--父之间通信，也是通过props，但是是将绑定了父组件上下文函数作为参数传递给子组件，通过子组件的调用，进行操作父组件的state

兄弟间通信

还是通过props进行通信，将父组件的属性值state通过states绑定到A组件，将更新states的方法函数，也通过props传递给B组件，这样A--B组件之间形成了兄弟组件通信。

反反复复的 props 传递不仅会带来庞大的工作量和代码量，还会污染中间无辜组件的属性结构

层层传递的优点是非常简单，用已有知识就能解决，但问题是会浪费很多代码，非常烦琐，中间作为桥梁的组件会引入很多不属于自己的属性。短期来看，写代码的人会很痛苦；长期来看，整个项目的维护成本都会变得非常高昂。因此，层层传递 props 要不得。



发布订阅者模式

```
class myEventEmitter {

  constructor() {

    // eventMap 用来存储事件和监听函数之间的关系

    this.eventMap = {};

  }

  // type 这里就代表事件的名称

  on(type, handler) {

    // hanlder 必须是一个函数，如果不是直接报错

    if (!(handler instanceof Function)) {

      throw new Error("哥 你错了 请传一个函数");

    }

    // 判断 type 事件对应的队列是否存在

    if (!this.eventMap[type]) {

      // 若不存在，新建该队列

      this.eventMap[type] = [];

    }

    // 若存在，直接往队列里推入 handler

    this.eventMap[type].push(handler);

  }

  // 别忘了我们前面说过触发时是可以携带数据的，params 就是数据的载体

  emit(type, params) {

    // 假设该事件是有订阅的（对应的事件队列存在）

    if (this.eventMap[type]) {

      // 将事件队列里的 handler 依次执行出队

      this.eventMap[type].forEach((handler, index) => {

        // 注意别忘了读取 params

        handler(params);

      });

    }

  }

  off(type, handler) {

    if (this.eventMap[type]) {

      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1);

    }

  }

}

```

### react 全局通信方式

Context API

图解 Context API 工作流
Context API 有 3 个关键的要素：React.createContext、Provider、Consumer。

Provider 作为数据的提供方，可以将数据下发给自身组件树中任意层级的 Consumer

![](E:\20210703\FontEndReview\summarize\hooks\asstes\img.png)

**Cosumer 不仅能够读取到 Provider 下发的数据，还能读取到这些数据后续的更新。这意味着数据在生产者和消费者之间能够及时同步，这对 Context 这种模式来说至关重要。**

