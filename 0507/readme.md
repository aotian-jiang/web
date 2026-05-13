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