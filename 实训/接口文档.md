

# OA工作流

[toc]

```
返回多个格式
{
    "code": "200",
    "msg": "XXX",
    "data": [{
        "id": 1348505711457472,
        "name": "XXX",
        "account": "XXX",
        "mobile": "XXX",
        "role": "XXX",
        "rank": "XXX",
        "department": "XXX"
    },
    {
        "id": 1348505711457472,
        "name": "XXX",
        "account": "XXX",
        "mobile": "XXX",
        "role": "XXX",
        "rank": "XXX",
        "department": "XXX"
    }
    ]
}
```

    嵌套数据返回
    "msg": "获取成功",
    "code": 200,
    "data": [
        {
            "id": 3,
            "name": "测试",
            "menurl": "///",
            "menuimg": "",
            "remark": "",
            "is_delete": false,
            "menu_id": null,
            "menu_data": [
                {
                    "id": 18,
                    "name": "测试",
                    "menurl": "///",
                    "menuimg": "",
                    "remark": "",
                    "is_delete": false,
                    "menu_id": 3
                },
                {
                    "id": 19,
                    "name": "测试",
                    "menurl": "///",
                    "menuimg": "",
                    "remark": "",
                    "is_delete": false,
                    "menu_id": 3
                }
            ]
        },
        {
            "id": 4,
            "name": "测试",
            "menurl": "///",
            "menuimg": "",
            "remark": "",
            "is_delete": false,
            "menu_id": null,
            "menu_data": [
                {
                    "id": 20,
                    "name": "测试",
                    "menurl": "///",
                    "menuimg": "",
                    "remark": "",
                    "is_delete": false,
                    "menu_id": 4
                }
            ]
        },

## 1	未命名文档

## 2	登录

## 2.1	图片验证码

> GET  /user/imgcode/uuid/
### 接口说明
> 生成图片验证码并存入redis返回给前端
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|图片验证码|
| msg|string|XXX|true|请求图片验证码|
| img|object|Byte|true|图片验证码及图片|

![接口响应数据_134b165a-b070-405a-ba06-875edefddeb2](C:\Users\Lenovo\Desktop\响应数据\接口响应数据_134b165a-b070-405a-ba06-875edefddeb2.png)

## 2.2	短信验证码

> GET  /user/smscode/uuid/
### 接口说明
> 获取短信验证码
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| mobile|number|XXX|true|手机号|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 2.3	登录

> POST  /user/login/
### 接口说明
> 员工登录
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name| string   ||true|用户名|
| password|string||true|密码|
| code|string||true|图片验证码|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|响应状态码|
| msg|string|XXX|true|响应内容|
| token|string|XXX|true|员工登录的token|
● 200: OK 响应数据格式：JSON

 

```python
{
	"code": 200,
	"msg": "登陆成功",
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ilx1OWUyM1x1NGViYSIsImV4cCI6MTY2MzE3Njg5NH0.s9x1SimYz51MxprnGTTvRcEr6WEPV3J4AnLB9XrgH0o"
}
```



## 2.4	忘记密码

> POST  /user/forgotpwd/
### 接口说明
> 忘记密码，修改密码
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|用户名|
| password|string|XXX|true|新密码|
| mobile|string|XXX|true|手机号|
| code|string|XXX|true|短信验证码(可以为图片可以不写)|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|


## 3	主页

## 3.1	首页/待办事项

> GET  /home/todos/
### 接口说明
> 获取首页信息
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|string||true|（暂时还没写流程不知道需要返回的数据）|


## 3.2	首页/员工数据

> GET  /user/empdats/
### 接口说明
> 获取员工数据
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|获取到的员工数据|
|⇥ count|string|0|true|员工总人数|
|⇥ formal|string|0|true|正式员工|
|⇥ exercitation|string|0|true|实习生|
|⇥ awaitrding|string|0|true|待入职|
|⇥ awaitdimission|string|0|true|待离职|
|⇥ awaitPositive|string|0|true|待转正|

```python
{
	"code": 200,
	"msg": "获取成功",
	"data": {
		"count": 10,
		"formal": 10,
		"exercitation": 0,
		"awaitrding": 0,
		"awaitdimission": 0,
		"awaitpositive": 0
	}
}
```



## 3.3	首页/员工生日

> GET  /home/birthdays/
### 接口说明
> 获取员工生日信息
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|获取到的员工生日信息|
|⇥ january|string|0|true|一月|
|⇥ february|string|0|true|二月|
|⇥ march|string|0|true|三月|
|⇥ april|string|0|true|四月|
|⇥ may|string|0|true|五月|
|⇥ june|string|0|true|六月|
|⇥ july|string| 0      |true|七月|
|⇥ august|string|0|true|八月|
|⇥ september|string|0|true|九月|
|⇥ october|string|0|true|十月|
|⇥ november|string|0|true|十一月|
|⇥ december|string|0|true|十二月|

```PYTHON
{
	"code": 200,
	"msg": "获取成功",
	"data": {
		"january": 0,
		"february": 0,
		"march": 0,
		"april": 2,
		"may": 1,
		"june": 1,
		"july": 1,
		"august": 2,
		"september": 1,
		"october": 1,
		"november": 0,
		"december": 1
	}
}
```



## 4	系统管理

## 4.1	用户管理

> GET  /home/systemusers/
### 接口说明
> 获取所有的用户信息
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|获取到的所有员工信息|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|用户名|
|⇥ account|string|XXX|true|账号|
|⇥ mobile|string|XXX|true|手机号|
|⇥ role|string|XXX|true|所属角色|
|⇥ rank|string|XXX|true|所属职级|
|⇥ department|string|XXX|true|所属部门|

```python
{
	"code": 200,
	"msg": "查询成功",
	"data": [
		{
			"id": 1,
			"name": "鸣人",
			"account": "鸣人",
			"mobile": "15111111111",
			"state_time": "2022-08-28T17:13:00Z",
			"address": "北京",
			"birthday": "8",
			"sex": "男",
			"userstate": 3,
			"is_delete": false,
			"rank": "p1",
			"position": 1,
			"department": "财务部",
			"role": "管理者"
		}
	]
}
```



## 4.1.1	用户管理(搜索)

> GET  /home/search/
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|null|true|姓名|
| mobile|string|null|true|电话|
| department|string|null|true|所属部门|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|搜索信息|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|用户名|
|⇥ account|string|XXX|true|账号|
|⇥ mobile|string|XXX|true|手机号|
|⇥ role|string|XXX|true|所属角色|
|⇥ rank|string|XXX|true|所属职级|
|⇥ department|string|XXX|true|所属部门|
```

```


## 4.1.2	登录日志

> GET  /home/loginlogs/
### 接口说明
> 获取所有员工登录日志
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|所有员工登录日志|
|⇥ id|int32|0|true|ID|
|⇥ ip|string|XXX|true|登录IP|
|⇥ name|int32|0|true|账号名称|
|⇥ device|string|XXX|true|登录设备|
|⇥ place|string|XXX|true|登录地点|
|⇥ logintime|string|00:00:00|true|登录时间|


## 4.1.2.1	搜索

> GET  /home/loginsearch/
### 接口说明
> 登录日志搜索
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| account|string|XXX|true|账号名称|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|搜索到的登录信息|
|⇥ id|int32|0|true|登录日志ID|
|⇥ ip|string|XXX|true|登录设备IP|
|⇥ name|int32|0|true|账号名称|
|⇥ device|string|XXX|true|登录设备|
|⇥ place|string|XXX|true|登录地点|
|⇥ logintime|string|00:00:00|true|登陆时间|


## 4.1.3	操作日志

> GET  /home/operatelogs/
### 接口说明
> 获取所有员工的操作日志
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|所有员工登录日志|
|⇥ id|int32|0|true|id|
|⇥ name|int32|0|true|操作人|
|⇥ operationurl|string|XXX|true|操作路径|
|⇥ operationaction|string|XXX|true|操作动作|
|⇥ operationtime|string|XXX|true|操作时间|


## 4.1.3.1	搜索

> GET  /home/operateserch/
### 接口说明
> 搜索操作日志
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|操作人|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|搜索到的登录信息|
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|操作人|
|⇥ operationurl|string|XXX|true|操作路径|
|⇥ operationaction|string|XXX|true|操作动作|
|⇥ operationtime|string|XXX|true|操作时间|


## 4.1.4	用户管理(获取单个)

> GET  /home/reviseuser/id/
### 接口说明
> 修改前获取单个用户信息
### 请求头(路由拼接的id的值)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|int32|0|true|用户ID|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|相应信息|
| data|object||true|获取一个用户信息|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|用户名称|
|⇥ account|string|XXX|true|账号|
|⇥ mobile|string|XXX|true|手机号|
|⇥ role|string|XXX|true|所属角色|
|⇥ rank|string|XXX|true|所属职级|
|⇥ department|string|XXX|true|所属部门|

```python
{
	"code": 200,
	"msg": "查询成功",
	"data": [
		{
			"id": 1,
			"name": "鸣人",
			"account": "鸣人",
			"mobile": "15111111111",
			"state_time": "2022-08-28T17:13:00Z",
			"address": "北京",
			"birthday": "8",
			"sex": "男",
			"userstate": 3,
			"is_delete": false,
			"rank": "p1",
			"position": 1,
			"department": "财务部",
			"role": "管理者"
		}
	]
}
```



## 4.1.5	用户管理(修改)

> PUT  /home/reviseuser/id/
### 接口说明
> 修改一个用户信息
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|用户的id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|用户名称|
| account|string|XXX|true|账号|
| mobile|number|XXX|true|手机号|
| role|string|XXX|true|所属角色|
| rank|string|XXX|true|所属职级|
| department|string|XXX|true|所属部门|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|相应信息|
| data|object||true|获取一个用户信息|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|用户名称|
|⇥ account|string|XXX|true|账号|
|⇥ mobile|string|XXX|true|手机号|
|⇥ role|string|XXX|true|所属角色|
|⇥ rank|string|XXX|true|所属职级|
|⇥ department|string|XXX|true|所属部门|

```python
{
	"code": 200,
	"msg": "修改成功"
}
```



## 4.2	新增用户

> POST  /home/systemusers/
### 接口说明
> 新增用户
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| uname|string||true|用户名|
| username|string||true|账号|
| password|string||true|密码|
| rolename|string||true|角色名称|
| position|string||true|所属岗位|
| grade|string||true|所属职级|
| department|string||true|所属部门|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "添加成功成功"
}
```



## 4.3	权限管理

> GET  /home/permissions/
### 接口说明
> 获取所有员工的权限并在前端展示
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|int32|0|true|权限名|
| remark|string|0|true|备注|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|所属有员工权限信息|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|权限名称|
|⇥ remark|string|XXX|true|备注|


## 4.4	菜单管理

> GET  /home/menus/
### 接口说明
> 菜单搜索
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|菜单名称|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|搜索到的登录信息|
|⇥ name|string|XXX|true|菜单名称|
|⇥ menurl|string|XXX|true|菜单路径|
|⇥ menuorder|int32|0|true|排序(可以先不写)|
|⇥ menuimg|string|XXX|true|菜单图标|
|⇥ menutype|string|XXX|true|菜单类型|
|⇥menu_data|object|xxx|true|返回子菜单|
|⇥⇥ name|string|XXX|true|菜单名称|
|⇥⇥ menurl|string|XXX|true|菜单路径|
|⇥⇥ menuorder|int32|0|true|排序|
|⇥⇥ menuimg|string|XXX|true|菜单图标|
|⇥⇥ menutype|string|XXX|true|菜单类型|

```python
{
	"msg": "获取成功",
	"code": 200,
	"data": [
		{
			"id": 3,
			"name": "测试",
			"menurl": "///",
			"menuimg": "",
			"remark": "",
			"is_delete": false,
			"menu_id": null,
			"menu_data": [
				{
					"id": 18,
					"name": "测试",
					"menurl": "///",
					"menuimg": "",
					"remark": "",
					"is_delete": false,
					"menu_id": 3
				},
			]]
}
```



## 4.4.1	菜单管理/新增菜单

> POST  /home/menu/
### 接口说明
> 新增菜单
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| menutype|string|XXX|true|菜单类型（根据类型判断的层级）|
| name|string|XXX|true|菜单名称|
| menurl|string|XXX|true|菜单路径|
| menuimg|string|XXX|true|菜单图标|
| remark|string|XXX|true|备注|
| top |string||true|所属上级|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "成功"
}
```



## 4.4.2	菜单管理/获取单个菜单

> GET  /home/revisemenu/id/
### 接口说明
> 获取单个菜单信息
### 
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|菜单的id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|int32|0|true|菜单ID|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|相应信息|
| data|object||true|获取一个菜单信息|
|⇥ name|string|XXX|true|菜单名称|
|⇥ menurl|string|XXX|true|菜单路径|
|⇥ menuorder|int32|0|true|排序|
|⇥ menuimg|string|XXX|true|菜单图标|
|⇥ menutype|string|XXX|true|菜单类型|


## 4.4.3	菜单管理/修改菜单

> PUT  /home/revisemenu/id/
### 接口说明
> 修改单个菜单
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX| 菜单的id |
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| menutype|string|XXX|true|菜单类型|
| name|string|XXX|true|菜单名称|
| menurl|string|XXX|true|菜单路径|
| menuimg|string|XXX|true|菜单图标|
| remark|string|XXX|true|备注|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "修改成功"
}
```



## 4.4.4	菜单管理/删除菜单

> DELETE  /home/revisemenu/id/
### 接口说明
> 删除指定菜单
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 请求头(路由拼接的id的值)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|string||true|菜单id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "成功"
}
```

## 4.4.5	菜单管理/搜索

> GET  /home/search/
### 接口说明
> 菜单搜索
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|菜单名称|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|搜索到的登录信息|
|⇥ name|string|XXX|true|菜单名称|
|⇥ menurl|string|XXX|true|菜单路径|
|⇥ menuorder|int32|0|true|排序|
|⇥ menuimg|string|XXX|true|菜单图标|
|⇥ menutype|string|XXX|true|菜单类型|


## 4.5	职级管理

> GET  /home/ranks/
### 接口说明
> 获取所有职级信息
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|所有职级信息|
|⇥ id|string|0|true|职级ID|
|⇥ name|string|XXX|true|职级名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 1,
			"name": "p1",
			"rank_time": "2022-08-26T14:32:00Z",
			"remark": "",
			"is_delete": false
		},
		{
			"id": 2,
			"name": "p2",
			"rank_time": "2022-08-26T14:32:00Z",
			"remark": "",
			"is_delete": false
		},
	]
}
```



## 4.5.1	职级管理/新增职级

> POST  /home/ranks/
### 接口说明
> 增加职级
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| rankname|string|XXX|true|职级名称|
| rankremark|string|XXX|true|备注|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python

{
	"code": 200,
	"msg": "成功"
}
```



## 4.5.2	职级管理/获取单个职级

> GET  /home/reviserank/id/
### 接口说明
> 获取单个职级信息
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|菜单的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|object|XXX|true|相应信息|
| data|object||true|单个职级信息|
|⇥ name|string|XXX|true|职级名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 10,
			"name": "p10",
			"rank_time": "2022-08-26T14:32:00Z",
			"remark": "",
			"is_delete": false
		}
	]
}
```



## 4.5.3	职级管理/修改职级

> PUT  /home/reviserank/id/
### 接口说明
> 修改指定职级
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
| id       |XXX|职级的id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| rankname|string|XXX|true|职级名称|
| rankremark|string|XXX|true|备注|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "成功"
}
```



## 4.5.4级管理/删除职级

> DELETE  /home/reviserank/id/
### 接口说明
> 删除一个职级
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|职级的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "成功"
}
```



## 4.5.5	职级管理/搜索

> GET  /home/ranksearch/
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|职级名称|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|搜索到的登录信息|
|⇥ name|string|XXX|true|职级名称|
|⇥ remark|string|XXX|true|备注|


## 4.6	岗位管理

> GET  /home/managements/
### 接口说明
> 获取所有岗位信息
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|
| data|object|XXX|true|所有岗位信息|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|岗位名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 1,
			"position": 1,
			"positionname": "财务员工",
			"role": 1,
			"rolename": "管理者",
			"is_delete": false
		},
		{
			"id": 2,
			"position": 2,
			"positionname": "技术员工",
			"role": 3,
			"rolename": "执行者",
			"is_delete": false
		},
	]
}
```



## 4.6.1	新增岗位

> POST  /home/managements/
### 接口说明
> 新增岗位
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|登录的员工的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| mentname|string||true|岗位名称|
| mentremark|string||true|备注|
| rank |string||true| 职级     |
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "成功"
}
```



## 4.6.2	岗位管理/获取单个岗位

> GET  /home/resivement/id/
### 接口说明
> 获取单个岗位信息
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|岗位管理的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|object|XXX|true|相应信息|
| data|object||true|单个岗位信息|
|⇥ id|int32|0|true|岗位ID|
|⇥ name|string|XXX|true|岗位名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 1,
			"position": 1,
			"positionname": "财务员工",
			"role": 1,
			"rolename": "管理者",
			"is_delete": false
		}
	]
}
```



## 4.6.3	修改岗位

> PUT  /home/resivement/id/
### 接口说明
> 修改一个岗位信息
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|岗位的id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| mentname|string|XXX|true|岗位名称|
| mentremark|string|XXX|true|备注|
| rank |string||true|所属职级|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "成功"
}
```



## 4.6.4	删除岗位

> DELETE  /home/resivement/id/
### 接口说明
> 删除指定岗位
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|岗位的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应数据|

```python
{
	"code": 200,
	"msg": "成功"
}
```



## 4.6.5	岗位管理/搜索

> GET  /home/jobsearch/
### 接口说明
> 岗位搜索
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|岗位名称|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|搜索到的登录信息|
|⇥ id|int32|0|true|岗位ID|
|⇥ name|string|XXX|true|岗位名称|
|⇥ remark|string|XXX|true|备注|


## 4.7	部门管理

> GET  /home/departments/
### 接口说明
> 获取所有部门
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|获取到的所有部门信息|
|⇥ name|string|XXX|true|部门名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 1,
			"name": "财务部",
			"department_time": "2022-08-25T14:21:00Z",
			"remark": "",
			"is_delete": false,
			"level": null,
			"department": []
		},
		{
			"id": 2,
			"name": "技术部",
			"department_time": "2022-08-25T14:21:00Z",
			"remark": "",
			"is_delete": false,
			"level": null,
			"department": [
				{
					"id": 8,
					"name": "测试部门",
					"department_time": "2022-08-30T09:19:18.384272Z",
					"remark": "",
					"is_delete": false,
					"level": 2
				}
			]
		},
	]
}
```



## 4.7.1	部门管理/获取单个部门

> GET  /home/resivesector/id/
### 接口说明
> 获取单个部门信息用于修改
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|部门的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|object|XXX|true|相应信息|
| data|object||true|单个部门信息|
|⇥ name|string|XXX|true|部门名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 1,
			"name": "财务部",
			"department_time": "2022-08-25T14:21:00Z",
			"remark": "",
			"is_delete": false,
			"level": null
		}
	]
}
```



## 4.7.2	修改部门

> PUT  /home/resivesector/id/
### 接口说明
> 修改一个部门信息
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|部门的id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|部门名称|
| Level|string|null|true|层级|
| remark|string|null|true|备注|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|

```
{
	"code": 200,
	"msg": "成功"
}
```



## 4.7.3	新增部门

> POST  /home/departments/
### 接口说明
> 新增部门
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|部门名称|
| Level|string|null|true|层级（第几级别）|
| remark|string|null|true|备注|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|

```
{
	"code": 200,
	"msg": "成功"
}
```



## 4.7.4	删除部门

> DELETE  /home/resivesector/id/
### 接口说明
> 删除一个部门
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|部门的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|

```
{
	"code": 200,
	"msg": "成功"
}
```



## 4.7.5	部门管理(搜索)

> GET  /home/departmentsearch/
### 接口说明
> 搜索部门
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|部门名称|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|部门搜索数据|
|⇥ name|string|XXX|true|部门名称|
|⇥ remark|string|XXX|true|部门|


## 4.8	角色管理

> GET  /home/roles/
### 接口说明
> 获取所有角色信息
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|所有角色信息|
|⇥ id|int32|0|true|ID|
|⇥ rolename|string|XXX|true|角色名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 1,
			"rolename": "管理者",
			"role_time": "2022-08-28T16:03:00Z",
			"remark": "",
			"is_delete": false
		},
		{
			"id": 2,
			"rolename": "财务部管理者",
			"role_time": "2022-08-28T16:03:00Z",
			"remark": "",
			"is_delete": false
		},
	]
}
```



## 4.8.1	角色管理/获取单个角色

> GET  /home/reviserole/id/
### 接口说明
> 获取单个角色信息
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|角色的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|object|XXX|true|相应信息|
| data|object||true|单个角色信息|
|⇥ id|string|XXX|true|角色ID|
|⇥ rolename|string||true|角色名称|
|⇥ remark|string|XXX|true|备注|

```
{
	"code": 200,
	"msg": "获取成功",
	"data": [
		{
			"id": 1,
			"rolename": "管理者",
			"role_time": "2022-08-28T16:03:00Z",
			"remark": "",
			"is_delete": false
		}
	]
}
```



## 4.8.2	角色管理/修改角色

> PUT  /home/reviserole/id/
### 接口说明
> 修改一个角色
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| rolename|string|XXX|true|角色名称|
| remark|string|null|true|备注|
| permission |string||true|所属权限|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|响应信息|

```
{
	"code": 200,
	"msg": "成功"
}
```



## 4.8.3	角色管理/删除角色

> DELETE  /home/reviserole/id/
### 接口说明
> 删除一个角色
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|角色的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|响应信息|

```
{
	"code": 200,
	"msg": "成功"
}
```



## 4.8.4	角色管理/新增角色

> POST  /home/roles/
### 接口说明
> 新增一个角色
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| rolename|string|XXX|true|角色名称|
| remark|string|null|true|备注|
| permission |string||true|所属权限|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|响应信息|

```
{
	"code": 200,
	"msg": "成功"
}
```



## 4.8.5	角色管理/搜索角色

> GET  /home/rolesearch/
### 接口说明
> 搜索一个角色
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| rolename|string|XXX|true|角色名称|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|object|XXX|true|响应信息|
| data|object||true|角色信息|
|⇥ id|int32|0|true|ID|
|⇥ rolename|string|XXX|true|角色名称|
|⇥ remark|string|XXX|true|备注|


## 5	配置工作流

## 5.1	审批类型

> GET  /workflow/vettings/
### 接口说明
> 获取审批类型
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|审批类型|
|⇥ id|int32|0|true|ID|
|⇥ nametype|string|XXX|true|类型名称|
|⇥ reviselast|int32|0|true|最后修改的人|
|⇥ revisetimelast|string|00:00:00|true|最后修改时间|


## 5.1.1	增加审批类型

> POST  /workflow/vettings/
### 接口说明
> 增加审批类型
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|类型名称|
| lastrevisename|int32|0|true|最后修改人|
| lastrevisetime|string|00:00:00|true|最后修改时间|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 5.1.2	修改审批类型

> PUT  /workflow/revivetting/id/
### 接口说明
> 修改一个审批类型
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|审批类型id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|类型名称|
| lastrevisename|string|XXX|true|最后修改人|
| lastrevisetime|string|XXX|true|最后修改时间|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 5.1.3	删除审批类型

> DELETE  /workflow/revivetting/id/
### 接口说明
> 删除一个审批类型
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|审批类型id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|int32|0|true|审批类型ID|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 5.1.4	获取单个审批类型

> GET  /workflow/revivetting/id/
### 接口说明
> 获取指定审批类型
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|审批类型id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|object|XXX|true|相应信息|
| data|object||true|单个审批类型信息|
|⇥ id|string|XXX|true|流程ID|
|⇥ name|string|XXX|true|流程名称|
|⇥ rovalstatus|string|XXX|true|状态|
|⇥ reviselast|string|XXX|true|最后修改的人|
|⇥ revisetimelast|string||true|最后修改时间|


## 5.2	审批流程

> GET  /workflow/approvals/
### 接口说明
> 获取所有审批流程
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|获取所有审批流程|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|流程名称|
|⇥ rovalstatus|int32|0|true|状态|
|⇥ reviselast|int32|0|true|最后修改的人|
|⇥ revisetimelast|string|00:00:00|true|最后修改时间|


## 5.2.1	添加审批流程

> POST  /workflow/approvals/
### 接口说明
> 新增一个审批流程
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|流程名称|
| state|int32|0|true|流程状态|
| lastrevisename|int32|0|true|最后修改人|
| lastrevisetime|string|00:00:00|true|最后修改时间|
| levels |string|null|true|审批流程|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 5.2.2	修改审批流程

> PUT  /workflow/reviseroval/id/
### 接口说明
> 修改一个审批流程
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|审批流程id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|流程名称|
| state|string|XXX|true|流程状态|
| lastrevisename|string|XXX|true|最后修改人|
| lastrevisetime|string|00:00:00|true|最后修改时间|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 5.2.3	删除审批流程

> DELETE  /workflow/reviseroval/id/
### 接口说明
> 删除一个审批流程
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|审批流程的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 5.2.4	获取单个审批流程

> GET  /workflow/reviseroval/id/
### 接口说明
> 获取单个流程
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|审批流程的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|单个流程信息|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|流程名|
|⇥ rovalstatus|string|XXX|true|状态|
|⇥ reviselast|string|XXX|true|最后修改人|
|⇥ revisetimelast|string|00:00:00|true|最后修改时间|


## 5.3	材料管理

## 5.3.1	新增材料

> POST  /workflow/newmaterial/
### 接口说明
> 新增材料
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| materialname|string|XXX|true|材料名称|
| materialurl|string|XXX|true|材料地址|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 6	企业通信

## 6.1	发送邮件

> POST  /mail/sendermail/
### 接口说明
> 发送邮件
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| senderadder|string|XXX|true|发送地址|
| sendername|int32|0|true|抄送人|
| sendertitle|string|XXX|true|发送标题|
| sendercontent|string|XXX|true|发送内容|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 6.2	收件箱

> GET  /mail/receivermails/
### 接口说明
> 接收邮件
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|接收所有邮件|
|⇥ sendmail|int32|0|true|发邮件人|
|⇥ mailtitle|string|XXX|true|邮件标题|
|⇥ mailcontent|string|XXX|true|邮件内容|


## 7	工资条

## 7.1	工资条

> GET  /mail/payslips/
### 接口说明
> 工资条录入
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|工资条|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|姓名|
|⇥ attendance|int32|0|true|出勤|
|⇥ absenteeism|int32|0|true|旷工|
|⇥ leave|int32|0|true|请假|
|⇥ basesalary|string|XXX|true|基本工资|
|⇥ postsalary|string|XXX|true|岗位工资|


## 7.1.1	删除工资条

> DELETE  /mail/removemail/id/
### 接口说明
> 删除工资条
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|工资条的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 7.1.2	获取单个工资条

> GET  /mail/removemail/id/
### 接口说明
> 获取单个工资条
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|工资条id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|工资条|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|姓名|
|⇥ attendance|int32|0|true|出勤|
|⇥ absenteeism|int32|0|true|旷工|
|⇥ leave|int32|0|true|请假|
|⇥ basesalary|string|XXX|true|基本工资|
|⇥ postsalary|string|XXX|true|岗位工资|


## 7.1.3	修改工资条

> PUT  /mail/removemail/id/
### 接口说明
> 修改一个工资条
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|工资条id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|姓名|
| attendance|int32|0|true|出勤|
| absenteeism|int32|0|true|旷工|
| leave|int32|0|true|请假|
| basesalary|string|6000|true|基本工资|
| postsalary|string|2000|true|岗位工资|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 7.1.4	新增工资条

> POST  /mail/payslips/
### 接口说明
> 新增工资条
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|int32|0|true|姓名|
| attendance|string|30|true|出勤|
| absenteeism|string|0|true|旷工|
| leave|string|0|true|请假|
| basesalary|string|6000|true|基本工资|
| postsalary|string|2000|true|岗位工资|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 7.1.5	工资条搜索

> GET  /mail/wagesearch/
### 接口说明
> 工资搜索
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string|XXX|true|姓名|
| account|string|XXX|true|账号|
| mobile|string|XXX|true|手机号|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object||true|工资|
|⇥ id|int32|0|true|ID|
|⇥ name|string|XXX|true|姓名|
|⇥ attendance|int32|0|true|出勤|
|⇥ absenteeism|int32|0|true|旷工|
|⇥ leave|int32|0|true|请假|
|⇥ basesalary|string|XXX|true|基本工资|
|⇥ postsalary|string|XXX|true|岗位工资|


## 8	OA审批

## 8.1	待办事项

> GET  /mail/todos/
### 接口说明
> 获取所有待办事项
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|所有待办事项|
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批类型|
|⇥ vettime|string|00:00:00|true|审批时间|
|⇥ currentvetting|int32|null|true|当前审批人|
|⇥ vettstatus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.1.1	待办事项(搜索)

> GET  /home/todosearch/
### 接口说明
> 待办事项搜索
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| vettype|string|null|true|审批类型|
| name|string|null|true|申请人|
| vettstatus|string|null|true|审批状态|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true||
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批类型|
|⇥ vettime|string|XXX|true|申请时间|
|⇥ currentvetting|int32|null|true|当前审批人|
|⇥ vettstatus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.1.2	待办事项(通过)

> PUT  /mail/through/1/
### 接口说明
> 待办事项审批--通过
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|需要通过的id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|string|0|true|待办事项ID|
| reason|string|XXX|true|通过理由|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 8.1.3	待办事项(驳回)

> DELETE  /mail/disallowed/1/
### 接口说明
> 待办事项驳回
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|驳回的id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|string|0|true|待办事项ID|
| reason|string|XXX|true|驳回理由|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 8.1.4	待办事项(详情)

> GET  /mail/detail/1/
### 接口说明
> 待办事项详情
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|待办事项id|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|string|0|true|待办事项ID|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|待办事项详情|
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批状态|
|⇥ vettime|string|00:00:00|true|申请时间|
|⇥ currentvetting|int32|null|true|当前审批人|
|⇥ vettstatus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.2	已办事项

> GET  /mail/dones/
### 接口说明
> 获取所有已办事项
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|待办事项详情|
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批类型|
|⇥ vettime|string|00:00:00|true|申请时间|
|⇥ currentvetting|int32|0|true|当前审批人|
|⇥ vetstaus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.2.1	已办事项(详情)

> GET  /mail/donedetail/1/
### 接口说明
> 获取指定待办事项详情
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|已办事项id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|待办事项详情|
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批类型|
|⇥ vettime|string|00:00:00|true|审批时间|
|⇥ currentvetting|int32|0|true|当前审批人|
|⇥ vetstatus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.2.2	已办事项(搜索)

> GET  /mail/donesearch/
### 接口说明
> 已办事项搜索
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| vettype|int32|null|true|审批类型|
| name|int32|null|true|申请人|
| vettstatus|int32|null|true|审批状态|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true||
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批类型|
|⇥ vettime|string|XXX|true|申请时间|
|⇥ currentvetting|int32|0|true|当前审批人|
|⇥ vettstatus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.3	我发起的

> GET  /mail/initiations/
### 接口说明
> 获取所有我发起的事项
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|用户id（也可以是token）|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|待办事项详情|
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批类型|
|⇥ vettime|string|00:00:00|true|申请时间|
|⇥ currentvetting|int32|null|true|当前审批人|
|⇥ vettstatus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.3.1	我发起的(申请)

> POST  /mail/initiations/
### 接口说明
> 发起申请
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|用户的id（也可以是token）|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|int32|0|true|申请人|
| approvaltype|int32|0|true|申请类型|
| applicationtime|string|00：00：00|true|申请时间|
| approver|int32|null|true|当前审批人|
| approvalstatus|int32|0|true|审批状态|
| sector|int32|0|true|所属部门|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 8.3.2	我发起的(详情)

> GET  /mail/details/1/
### 接口说明
> 获取我发起的详情
### 请求头(路由拼接的id的值)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|需要查看的内容的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|
| data|object|XXX|true|详情信息|
|⇥ id|int32|0|true|ID|
|⇥ name|int32|0|true|申请人|
|⇥ vettype|int32|0|true|审批类型|
|⇥ vettime|string|00:00:00|true|审批时间|
|⇥ currentvetting|int32|null|true|当前审批人|
|⇥ vettsatus|int32|0|true|审批状态|
|⇥ department|int32|0|true|所属部门|


## 8.3.3	我发起的(撤回)

> DELETE  /mail/withdraw/1/
### 接口说明
> 撤回一条申请
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|XXX|需要撤回的id|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 9	模板

## 9.1	请假模板

> POST  /workflow/leave/
### 接口说明
> 请假模板
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| leavetime|string|00:00:00|true|请假时间|
| leavecause|string|null|true|请假原因|
| leavecause|int32|0|true|请假模板|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 9.2	借款模板

> POST  /workflow/loan/
### 接口说明
> 借款模板
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| loantime|string|00:00:00|true|借款时间|
| loancause|string|null|true|借款原因|
| loancause|int64|0|true|借款金额|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 9.3	出差模板

> POST  /workflow/travel/
### 接口说明
> 出差模板
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| traveltime|string|00:00:00|true|出差时间|
| destination|string||true|目的地|
| travelcause|string|null|true|出差原因|
| travelentourage|int64|0|true|同行人|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 9.4	转正模板

> POST  /workflow/positive/
### 接口说明
> 转正模板
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| Positivetime|string|00:00:00|true|转正时间|
| appraisal|string|XXX|true|自我评价|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 9.5	用车模板

> POST  /workflow/bycar/
### 接口说明
> 用车模板
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| bycartime|string|00:00:00|true|转正时间|
| bycarstart|string|XXX|true|用车起始地|
| bycardestination|string|XXX|true|用车目的地|
| bycartype|int32|0|true|用车类型|
| bycarcode|int32|0|true|用车号牌|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|


## 9.6	报销模板

> POST  /workflow/reimbursement/
### 接口说明
> 报销模板
### 请求头
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|token|XXX|用户登录后的token|
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| reimbursedsum|int64|0|true|报销金额|
| reimbursedreason|string|XXX|true|报销事由|
| materials|string|XXX|true|材料上传|
### 响应体
● 200: OK 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|string|200|true|状态码|
| msg|string|XXX|true|响应信息|

