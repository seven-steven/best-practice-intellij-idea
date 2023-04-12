# [DataGrip](https://www.jetbrains.com/datagrip/)

DataGrip 是 IDEA 内置的一款数据库连接工具，具有以下功能：

- 支持 20 多种主流数据库的连接；
- 支持对数据表以及记录值进行增删查改操作；
- 支持直接执行 SQL，同时具有 SQL 提示功能；
- 支持数据库数据的导入导出功能；
- 支持从数据库或者数据表逆向出 DDL 语句；
- 支持同库和跨库的数据表结构比较；
- 支持对数据表的所有字符串字段进行全文搜索；
- 支持数据表逆向生成 Java 代码；
- 支持数据库逆向出数据模型；

## 打开 Database 面板

依次点击 "View" -> "Tool Windows" -> "Database"，页面右侧会出现 "Database" 面板。

![idea-capacity-data-grip-database-panel](https://rmt.ladydaily.com/fetch/seven/storage/image-20210806012031084.png)

## 添加数据源

这里以 MariaDB 为例。

依次点击 Database 面板上的 `+` -> "Data Source" -> "MariaDB":

![idea-capacity-data-grip-database-add-mariadb](https://rmt.ladydaily.com/fetch/seven/storage/image-20210806013512684.png)

会弹出一个名为 "Data Sources and Drivers" 的信息录入面板并自动新增一个 MariaDB 的连接配置，填写以下信息：

- Name: 数据库连接名，用于给我们自己区分不同的数据库连接；
- Comment: 数据库连接注释，用于给我们自己区分不同的数据库连接（非必填）；
- Host: 数据库所在主机；
- Port: 数据库端口；
- User: 数据库用户；
- Password: 数据库密码；
- Database: 目标数据库（非必填，留空时可以在 Database 面板的对应连接中手动选择数据库）；

![idea-capacity-data-grip-data-sources-and-drivers-new-mariadb-connection](https://rmt.ladydaily.com/fetch/seven/storage/image-20210806014845298.png)

点击确认，Database 面板就会显示我们刚才添加的数据库连接。展开数据库连接，可以看到数据表信息：

![idea-capacity-data-grip-database-connection](https://rmt.ladydaily.com/fetch/seven/storage/image-20210806021827403.png)

双击数据表，编辑区域会以表格形式罗列出对应数据表中的数据：
我们可以在页面上方的 "WHERE" 和 "ORDER BY" 输入框筛选和排序数据，只需要在输入框中填写对应的 SQL 语句即可；
也可以直接编辑表格内容或者增删数据，改动数据库内容之后，需要点击提交按钮或者通过快捷键 `ctrl` + `enter` 提交变动到数据库；

![idea-capacity-data-grip-database-connection-table-data](https://rmt.ladydaily.com/fetch/seven/storage/image-20210806024651350.png)

<!-- ### 进阶配置 -->