# Version Control

## commit

这里可以对代码提交规则进行简单配置：

- 建议勾选 "Force non-empty commit comments"，强制填写 commit message，帮助我们更好地规范开发习惯；

- 建议勾选 “Before Commit” 下的  “Reformat code”、“Rearrange code”、“Optimize imports”、“Analyze code"、”Check TODO(Show All)” 复选框。

  在我们提交代码之前，IDEA 会自动帮我们格式化和重新排列代码、优化 import 语句（主要是去除不必要的 import）、分析代码问题、检查 TODO 项，防止我们不小心提交了错误或者不规范的代码。

![idea-settings-version-control-commit](https://rmt.ladydaily.com/fetch/seven/storage/image-20210728005405247.png)

## confirmation

这里建议勾选作如下设置：

- 将 “When files are deleted" 设置为 ”Remove silently“；

  当我们删除版本库中的文件时，IDEA 会自动帮我们把对应文件从版本库中移除。

- 将 ”When empty changelist becomes inactive" 设置为 “Remove silently"；

  当空 changelist 变为非活跃状态时，IDEA 会自动帮我们删除对应的 changelist。

![idea-settings-version-control-confirmation](https://rmt.ladydaily.com/fetch/seven/storage/image-20210728005718620.png)

## git

git 设置建议勾选 “Auto-update if push of the current branch was rejected”。当我们的 push 操作被 git 仓库拒绝时，IDEA 会自动帮我们更新本地代码。

![idea-settings-version-control-git](https://rmt.ladydaily.com/fetch/seven/storage/image-20210728005855681.png)