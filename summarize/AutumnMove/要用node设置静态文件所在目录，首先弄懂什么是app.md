要用node设置静态文件所在目录，首先弄懂什么是app.use(express.static(__dirname))，假设我在server.js文件中写入这行代码，那么就是把server.js文件所在的目录设置为静态文件目录
如图所示目录结构，我在server.js写入app.use(express.static(__dirname))，那么我们就把它所在的目录api设置为静态资源所在目录，那么我打开监听站点（我监听的是127.0.0.1，端口为80），就可以根据文件名打开api下所有的文件
上面是api目录下的server.html

这是api下的inserver文件夹下的inServer.html，到这里我们只需一行代码app.use(express.static(__dirname))就能把api设置为静态资源目录了，但是如果想要设置它的的上级目录或者同级目录就必要要使用path模块了，代码如下：
先引入：const path = require(“path”);
然后

就可以设置server.js的上上级的myVue文件夹为静态资源目录，运行myVue下的index.html

因为index.html会被默认打开，所以不需要在地址后指定链接。
同级目录就是下图上面代码

app.use(express.static(path.resolve(__dirname, “…/site”)));
app.use(express.static(path.resolve(__dirname, “…/…/myVue”)));
执行

这里同时设置了两个静态目录，且两个静态目录下都要index.html，那么静态目录谁先设置那么就执行谁下面的
index.html
除了__dirname,还有个__filename指定的是绝对文件路径，这里就不详细说了。
————————————————
版权声明：本文为CSDN博主「山川异域，代码同享」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/z823030270/article/details/105054272