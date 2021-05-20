# [git rebase 什么是变基](https://www.cnblogs.com/Mr-O-O/p/11254841.html)

git里面的rebase总是让人觉得很难理解
特别是它的中文翻译：变基
图片来自廖雪峰
![变基哈哈哈  图片来自廖雪峰](https://img2018.cnblogs.com/blog/1343681/201907/1343681-20190727105225161-440553854.png)
首先不认识rebase，先查查词典好吧意思是：重定基准
所以这个翻译还是非常准确的。
如果还是觉得不好理解，注意，**前方高能**。
按照下面的步骤，我们换一个容易理解的词：

1. java里面的基类我们也可以说是父类所以 （基==父）
2. 变换变换 。变字和换字应该差不多。 我们就认为 （变==换）
3. 等价代换一下 （变基==换父）
4. 换父？ 不就是： **换爹** **!!!!!!**

好了经过上面的步骤，我们成功的将

我们的标题从git rebase 什么是变基 变为 **git rebase 什么是换爹**。

我们知道git中的commit也是有父子关系的。

所以到这里相信你已经明白了：变基变基，就是某个commit-B不想要commit-A这个爹了。要换个别的commit-C做自己的爹。

说到这里换爹都知道是干啥的，那么我们为什么要换爹呢？什么时候要用到换爹呢？

下面介绍一下需要换爹的场景：

# 合并多个commit

1. 一个分支上依次有A - F ，一共6个commit。这个分支 每一个commit 都是独苗，也很顽强的这么多代都没有断了香火。从commit_B到commit_E这么多代人就干了一件事儿就是盖了个房子。史书上（log）觉得不用分成这么多commit，想要合并一下。**合并连续commit**
2. commit_A在房子的门口种了一棵树，到了commit_F的时候又在门口种了棵树。史书觉得都是种树，干脆把commit_A和commit_F合并了吧。**合并非连续的commit**

# 修改commit message（很久之前的commit message）

这个过程没有换爹，使用rebase 命令的目的是可以通过这个操作修改commit message

# 合并分支

我们想要把topic分支合并到master。
![img](https://img2018.cnblogs.com/blog/1343681/201907/1343681-20190727125545287-1090389168.png)
在topic分支 执行这两个命令任意一个

```
git rebase master
git rebase master topic
```

可以达到下图的效果。
![img](https://img2018.cnblogs.com/blog/1343681/201907/1343681-20190727125826881-1813226449.png)

这里我们发现，topic从master分支分出去之后的所有commit：A、B、C，作用在了master的最后一个commit G之后。

每当rebase操作分支的时候 总是有些难以理解。这里我们说其实rebase命令本质上一直都是换爹。

分支名我们可以认为是执行相应分支最新commit的指针

分支名topic代表的是topic从master分出去之后的所有的commit

而分支名master代表的master分支上最新的commit。

为了验证以上的说法，可以执行以下命令

```
git  rebase  commit_F_id   topic
```

执行后得到以下分支图
![img](https://img2018.cnblogs.com/blog/1343681/201907/1343681-20190727132420712-1810757770.png)

### 注意，以下验证属于比较危险的行为，如果不熟悉。建议不要在重要的项目中尝试

我们可以再验证一次，执行

```
git  rebase  commit_G_id   commit_C_id   
```

执行后得到以下分支图
![img](https://img2018.cnblogs.com/blog/1343681/201907/1343681-20190727135025281-56176993.png)
我们注意到该命令与 git rebase master topic 相似。但是注意此时master 和 topic分支的指针的位置。commit G后面的几个commit是不在任何分支上的。属于比较危险的行为。
我们可以再验证一次，执行

```
git  rebase  commit_G_id   commit_A_id   
```

执行后得到以下分支图
![img](https://img2018.cnblogs.com/blog/1343681/201907/1343681-20190727135646049-115976011.png)
也是比较危险的行为。

## 总结一下

rebase是一个强大的命令。在以上常见的场景中的确是很方便。
其本质就是给某个commit 换一个父 commit
不建议在复杂的场景中使用！rebase有风险。
还有一条必须遵守：**rebase 不能用来操作与他人协作的分支**
比如topic是你自己的分支，git rebase master topic 没有问题，但是git rebase topic master就会给你的同事带来麻烦。