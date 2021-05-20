JSX 的本质是什么，它和 JS 之间到底是什么关系？



JSX 是 JavaScript 的一种语法扩展，它和模板语言很接近，但是它充分具备 JavaScript 的能力。



j s x 首先经过B abal 转换为 React.createElement 调用  其实jsx本质是React.createElement 这个javascript调用的语法糖

为什么要用 JSX？不用会有什么后果？

JSX 背后的功能模块是什么，这个功能模块都做了哪些事情？



React 选用 JSX 语法的动机

JSX 语法糖允许前端开发者使用我们最为熟悉的类 HTML 标签语法来创建虚拟 DOM，在降低学习成本的同时，也提升了研发效率与研发体验

JSX 是 JavaScript 的一种语法扩展，它和模板语言很接近，但是它充分具备 JavaScript 的能力

注意 render 在执行过程中并不会去操作真实 DOM（也就是说不会渲染），它的职能是把需要渲染的内容返回出来。真实 DOM 的渲染工作，在挂载阶段是由 ReactDOM.render 来承接的。

componentReceiveProps 并不是由 props 的变化触发的，而是由父组件的更新触发的

