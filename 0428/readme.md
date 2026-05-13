### Authorization 携带 token
1. 携带身份认证信息的请求头


### token
1. 用户登录 | 账号、密码登录 | 微信扫码登录 | 手机验证码登录 | 第三方登录
2. 后端会验证你的登录信息 => user 
2.1 没有你，提示当前账号密码错误 | 没有你，提示该账号没有注册，请进行注册。
2.2 有你，密码输入错误，那么就会提示，登录密码错误
2.3 超时登录，会再次让你登录

3. 验证成功，后台会生成一个token,返回给前端。
4. 前端应该保存token
5. 以后访问需要登录token的接口，都要携带token,Authorization携带token
6. 后台会读取 Authorization ，验证token是否有效。
6.1 token是否过期
6.2 token是否正确


### Bearer 认证类型
1. 持有者，携带者

* Authorization  是请求头字段名，表示认证信息
* Bearer         认证方案，表示 Bearer 携带token
* token          后台返回的token值


