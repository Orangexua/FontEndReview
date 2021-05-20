Source Port/Destination Port 描述的是发送端口号和目标端口号，代表发送数据的应用程序和接收数据的应用程序。

Sequence Number（序列号）和 Achnowledgment Number（响应号） 是保证可靠性的两个关键

Data Offset 是一个偏移量。这个量存在的原因是 TCP Header 部分的长度是可变的，因此需要一个数值来描述数据从哪个字节开始。

Reserved 是很多协议设计会保留的一个区域，用于日后扩展能力

URG/ACK/PSH/RST/SYN/FIN 是几个标志位，用于描述 TCP 段的行为。也就是一个 TCP 封包到底是做什么用的？

1）URG 代表这是一个紧急数据，比如远程操作的时候，用户按下了 Ctrl+C，要求终止程序，这种请求需要紧急处理。

2）ACK 代表响应，我们在“02 | 传输层协议 TCP：TCP 为什么握手是 3 次、挥手是 4 次？”讲到过，所有的消息都必须有 ACK，这是 TCP 协议确保稳定性的一环。

3）PSH 代表数据推送，也就是在传输数据的意思。

4）SYN 同步请求，也就是申请握手。

5）FIN 终止请求，也就是挥手。

6）Window 也是 TCP 保证稳定性并进行流量控制的工具

7）Checksum 是校验和，用于校验 TCP 段有没有损坏。

8）Urgent Pointer 指向最后一个紧急数据的序号（Sequence Number）。它存在的原因是：有时候紧急数据是连续的很多个段，所以需要提前告诉接收方进行准备。

9）Options 中存储了一些可选字段，比如接下来我们要讨论的 MSS（Maximun Segment Size）。

10）Padding 存在的意义是因为 Options 的长度不固定，需要 Pading 进行对齐。