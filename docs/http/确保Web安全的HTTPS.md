# 确保 Web 安全的 HTTPS

## HTTP的缺点
例如：
* 通信使用明文（不加密），内容可能会被窃听
* 不验证通信方的身份，因此有可能遭遇伪装
* 无法证明报文的完整性，所以有可能已遭篡改

### 通信使用明文可能会被窃听

比如抓包工具 Wireshark

* 加密处理防止被窃听

1. 通信的加密
HTTP 协议中没有加密机制，但可以通过和SSL(Secure Socket Layer，安全套接层)或TLS(Transport Layer Security，安全层传输协议)的组合使用，加密 HTTP 的通信内容。

用 SSL 建立安全通信线路之后，就可以在这条线路上进行 HTTP 通信了。与SSL组合使用的HTTP 被称为 HTTPS（HTTP Secure，超文本传输安全协议）或 HTTP over SSL。

2. 内容的加密
将参与的内容本身进行加密。由于HTTP 协议中没有加密机制，那么就对 HTTP 协议传输的内容本身加密。即把 HTTP 报文里所含的内容进行加密处理。

该方法仍有被篡改的风险

##