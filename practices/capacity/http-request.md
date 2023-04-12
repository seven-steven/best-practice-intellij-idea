# HTTP Request

HTTP Request 是 IDEA 内置的一款 HTTP 模拟请求工具。

只需要按照简单的规则编写**纯文本**配置即可模拟 HTTP 请求。相对于需要频繁借助鼠标填写参数的 [Postman](https://www.postman.com/) 等工具，我个人更喜欢 IDEA 的做法。

HTTP Request 的主要功能如下：

- 支持模拟所有类型的 HTTP 请求，包括 GET、POST、PATCH、DELETE、PUT、HEAD、OPTIONS 等；
- 支持动态参数；
- 支持断言，可以编写和执行测试用例；
- 支持模拟文件上传；
- 记录请求日志；

## 模拟请求

HTTP Request 工具的使用非常简单，只需要在 IDEA 内任何位置新建 `.http` 文件，然后在 `.http` 文件中填写相应规则即可。

这里有一个请求示例：

```http
### Send POST request with json body
POST https://httpbin.org/post
Content-Type: application/json

{
  "id": 999,
  "value": "content"
}

### GET request with a header
GET https://httpbin.org/ip
Accept: application/json
```

其中：

- 第 1 行开头的 `###` 代表开始一个新的 HTTP 请求，后面可以跟注释内容（`#` 代表单行注释）；
- 第 2 行中的 `POST` 指定了请求方法，这里支持 HTTP 的所有请求方法； 后面的 `https://httpbin.org/post` 表示请求 uri；
- 第 3 行表示请求头。请求方法后面**紧邻的所有行**都会被当做请求头处理；
- 第 5-8 行是请求体，会被放置到 RequestBody 中；请求体和请求头之间需要有一个**空行**分割；

后面的 Get 请求同理。

如果你还是不清楚如何编写 HTTP 请求，可以点击编辑器右上角的 “Examples” 来查看 IDEA 官方示例：

![idea-capacity-http-request-example-get](https://rmt.ladydaily.com/fetch/seven/storage/image-20210801052227945.png)

编写完请求规则之后，只需要点击执行按钮，即可在控制台看到请求结果。

![idea-capacity-http-request-run](https://rmt.ladydaily.com/fetch/seven/storage/image-20210801054803465.png)

## curl 转换

curl 转换是我非常喜欢的一个功能，简直就是 debug 神器。

与前端同事联调接口时，如果前端发现请求报错，我会让前端同事直接从浏览器开发者工具中把对应请求的 curl 命令复制给我。

我在 IDEA 的 HTTP Request 中再把 curl 命令转换为 HTTP 请求，这样可以 **完全还原** bug 现场，对 bug 的排查工作有着莫大的帮助。

复制浏览器请求的 curl 命令：
![chrome-network-request-copy-as-curl](https://rmt.ladydaily.com/fetch/seven/storage/image-20210801055804720.png)

把 curl 指命令转换为 HTTP Request:

- 点击 `.http` 文件编辑器右上角的 “Convert...”  按钮；
- 选择 “Convert Curl to HTTP Request”;
  ![idea-capacity-http-request-convert-curl-to-http-request](https://rmt.ladydaily.com/fetch/seven/storage/image-20210801060020670.png)
- IDEA 会弹出一个文本框并自动粘贴剪贴板中的 curl 命令，我们也可以自行粘贴 curl 命令；
  ![idea-capacity-http-request-convert-curl-to-http-request-paste-curl](https://rmt.ladydaily.com/fetch/seven/storage/image-20210801060233526.png)
- 确认 curl 命令无误之后，点击 “Convert” 即可生成 HTTP Request 请求；
  ![idea-capacity-http-request-convert-curl-to-http-request-result](https://rmt.ladydaily.com/fetch/seven/storage/image-20210801060403380.png)
