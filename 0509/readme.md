### resolve 
1. 定位到当前文件目录下 @: resolve(__dirname, 'src')
2. path 解构出来的

### 工程化
1. 代码越来越长
2. 职责是要单一
3. 进行拆分和封装

- * 在css中是通配符号，代表着适配所有的规则下的html元素样式。

### 文档读取顺序
1. 读取顺序，从html开始从上到下来读取html文件。
2. 我们期许的读取顺序是从html元素，再到css,最后才是js.
3. js 文件会阻止html和css的渲染进程。

### 数据为什么一定会有id
1. id是主键，主键的意思： 这个数据的身份证
2. data-xxx
    2.1 目的就是获取点击的id
    2.2 getAttribute | dataset 来获取 data-xxx


### banner | list 
1. 公共的组件
2. 独立成一个函数


### rem | 百分比 | em
1. rem 设置根元素的font-size
2. 百分比 是根据父元素的 百分比或者px
3. em 根据父元素的font-size:px => 如果父元素还是em, 那么就会一直向上查找。



### git
1. 注册gitee | github
2. 下载 git 软件安装包
3. 新建仓库
4. git clone xxxxxx => 下载git仓库代码
5. git status => 本地仓库变化
6. git add | git add . 
    6.1 git add => 单文件添加
    6.2 git add . => 多文件也就是所有文件
7. git commit -m 'xxx' => 本次提交的代码进行说明注释
8. git push 推送 => 代码推送到远程仓库中
9. git branch 查看当前所在的分支
10. git branch -vv 查看当前分支所关联的远程分支是哪一个分支？
11. git checkout -b dev 创建并且转到新建的 dev分支，dev是自定义的名字。                                             
12. git checkout -b 创建分支并且
13. git push --set-upstream origin dev 把本地分支关联到远程分支并推送
14. git pull 拉取当前分支的远程代码，也就是说要更新最新的远程分支代码。
15. 冲突 按 `ESC` 之后再按 `:` 之后输入q 
16. 之后vscode会给出提示，告诉你解决冲突的代码文件在哪里。通过选择`当前修改` 还是 `传入修改` 让你进行选择，还有一个选项是 `保留全部`。

* 新建分支一定要基于主分支代码进行创建