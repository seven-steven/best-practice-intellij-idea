# Editor

## General

### Auto Import

Auto Import 可以配置编辑器的自动引入配置：

- 将 “Insert imports on paste" 设置为 ”Always"，粘贴代码时 IDEA 会自动帮我们引入需要的包；
- 勾选 “Add unambiguous imports on the fly"，IDEA 会自动帮我们引入无歧义的包；
- 勾选 ”Optimize imports on the fly"，IDEA 会自动帮我们清理不需要的引用；

![idea-settings-editor-general-auto-import](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/e1a5997ee03076a2cb18d02f80762e78.png)

### Editor Tabs

Editor Tabs 可以对 IDEA 编辑器的 tab 栏进行配置。

![idea-editor-tabs](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/ec333ad410cdd89495ad8e652dd1b501.png)

当我们编辑的文件越来越多的时候，编辑器的 tab 栏会拥挤隐藏无法快速切换。

这里建议把 “Tab placement" 设置为 “None" 来隐藏 tab 栏：

![idea-settings-editor-general-editor-tabs](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/1d34da8ba2ee6125848c8ac54888e4ea.png)

然后通过 ”ctrl + E" 快捷键打开 “Recent Files" 面板来切换最近文件：

![idea-panel-recent-files](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/e8d114acde6b8e03ef4f310edc892d1d.png)

"Recent Files" 面板支持检索，文件切换速度会比 tab 栏快很多：

![idea-panel-recent-files-searching](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/00a429bc07c7e61a7bdc04226cfbb4fe.png)

## Font

可以在 Font 设置面板对编辑器的字体、字号、行高等进行配置：

![idea-settings-editor-font](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/be7060115788379e4a0b2dacd2c1d10d.png)

## Code Style

Code Style 面板可以对代码风格进行相应的配置：

- 建议将 ”Line separator" 设置为 “Unix and macOs (\n)”。

  因为 Windows 中的 `\r` 可能会在 Unix 中引发一些诡异的问题。

  *这里只是建议，此项设置还是要以团队约定为准，不然版本i控制工具可能会因为一个换行符而沦陷。*

  参考：[回车和换行](https://www.ruanyifeng.com/blog/2006/04/post_213.html) | [该死的 ^M](https://blog.khotyn.com/blog/2014/11/15/damn-the-carriage-return-character/)

![idea-settings-editor-code-style](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/36013555edff61eba1a7c1a9ac4da0e0.png)

### Java

这里可以对 Java 的代码风格进行配置。

- 建议对 “Tabs and Indents" 进行如下设置：
  - 取消勾选 ”Use tab character“，取消之后，IDEA 会将所有的代码缩进替换为**空格**符号进行填充；
  - 将 ”Tab size", "Indent", "Continuation indent" 设置为自己喜欢的大小；

![idea-settings-editor-code-style-java](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/0e5d7d332043d29ff555c7ef3fee39a4.png)

## File and Code Templates

### Files

这里可以对文件和代码模板进行配置，其中：

"Description" 栏罗列了 IDEA 预置的变量，可以自行选择组合使用。

![image-20210726021915032](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/68005fab7c0fd745b95147086e593a11.png)

- Class

  Class 可以对 Java 的类模板进行配置：

  在模板输入框填入以下内容：

  ```java
  #if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
  #parse("File Header.java")
  
  /**
   * ${NAME}
   *
   * @author ${USER}
   * @since ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
   */
  public class ${NAME} {
  }
  ```

  ![idea-settings-editor-file-and-code-templates-class](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/c27d133bfa323549af61bf827a2f8a12.png)

  之后新建的 Java Class 文件会自动填充携带有 `@author` 和 `@since` 的 Java Doc 注释：

  ![new-interface-with-java-doc](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/543ab58430b5cb78033d9e2aaccd00f2.png)

- Interface

  Interface 配置页可以对 Java 的接口模板进行配置。

  在模板输入框填入以下内容：

  ```java
  #if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
  #parse("File Header.java")
  /**
   * ${NAME}
   *
   * @author ${USER}
   * @since ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
   */
  public interface ${NAME} {
  }
  
  ```

  ![idea-settings-editor-file-and-code-templates-interface](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/4bbda224ee5b39acd4bcfe7dfd6f9bd8.png)

  之后新建的 Java Interface 文件会自动填充携带有 `@author` 和 `@since` 的 Java Doc 注释：![new-java-class-with-java-doc](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/6ee1db451e0436c001499452bf8cbce1.png)

## File Encodings

这里可以对文件编码进行设置。

- 建议将所有的文件编码统一设置为 "UTF-8"；
- 将 “BOM for new UTF-8 files" 下的 ”Create UTF-8 files" 选项设置为 “with NO BOM"‘；

![idea-settings-editor-file-encodings](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/a402e4b5650a63ac78e0981f87c75d22.png)

## Live Templates

Live Templates 设置可以让我们在写代码的时候快速生成代码片段，具体操作如下：

### 基础步骤

1. 新建模板组：
   1. 点击 Live Templates 面板右方的 `+` 号并选择 “Template Group" ；![idea-settings-eidtor-live-templates-new-group](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/57593b4d376770d3a228c30a2a3a7973.png)
   2. 在弹出的输入框中输入模板组名称，点击 ”OK” 确认；![idea-settings-editor-live-templates-new-group-name](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/21c38d4f1030049de34560d32337383f.png)
2. 新建方法注释模板
   1. 在 Live Templates 面板选择自己刚刚新建的模板组；
   2. 点击面板右侧的 `+` 号并选择 “Live Template" 新建模板；![idea-settings-editor-live-templates-new-template](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/6502d886fcad994b1d694fc628a90b8c.png)
   3. 填写方法模板信息：
      - 在 ”Abbreviation" 输入框写入 `m`，这里是模板的简写，也可以叫做触发模板的关键字；

      - 在 “Description" 输入框写入 `方法注释`，这里写入的是模板描述，方便我们自己确认模板功能；

      - 在 ”Template text" 文本框写入以下模板：

        ```text
        **
         * $description$
          * $params$ $returns$
          * @author $user$
          * @since $date$ $time$
          */ 
        ```

        可以看到，我们在模板中定义了许多变量。![idea-settings-editor-live-templates-new-template](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/0c387d1a9c53ecdb90fa1879186dd18d.png)

      - 点击 “Edit variables" 并填写变量表达式：

        ![idea-settings-editor-live-templates-edit-variables](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/cff26434eb43cea6b66e0d0ac186fa65.png)

        - 在 ”params" 后的 “Expression" 输入框填入以下内容并勾选 ”Skip if defined“ 复选框：

            ```groovy
            groovyScript(
                "def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList(); 
                    def result='';
                    for(i = 0; i < params.size(); i++) {
                        if (params[i] == '') {
                            continue;
                        };

                        result += '\\n * @param ' + params[i];
                    }; 
                    return result == '' ? '' : result", 
                methodParameters()
            )
            ```

            这段 groovy 脚本的作用是生成参数注释。

            **勾选 ”Skip if defined“ 复选框的作用是如果表达式已经为对应变量生成了值，那么就跳过手动输入步骤。**

        - 在 ”returns" 后的 “Expression" 输入框填入以下内容并勾选 ”Skip if defined“ 复选框：

            ```groovy
            groovyScript(
              "def returnType = \"${_1}\"; 
                return returnType == 'void' ? '' : '\\n* @return ' + returnType + ''", 
              methodReturnType()
            )
            ```

            这段 groovy 脚本的作用是生成i返回值注释。

        - 在 ”user" 后的 “Expression" 输入框填入 `user()` 并勾选 ”Skip if defined“ 复选框；

            这里的 `user()` 是 IDEA 内置的方法，取当前操作系统登录用户的账号。此处也可以为固定字符串，取值为自己想要展示在方法注释中的名字。

        - 在 ”date" 后的 “Expression" 输入框填入 `date("yyyy-MM-dd")` 并勾选 ”Skip if defined“ 复选框；

        - 在 ”time" 后的 “Expression" 输入框填入 `time("HH:mm:ss")` 并勾选 ”Skip if defined“ 复选框；

        - 点击 ”OK“ 确认变量设置；

      - 配置可选项：

        ![idea-settings-editor-live-templates-options](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/a67e64daecf65782b3a501086f49bd18.png)

        - 把页面上方 ”By default expand with" 和页面右下角 “Options" 栏中的 ”Expand with" 设置为 “Tab";

          Live Template 的触发方式为 关键词 ”Abbreviation" + "Expand with"。

          按照我们上面的设置，如果想插入方法注释，只需要在方法上面一行输入 `m` 然后下 `Tab` 键，IDEA 就会把我们设置好的 “Template text" 插入到代码中。

        - 勾选页面右下角的 ”Reformat according to style"， IDEA 会在我们插入代码模板后自动根据当前设置的代码风格将其格式化；

        - 勾选页面右下角的 “Shorten FQ names”，IDEA 会自动截断完整标识符并导入对应语句；

      - 配置适用范围：

        点击页面左下角的 “Define" / "Change" 并在弹出面板中选择 ”Java"，表示此模板只会在 Java 文件中生效。

        ![idea-settings-editor-live-templates-applicable](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/eff5630ff21f9aa99442de48f96d45be.png)

      - 至此，配置完成。

        看下效果：

        ![idea-settings-editor-live-template-method-show](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/395be4de687fb51e17e9e110440a9be6.gif)

        *这里之所以在关键字 `m` 前加了斜线 `/` 是因为我在模板文字中没有写注释的斜线 `/`。添加 `/` 之后，注释才能完整。*

### 举一反三

#### 属性/成员变量注释模板

属性 / 成员变量注释模板如图所示，此处不再赘述。
![idea-settings-editor-live-templates-attrbute](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/89ac1cf120ad0bdb892ea72995faeccb.png)

#### 构造器注释模板

构造器注释模板相对于方法注释模板只是删除返回值：
![idea-settings-editor-live-templates-constructor](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/97b7283e27a50ffa5020b5f548be6d73.png)

#### SpringBootTest 注解模板

SpringBootTest 注解模板如图所示：
![idea-settings-editor-live-templates-spring-boot-test](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/93f325e566f8c843befecec87fd47d1d.png)

### 原生模板

IDEA 也预置了许多代码模板，以 Java 为例：

- `sout` 可以生成 `System.out.println()` 语句；
- `fori` 可以生成 for 循环；

此处不一一列举，感兴趣的话还请自行查看。

![idea-settings-editor-live-templates-build-in-java](https://picgo-daily.oss-cn-guangzhou.aliyuncs.com/picgo-daily/2023/cdb4b1d676408e4cbb75040e7779ab2d.png)
