# SPA-admin
- - -

SPA-admin 旨在打造一款规范、低代码、低配置、使用简单、高效、高性能的管理系统

## 项目规约
- - -

### 1、命名

* 文件夹以及文件命名：中划线命名, 例如：use-user-sign-in
* typescript/javascript命名参照语法规定
* 组件命名：Pascal, 前缀：Lc, 例如：LcSignIn
* class命名：BEM, 前缀：lc, 例如：lc-sign-in-form、lc-sign-in-form__body

备注：
1. lc: low code, low configuration
2. [BEM](https://en.bem.info/)

### 2、目录

---src
------apis // 请求接口地址
------assets // 静态资源
---------images // 图片
------common // 公共
---------scss // 全局（公共）样式
---------plugins // 第三方插件（axios、i18n等）
------components // 全局组件
------config // 配置
------directives // 指令
------layout // 布局组件
------locales // 国际化
------pages // 页面（一个路由等于一个页面）
------router // 路由
------services // 纯业务不涉及视图（数据请求、复杂业务处理等）
------store // 全局通信
------utils // 工具类

## 启动
- - -

```shell
// 本地开发
npm run dev
// 构建
npm run build
```

## git
- - -

```shell
// 暂存修改文件
git add .
// 提交前进行eslint检查、统一git commit 格式
git cz
```

## 国际化
- - -

* 词条统一配置在locales/{lang}.json: en-us: 英语;zh-cn: 中文
* 全局template中使用：$t(`${entryKey}`)

## utils
- - -

* http: 请求数据统一工具
* ui: 统一动态UI工具
  
## element-plus
- - -

按需加载引入：
```typescript
import { ElInput } from 'element-plus';
export default defineComponent({
  components: {
    ElInput
  }
})
```
```html
<el-input v-model="password"
          placeholder="请输入确认密码"></el-input>
```
