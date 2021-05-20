# 使用nvm管理node与npm版本

![img](https://csdnimg.cn/release/blogv2/dist/pc/img/reprint.png)

### 为什么使用nvm

工作中，不同的项目可能依赖着不同版本的node环境，[nvm](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fnvm-sh%2Fnvm)正是快速切换node版本的利器。

nvm是mac下的node管理工具，window环境官方推荐使用[nvmw](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fhakobera%2Fnvmw)或[nvm-windows](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fcoreybutler%2Fnvm-windows)。不过，它们的使用命令相差无几。

node版本管理工具还有[n](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Ftj%2Fn)命令，它是作为一个 node 的模块而存在，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

### 安装nvm

打开terminal, 执行以下脚本：

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash



复制代码
```

然后，输入以下命令检测是否安装成功：

```
command -v nvm 



复制代码
```

如果没有反应，意思味电脑系统里没有.bash_profile文件，执行以下命令创建，然后重新输入安装脚本即可。如：

```
# 第一步



touch ~/.bash_profile



# 第二步



curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash



复制代码
```



### nvm 常用命令

#### 1. 安装node版本

查找可安装的node版本

```
nvm ls-remote



复制代码
```

安装指定版本, 如 4.3.2。

```
nvm install 4.3.1



复制代码
```

安装某个版本系列中的最新一个版本，如 4.3.x

```
nvm install 4.3



复制代码
```

#### 2. 设置node默认使用版本

指定某个默认版本， 如 8.1.0

```
nvm alias default 8.1.0



复制代码
```

设置node最新可用的版本为默认版本

```
nvm alias default node               



复制代码
```

#### 3. 切换不同node版本

使用指定版本，如指定 4.2.3

```
nvm use 4.2.3



复制代码
```

使用某个版本系列中的最新可能版本

```
nvm use 4.2



复制代码
```

使用node中的最新可用版本

```
nvm use node



复制代码
```

使用iojd版本

```
nvm use iojs-v3.2.0



复制代码
```

#### 4. 给指定版本设置别名

如，给4.2.2版本设置一个名字

```
nvm alias common 4.2.2



复制代码
```

之后，要切换成这个版本，就可以使用如下命令：

```
nvm use common



复制代码
```

如果想取消设置的别名，可以执行：

```
nvm unalias common



复制代码
```

### 在项目中使用特定的版本号

1. 在项目目录中创建.nvmrc文件，写上需要指定的node版本号，如11.1.0

```
# .nvmrc 文件内容



v11.1.0



复制代码
```

1. terminal切换到.nvmrc所以路径，然后执行：

```
npm use



复制代码
```

也可使用[avn](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fwbyoung%2Favn)来自动化实现这个过程。

转载于:https://juejin.im/post/5cf8c65651882501a50b43e9

**相关资源：**[*使用**nvm**管理*不同*版本*的*node*与*npm*的方法](https://download.csdn.net/download/weixin_38619967/12770328?spm=1001.2101.3001.5697)