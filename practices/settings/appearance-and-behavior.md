# Appearance & Behavior

这里可以配置 IDEA 的外观和行为。



## Appearance

Appearance 界面可以对 IDEA 的主题、字体、和字号等设置项进行配置。

*此处设置的字体和字号只能影响到 IDEA 编辑器以外的文字，编辑器的字体可以在 ”[Editor](#editor)" 设置项中进行配置。*

![idea-settings-appearance](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725174613643.png)



## Keymap

在 Keymap 界面可以对 IDEA 内的快捷键进行配置。

IDEA 预置了几种常用的快捷键方案，选择自己喜欢的方案即可。

强烈建议使用 IDEA 插件 [Key Promoter X](/practices/plugins/key-promoter-x.html) 或者 [Presentation Assistant](/practices/plugins/presentation-assistant.html) 来帮助自己养成使用快捷键的习惯。

![idea-settings-keymap](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725175400959.png)



## Editor

### General

#### Auto Import

Auto Import 可以配置编辑器的自动引入配置：

- 将 “Insert imports on paste" 设置为 ”Always"，粘贴代码时 IDEA 会自动帮我们引入需要的包；
- 勾选 “Add unambiguous imports on the fly"，IDEA 会自动帮我们引入无歧义的包；
- 勾选 ”Optimize imports on the fly"，IDEA 会自动帮我们清理不需要的引用；

![idea-settings-editor-general-auto-import](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725182421377.png)

#### Editor Tabs

Editor Tabs 可以对 IDEA 编辑器的 tab 栏进行配置。

![idea-editor-tabs](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725184432799.png)

当我们编辑的文件越来越多的时候，编辑器的 tab 栏会拥挤隐藏无法快速切换。

这里建议把 “Tab placement" 设置为 “None" 来隐藏 tab 栏：

![idea-settings-editor-general-editor-tabs](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725184553243.png)

然后通过 ”ctrl + E" 快捷键打开 “Recent Files" 面板来切换最近文件：

![idea-panel-recent-files](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725185149814.png)

"Recent Files" 面板支持检索，文件切换速度会比 tab 栏快很多：

![idea-panel-recent-files-searching](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725185427630.png)

### Font

可以在 Font 设置面板对编辑器的字体、字号、行高等进行配置：

![idea-settings-editor-font](https://rmt.ladydaily.com/fetch/seven/storage/image-20210725185806372.png)

### Code Style

Code Style 面板可以对代码风格进行相应的配置：

- 建议将 ”Line separator" 设置为 “Unix and macOs (\n)”。

  因为 Windows 中的 `\r` 可能会在 Unix 中引发一些诡异的问题。

  *这里只是建议，此项设置还是要以团队约定为准，不然版本i控制工具可能会因为一个换行符而沦陷。*

  参考：[回车和换行](https://www.ruanyifeng.com/blog/2006/04/post_213.html) | [该死的 ^M](https://blog.khotyn.com/blog/2014/11/15/damn-the-carriage-return-character/) 

![idea-settings-editor-code-style](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726011600081.png)

#### Java

这里可以对 Java 的代码风格进行配置。

- 建议对 “Tabs and Indents" 进行如下设置：
  - 取消勾选 ”Use tab character“，取消之后，IDEA 会将所有的代码缩进替换为**空格**符号进行填充；
  - 将 ”Tab size", "Indent", "Continuation indent" 设置为自己喜欢的大小；

![idea-settings-editor-code-style-java](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726015709859.png)

### File and Code Templates

#### Files

这里可以对文件和代码模板进行配置，其中：

"Description" 栏罗列了 IDEA 预置的变量，可以自行选择组合使用。

![image-20210726021915032](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726021915032.png)

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
   * @date ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
   */
  public class ${NAME} {
  }
  ```

  ![idea-settings-editor-file-and-code-templates-class](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726020615304.png)

  之后新建的 Java Class 文件会自动填充携带有 `@author` 和 `@data` 的 Java Doc 注释：

  ![new-interface-with-java-doc](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726021308075.png)

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
   * @date ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
   */
  public interface ${NAME} {
  }
  
  ```

  ![idea-settings-editor-file-and-code-templates-interface](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726021751142.png)

  之后新建的 Java Interface 文件会自动填充携带有 `@author` 和 `@data` 的 Java Doc 注释：![new-java-class-with-java-doc](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726021142323.png)

### File Encodings

这里可以对文件编码进行设置。

- 建议将所有的文件编码统一设置为 "UTF-8"；
- 将 “BOM for new UTF-8 files" 下的 ”Create UTF-8 files" 选项设置为 “with NO BOM"‘；

![idea-settings-editor-file-encodings](https://rmt.ladydaily.com/fetch/seven/storage/image-20210726022423595.png)

### Live Templates



## Plugins



## Version Control



## Build, Execution, Deployment



## Languages & Frameworks



## Tools



## Other Settings

