# React动态加载：react-loadable和@loadable/component的介绍和对比

在两个插件都不使用的情况下加载页面，打包后1.1MB，在首次加载网站的时候就会明显拖慢加载。



![img](https://user-gold-cdn.xitu.io/2020/5/30/17263aa87dd09656?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



react-loadable和@loadable/component做的事情都是一样的，就是**代码分割**。不一样的是，react-loadable比后者多了几个参数，如loading（未加载前的占位组件）和delay。

不过注意，react-loadable这个组件已经两年没有更新，[官方文档](https://loadable-components.com/docs/loadable-vs-react-lazy/#note-about-react-loadable)写到该组件已经不再更新了，与webpack4和babel7不兼容。但实际上我的项目环境是@babel/core@7.9.6和webpack@4.43.0，依然可以正常使用

# react-loadable

先说react-loadable使用方法

```
import Loadable from 'react-loadable';

const Loading = () => <div>loading...</div>;

const Component_1 = Loadable({ loader: () => import('...component path'), loading: Loading, delay: 1000 });
const Component_2 = Loadable({ loader: () => import('...component path'), loading: Loading, delay: 1000 });
const Component_3 = Loadable({ loader: () => import('...component path'), loading: Loading, delay: 1000 });
const Component_4 = Loadable({ loader: () => import('...component path'), loading: Loading, delay: 1000 });
const Component_5 = Loadable({ loader: () => import('...component path'), loading: Loading, delay: 1000 });
复制代码
```

可以发现大部分参数都一样的，可以再封装以下（主要是针对loading参数是必须的，delay有默认值）

```
import Loading from 'components/Loading'; // 就是刚刚写的loading...占位
import DelayLoading from "@/components/delay-loading";

export default function (loader, loading = DelayLoading, delay = 3000) {
    return Loadable({ loader, loading, delay });
}
复制代码
```

封装之后的使用就简短很多了，注意import语句不能封装进另外的文件，import必须写在引用组件的文件中，loader相当于一个回调函数，运行环境如果不在引用组件的文件下就会出现文件未加载的情况

```
import LoadableComponent from 'components/loadable-component'; // 刚刚封装的文件

const Component_1 = LoadableComponent(() => import('...component path'));
const Component_2 = LoadableComponent(() => import('...component path'));
const Component_3 = LoadableComponent(() => import('...component path'));
const Component_4 = LoadableComponent(() => import('...component path'));
const Component_5 = LoadableComponent(() => import('...component path'));
复制代码
```

# @loadable/component

接下来是react官方文档推荐的@loadable/component，我也建议使用这个，有更新比没更新的好，用法是这样的

```
import LoadableComponent from '@loadable/component';

const Component_1 = LoadableComponent(() => import('...component path'));
const Component_2 = LoadableComponent(() => import('...component path'));
const Component_3 = LoadableComponent(() => import('...component path'));
const Component_4 = LoadableComponent(() => import('...component path'));
const Component_5 = LoadableComponent(() => import('...component path'));
复制代码
```

哈哈，是不是跟上面的写法是一样的

最后来对比一下两者代码分割的效果，基本是一样，反正我没看出差别。明显优化了，仅剩余100+kB大小

使用react-loadable的效果



![img](https://user-gold-cdn.xitu.io/2020/5/30/17263af3e07b70e3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



使用@loadable/component效果



![img](https://user-gold-cdn.xitu.io/2020/5/30/17263b73f82b9aac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

