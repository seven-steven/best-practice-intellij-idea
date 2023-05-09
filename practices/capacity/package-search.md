# [Package Search](https://plugins.jetbrains.com/plugin/12507-package-search)

IntelliJ IDEA 2021.2 版本预置了 Package Search 插件，可以对 Maven 和 Gradle 项目进行依赖查找和添加等。

## 依赖查看

点击 IDEA 编辑窗格下方的 "Dependencies" 标签，IDEA 会在页面下方弹出 "Dependencies" 页面。其中：

- 页面左侧是当前工程的项目结构；
- 页面中间是当前模块已经引入的依赖项，从左到右依次是依赖的名称、作用范围、版本信息；
- 页面右侧显示的是当前选中的依赖项的介绍信息；

![idea-capacity-package-search-dependencits](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/c59564103f3b8af4d4c3ab5243017ec0.png)

## 依赖查找/添加

- 点击 ”Dependencies" 页面中部的搜索框并输入想要查找/添加的依赖名；
- IDEA 会自动搜索并帮我们罗列出所有符合搜索条件的依赖项，选择好依赖项的作用范围和版本信息，点击依赖列表右侧的 "Add" 按钮即可把对应的依赖添加到当前模块的 pom 文件中；

![idea-capacity-package-search-search](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/fe843dc78ac08f08843e24d41f43ff8d.png)
