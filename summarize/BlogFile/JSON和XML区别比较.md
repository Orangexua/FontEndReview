1.定义介绍

(1).XML定义
扩展标记语言 (Extensible Markup Language, XML) ，用于标记电子文件使其具有结构性的标记语言，可以用来标记数据、定义数据类型，是一种允许用户对自己的标记语言进行定义的源语言。 XML使用DTD(document type definition)文档类型定义来组织数据;格式统一，跨平台和语言，早已成为业界公认的标准。
XML是标准通用标记语言 (SGML) 的子集，非常适合 Web 传输。XML 提供统一的方法来描述和交换独立于应用程序或供应商的结构化数据。

(2).JSON定义
JSON(JavaScript Object Notation)一种轻量级的数据交换格式，具有良好的可读和便于快速编写的特性。可在不同平台之间进行数据交换。JSON采用兼容性很高的、完全独立于语言文本格式，同时也具备类似于C语言的习惯(包括C, C++, C#, Java, JavaScript, Perl, Python等)体系的行为。这些特性使JSON成为理想的数据交换语言。
JSON基于JavaScript Programming Language , Standard ECMA-262 3rd Edition - December 1999 的一个子集。

2.XML和JSON优缺点

(1).XML的优缺点
<1>.XML的优点
　　A.格式统一，符合标准；
　　B.容易与其他系统进行远程交互，数据共享比较方便。
<2>.XML的缺点
　　A.XML文件庞大，文件格式复杂，传输占带宽；
　　B.服务器端和客户端都需要花费大量代码来解析XML，导致服务器端和客户端代码变得异常复杂且不易维护；
　　C.客户端不同浏览器之间解析XML的方式不一致，需要重复编写很多代码；
　　D.服务器端和客户端解析XML花费较多的资源和时间。

(2).JSON的优缺点
<1>.JSON的优点：
　　A.数据格式比较简单，易于读写，格式都是压缩的，占用带宽小；
　　B.易于解析，客户端JavaScript可以简单的通过eval()进行JSON数据的读取；
　　C.支持多种语言，包括ActionScript, C, C#, ColdFusion, Java, JavaScript, Perl, PHP, Python, Ruby等服务器端语言，便于服务器端的解析；
　　D.在PHP世界，已经有PHP-JSON和JSON-PHP出现了，偏于PHP序列化后的程序直接调用，PHP服务器端的对象、数组等能直接生成JSON格式，便于客户端的访问提取；
　　E.因为JSON格式能直接为服务器端代码使用，大大简化了服务器端和客户端的代码开发量，且完成任务不变，并且易于维护。
<2>.JSON的缺点
　　A.没有XML格式这么推广的深入人心和喜用广泛，没有XML那么通用性；
　　B.JSON格式目前在Web Service中推广还属于初级阶段。

3.XML和JSON的优缺点对比

(1).可读性方面。
JSON和XML的数据可读性基本相同，JSON和XML的可读性可谓不相上下，一边是建议的语法，一边是规范的标签形式，XML可读性较好些。
(2).可扩展性方面。
XML天生有很好的扩展性，JSON当然也有，没有什么是XML能扩展，JSON不能的。
(3).编码难度方面。
XML有丰富的编码工具，比如Dom4j、JDom等，JSON也有json.org提供的工具，但是JSON的编码明显比XML容易许多，即使不借助工具也能写出JSON的代码，可是要写好XML就不太容易了。
(4).解码难度方面。
XML的解析得考虑子节点父节点，让人头昏眼花，而JSON的解析难度几乎为0。这一点XML输的真是没话说。
(5).流行度方面。
XML已经被业界广泛的使用，而JSON才刚刚开始，但是在Ajax这个特定的领域，未来的发展一定是XML让位于JSON。到时Ajax应该变成Ajaj(Asynchronous Javascript and JSON)了。
(6).解析手段方面。
JSON和XML同样拥有丰富的解析手段。
(7).数据体积方面。
JSON相对于XML来讲，数据的体积小，传递的速度更快些。
(8).数据交互方面。
JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。
(9).数据描述方面。
JSON对数据的描述性比XML较差。
(10).传输速度方面。
JSON的速度要远远快于XML。

4.XML与JSON数据格式比较

(1).关于轻量级和重量级
轻量级和重量级是相对来说的，那么XML相对于JSON的重量级体现在哪呢?应该体现在解析上，XML目前设计了两种解析方式：DOM和 SAX。
<1>.DOM
DOM是把一个数据交换格式XML看成一个DOM对象，需要把XML文件整个读入内存，这一点上JSON和XML的原理是一样的，但是XML要考虑父节点和子节点，这一点上JSON的解析难度要小很多，因为JSON构建于两种结构：key/value，键值对的集合;值的有序集合，可理解为数组；
<2>.SAX
SAX不需要整个读入文档就可以对解析出的内容进行处理，是一种逐步解析的方法。程序也可以随时终止解析。这样，一个大的文档就可以逐步的、一点一点的展现出来，所以SAX适合于大规模的解析。这一点，JSON目前是做不到得。
所以，JSON和XML的轻/重量级的区别在于：
JSON只提供整体解析方案，而这种方法只在解析较少的数据时才能起到良好的效果；
XML提供了对大规模数据的逐步解析方案，这种方案很适合于对大量数据的处理。

(2).关于数据格式编码及解析难度
<1>.在编码方面。
虽然XML和JSON都有各自的编码工具，但是JSON的编码要比XML简单，即使不借助工具，也可以写出JSON代码，但要写出好的XML代码就有点困难;与XML一样，JSON也是基于文本的，且它们都使用Unicode编码，且其与数据交换格式XML一样具有可读性。
主观上来看，JSON更为清晰且冗余更少些。JSON网站提供了对JSON语法的严格描述，只是描述较简短。从总体来看，XML比较适合于标记文档，而JSON却更适于进行数据交换处理。
<2>.在解析方面。
在普通的web应用领域，开发者经常为XML的解析伤脑筋，无论是服务器端生成或处理XML，还是客户端用 JavaScript 解析XML，都常常导致复杂的代码，极低的开发效率。
实际上，对于大多数Web应用来说，他们根本不需要复杂的XML来传输数据，XML宣称的扩展性在此就很少具有优势,许多Ajax应用甚至直接返回HTML片段来构建动态Web页面。和返回XML并解析它相比，返回HTML片段大大降低了系统的复杂性，但同时缺少了一定的灵活性。同XML或 HTML片段相比，数据交换格式JSON 提供了更好的简单性和灵活性。在Web Serivice应用中，至少就目前来说XML仍有不可动摇的地位。

(3).实例比较
XML和JSON都使用结构化方法来标记数据，下面来做一个简单的比较。
<1>.用XML表示中国部分省市数据如下：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
<?xml version="1.0" encoding="utf-8" ?>
<country>
  <name>中国</name>
  <province>
    <name>黑龙江</name>
    <citys>
      <city>哈尔滨</city>
      <city>大庆</city>
    </citys>  　　
  </province>
  <province>
    <name>广东</name>
    <citys>
      <city>广州</city>
      <city>深圳</city>
      <city>珠海</city>
    </citys> 　　
  </province>
  <province>
    <name>台湾</name>
    <citys>
      　<city>台北</city>
      　<city>高雄</city>
    </citys>　
  </province>
  <province>
    <name>新疆</name>
    <citys>
      <city>乌鲁木齐</city>
    </citys>
  </province>
</country>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

<2>.用JSON表示中国部分省市数据如下：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
 var country =
        {
            name: "中国",
            provinces: [
            { name: "黑龙江", citys: { city: ["哈尔滨", "大庆"]} },
            { name: "广东", citys: { city: ["广州", "深圳", "珠海"]} },
            { name: "台湾", citys: { city: ["台北", "高雄"]} },
            { name: "新疆", citys: { city: ["乌鲁木齐"]} }
            ]
        }
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

编码的可读性来说，XML有明显的优势，毕竟人类的语言更贴近这样的说明结构。JSON读起来更像一个数据块，读起来就比较费解了。不过，我们读起来费解的语言，恰恰是适合机器阅读，所以通过JSON的索引country.provinces[0].name就能够读取“黑龙江”这个值。
编码的手写难度来说，XML还是舒服一些，好读当然就好写。不过写出来的字符JSON就明显少很多。去掉空白制表以及换行的话，JSON就是密密麻麻的有用数据，而XML却包含很多重复的标记字符。


参考博客：
《[XML与JSON的区别，总结](http://blog.csdn.net/sanpintian/article/details/7347711)》
《[JSON 和 XML优缺点的比较](http://blog.sina.com.cn/s/blog_8a30865f0101amjh.html)》