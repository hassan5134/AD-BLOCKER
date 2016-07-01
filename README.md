这只是一个简陋的Chrome去广告插件~ :smirk:

但是你可以自己按照喜欢的方式来去掉广告，只要你会使用JavaScript，自己修改background.js文件就好了。
（也就是人肉去广告。哈哈~）

使用：

**第一种方式（推荐）：**

直接下载:
https://github.com/HassanChiang/AD-BLOCKER/blob/master/releases/AD-BLOCKER.crx?raw=true
进入Chrome应用程序管理界面，把crx文件拖进浏览器。

**第二种方式：**

下载文件夹：

![image](https://github.com/HassanChiang/AD-BLOCKER/blob/master/Tutorial/1.png)

然后解压缩。

最后进入Chrome应用程序管理界面：

![image](https://github.com/HassanChiang/AD-BLOCKER/blob/master/Tutorial/2.png)

按顺序操作完就好了。

这种方式，每次打开浏览器，会提示你停用开发者模式，用起来有点麻烦。


原理很简单，就是在页面加载完成后，使用jQuery选择器，删除广告。
广告选择器保存在：https://github.com/HassanChiang/AD-BLOCKER/blob/master/api/selector.json
这样插件就不需要频繁更新，每次更新这个广告选择器列表就可以了。

PS：
有要去广告的页面，欢迎issue，大家一起来啊。3Q~

License: 

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="31" alt="WTFPL" /></a>
