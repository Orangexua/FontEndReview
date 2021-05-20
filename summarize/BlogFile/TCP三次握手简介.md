## TCP三次握手简介

 发表于 2017-08-11 | 更新于 2017-10-23 | 分类于 [计算机网络 ](https://jiar.github.io/categories/计算机网络/)| | 阅读次数 658

# TCP三次握手简介

[简书阅读地址在这里](http://www.jianshu.com/p/448f37ed29fe)

身处在互联网时代，计算机网络至关重要，然而却一直没有好好的了解这方面的知识。好在今年总算是毕业了，工作也相对稳定了，是时候拿起书籍阅读，提升自己。

首先，就拿最近接触的TCP三次握手来小试，若本文存在错误或者不恰当指出，还望指出 :)

[![TCP三次握手（原创图片）](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/tcp_hand_shake_detail.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/tcp_hand_shake_detail.png)



### TCP首部简介

TCP三次握手涉及到TCP首部的一些知识，所有有必要先介绍下TCP首部的相关知识。如果嫌TCP首部内容太多，那么只要看下`ACK`和`SYN`这两个标志比特就行了（因为TCP三次握手过程主要用到这两个标志比特）。

[![TCP首部（图片来自网络））](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/tcp_head.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/tcp_head.png)

> - 源端口(Source Port)和目的端口(Destination Port): 分别占用16位，表示源端口号和目的端口号。用于区别主机中的不同进程，而IP地址是用来区分不同的主机的，源端口号和目的端口号配合上IP首部中的源IP地址和目的IP地址就能唯一的确定一个TCP连接。
> - 序号(Sequence Number): 用来标识从TCP发端向TCP收端发送的数据字节流，它表示在这个报文段中的的第一个数据字节在数据流中的序号。主要用来解决网络报乱序的问题。
> - 确认号(Acknowledgment Number): 32位确认序列号包含发送确认的一端所期望收到的下一个序号，因此，确认序号应当是上次已成功收到数据字节序号加1。不过，只有当标志位中的ACK标志（下面介绍）为1时该确认序列号的字段才有效。主要用来解决不丢包的问题。
> - 数据偏移(Offset): 给出首部中32 bit字的数目，需要这个值是因为任选字段的长度是可变的。这个字段占4bit（最多能表示15个32bit的的字，即4*15=60个字节的首部长度），因此TCP最多有60字节的首部。然而，没有选项字段，正常的长度是20字节。
> - 保留: 占6位。保留为今后使用，目前置为0。
> - 标志比特(TCP Flags): TCP首部中有6个标志比特，它们中的多个可同时被设置为1，主要是用于操控TCP的状态机的，依次为URG，ACK，PSH，RST，SYN，FIN。每个标志位的意思如下:
>   - URG: 此标志表示TCP包的紧急指针域（后面马上就要说到）有效，用来保证TCP连接不被中断，并且督促中间层设备要尽快处理这些数据。
>   - ACK: 此标志表示应答域有效，就是说前面所说的TCP应答号将会包含在TCP数据包中。有两个取值: 0和1，为1的时候表示应答域有效，反之为0。
>   - PSH: 这个标志位表示Push操作。所谓Push操作就是指在数据包到达接收端以后，立即传送给应用程序，而不是在缓冲区中排队。
>   - RST: 这个标志表示连接复位请求。用来复位那些产生错误的连接，也被用来拒绝错误和非法的数据包。
>   - SYN: 表示同步序号，用来建立连接。SYN标志位和ACK标志位搭配使用，当连接请求的时候，SYN=1，ACK=0。连接被响应的时候，SYN=1，ACK=1。这个标志的数据包经常被用来进行端口扫描。扫描者发送一个只有SYN的数据包，如果对方主机响应了一个数据包回来 ，就表明这台主机存在这个端口。但是由于这种扫描方式只是进行TCP三次握手的第一次握手，因此这种扫描的成功表示被扫描的机器不很安全，一台安全的主机将会强制要求一个连接严格的进行TCP的三次握手。
>   - FIN: 表示发送端已经达到数据末尾，也就是说双方的数据传送完成，没有数据可以传送了，发送FIN标志位的TCP数据包后，连接将被断开。这个标志的数据包也经常被用于进行端口扫描。
> - 窗口(Window): 也就是有名的滑动窗口，用来进行流量控制。这是一个复杂的问题，这篇博文中并不会进行总结。
> - 校验和: 占2字节。该字段检验的范围包括首部和数据这两部分。由发端计算和存储，并由收端进行验证。
> - 紧急指针: 占2个字节，紧急指针仅在URG=1时才有意义，它指出本报文段中的紧急数据的字节数。当所有紧急数据处理完毕时，TCP就告诉应用程序恢复到正常操作。值得注意的是，即使窗口为0时也可发送紧急数据。
> - 选项: 长度可变，最长可达40字节，当没有选项时，TCP的首部长度是20字节。最大报文段长度MSS，MSS是指每一个TCP报文段中的数据字段的最大长度。

### TCP三次握手过程

其实以下这张图片就能说明TCP三次握手的过程以及握手两端状态的变化。

[![TCP三次握手（原创图片）](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/tcp_hand_shake_detail.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/tcp_hand_shake_detail.png)

- 第一次握手: 建立连接。客户端发送连接请求报文段，将SYN位置为1，Seq(Sequence Number)为X(由操作系统动态随机选取一个32位长的序列号)。然后，客户端进入SYN_SEND状态，等待服务器的确认。
- 第二次握手: 服务器收到客户端的SYN报文段。需要对这个SYN报文段进行确认，设置Ack(Acknowledgment Number)设置为X(第一次握手中的Seq的值)+1。同时，自己还要发送SYN请求信息，将SYN位置为1，Seq(Sequence Number)为Y(由操作系统动态随机选取一个32位长的序列号)。服务器端将上述所有信息一并发送给客户端，此时服务器进入SYN_RECV状态。
- 第三次握手: 客户端收到服务器的报文段。然后将Ack(Acknowledgment Number)设置为Y(第二次握手中的Seq的值)+1，Seq(Sequence Number)设置为X+1`第二次握手中的Ack(Acknowledgment Number)值`，向服务器发送ACK报文段，这个报文段发送完毕以后，客户端和服务器端都进入ESTABLISHED状态，完成TCP三次握手。

TCP的SYN同步标志位被设计成占用一个字节的编号，既然是一个字节的数据，按照TCP对有数据的TCP Segment必须确认的原则，所以可看到一端发送SYN，则另一端用ACK进行响应。

### 握手中断

- 第一次握手中断: A发送给B的SYN中断，A会周期性超时重传，直到A收到B的确认响应。
- 第二次握手中断: B发送给A的SYN、ACK中断，B会周期性超时重传，直到B收到A的确认响应。
- 第三次握手中断: A发送给B的ACK中断，A不会重传。超时后，B会重传SYN信号(即回到第二次握手)，直到B收到A的确认响应。

### 为什么要三次握手

以下是两种比较权威说法：

> - 在谢希仁著《计算机网络》第四版中讲“三次握手”的目的是“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”。在另一部经典的《计算机网络》一书中讲“三次握手”的目的是为了解决“网络中存在延迟的重复分组”的问题。这两种不用的表述其实阐明的是同一个问题。谢希仁版《计算机网络》中的例子是这样的，“已失效的连接请求报文段”的产生在这样一种情况下：client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达server。本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于现在client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client不会向server的确认发出确认。server由于收不到确认，就知道client并没有要求建立连接。”
> - 在Google Groups的[TopLanguage](https://groups.google.com/forum/#!forum/pongba)中看到一帖讨论TCP“三次握手”觉得很有意思。贴主提出“[TCP建立连接为什么是三次握手？](https://groups.google.com/forum/#!topic/pongba/kF6O7-MFxM0/discussion)”的问题，在众多回复中，有[一条回复](https://groups.google.com/forum/#!msg/pongba/kF6O7-MFxM0/5S7zIJ4yqKUJ)写道：“这个问题的本质是, 信道不可靠, 但是通信双发需要就某个问题达成一致. 而要解决这个问题, 无论你在消息中包含什么信息, 三次通信是理论上的最小值. 所以三次握手不是TCP本身的要求, 而是为了满足”在不可靠信道上可靠地传输信息”这一需求所导致的. 请注意这里的本质需求,信道不可靠, 数据传输要可靠. 三次达到了, 那后面你想接着握手也好, 发数据也好, 跟进行可靠信息传输的需求就没关系了. 因此,如果信道是可靠的, 即无论什么时候发出消息, 对方一定能收到, 或者你不关心是否要保证对方收到你的消息, 那就能像UDP那样直接发送消息就可以了.”。

是不是觉得好难懂的样子，那么可以先看下下面我画的对“为什么要三次握手”的图解，再回头看上面的讲解。

[![为什么是三次握手？（原创图片）](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/tcp_hand_shake_three_times.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/tcp_hand_shake_three_times.png)

由图可以得出，三次握手的本质是：将“四次握手”中的第二次、第三次握手合为一次，因为“四次握手”中的第二次、第三次握手都是由B向A传递报文，而且这两次发送报文的目的允许这两次报文合并为一次。

### 实践(抓包分析)

接下来我们通过网络抓包的方式来了解TCP的三次握手。我这里使用的抓包软件是`Wireshark`。

- 打开`Wireshark`，选择需要捕获的网络。
  [![wireshark_welcome](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/wireshark_welcome.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/wireshark_welcome.png)
- 进入到主界面
  [![wireshark_main](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/wireshark_main.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/wireshark_main.png)
- 找到TCP三次握手
  [![wireshark_tcp_shake](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/wireshark_tcp_shake.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/wireshark_tcp_shake.png)
  观察`Wireshark`上部已经捕获的网络数据包列表部分，看`Info`部分，能找到相对连续的三列(分别显示`A -> B [SYN]...`、`B -> A [SYN, ACK]...`、`A -> B [ACK]...`)，便是TCP的三次握手，在找的时候，注意`Source`栏和`Destination`栏中的ip地址的相对应，以及`Info`栏中的端口的对应。
- 查看第一次握手的详情
  [![wireshark_tcp_shake_first](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/wireshark_tcp_shake_first.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/wireshark_tcp_shake_first.png)
- 查看第二次握手的详情
  [![wireshark_tcp_shake_second](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/wireshark_tcp_shake_second.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/wireshark_tcp_shake_second.png)
- 查看第三次握手的详情
  [![wireshark_tcp_shake_third](https://jiar.github.io/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/wireshark_tcp_shake_third.png)](https://jiar.github.io/2017/08/11/TCP三次握手简介/wireshark_tcp_shake_third.png)

选中每次一的握手数据包，点击下方的`Transmission Control Protocol(TCP)`，即可显示每次TCP握手的详情。在详情中，我们展开`Flags`，可以看到比特标志位是否有被设置的情况。
我们能发现，实践中的TCP状态情况，跟上面提到的理论是一致的。

- 第一次握手: [SYN] Seq=0
- 第二次握手: [SYN, ACK] Seq=0 Ack=1
- 第三次握手: [ACK] Seq=1 Ack=1

### 参考

感谢下列作者的分享

> - [通俗大白话来理解TCP协议的三次握手和四次分手 - jawil](https://github.com/jawil/blog/issues/14)
> - [TCP连接建立过程中为什么需要“三次握手” - TechZi](http://www.cnblogs.com/techzi/archive/2011/10/18/2216751.html)
> - [TCP 为什么是三次握手，为什么不是两次或四次？ - 回答作者: 车小胖](https://zhihu.com/question/24853633/answer/115173386)
> - [TCP为什么需要3次握手与4次挥手 - xifeijian](http://www.voidcn.com/blog/xifeijian/article/p-633810.html)
> - [TCP的三次握手与四次挥手过程的每一步的具体状态变换 - 阿铭铭](http://ab3813.blog.51cto.com/10538332/1773751)
> - [TCP报文段的首部格式 - wszddup](http://blog.sina.com.cn/s/blog_7f2a66c70102v5ry.html)
> - [TCP - x_zhaohu](http://www.jianshu.com/p/0c4828e3b100)
> - [使用抓包工具分析TCP三次握手过程 - 嘿嘿_小余同学](http://www.jianshu.com/p/afa438cb7d73)

### 结束语

以上便是我这次关于`TCP三次握手`方面的分享，同时也感谢我在文章中提到的博文的博主的分享。如果您在阅读本文时发现有错误或不恰当之处，欢迎在评论中指出。