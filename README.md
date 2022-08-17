---
title: 生成静态html和html导出保存
date: 2021-10-20
tags:
  - html
  - 导出
  - export
  - fileSaver
  - html2canvas
author: denglw
---

## 生成静态html和html导出保存
-----------------------------------

当浏览器的ctrl+s保存单页应用显示效果不佳时使用此方法。

### 引入依赖
```js
import html2canvas from 'html2canvas'
import FileSaver from "FileSaver"
import htmlOuter from "htmlOuter";
```
>html2canvas—— 页面中可视化及非文字模块生成图片的插件。

>FileSaver—— 文件下载插件。

>htmlOuter—— 生成html的工具。

### htmlOuter的基本使用方式

htmlOuter可以按指令和插入的数据生成新的静态页面，保证下载之后的显示效果。


```js

    //生成将某节点转换为图片并生成html下载的演示

 html2canvas(document.querySelector("#bvd")).then(canvas => {
        canvas.id = "canvas";
        let dataURL = canvas.toDataURL("image/png");
        let  tmpUrl = "data:application/octet-stream;base64" + dataURL;

        let outer = new htmlOuter();
            outer.appendImage(tmpUrl,'2323')
        let html = outer.outHtml('测试')


        let blob = new Blob([html])
        FileSaver.saveAs(blob,'tt.html')
      });
```
### html2canvas 截取带滚动轴的页面

```
html2canvas(domSelector,{
        height: 5000, //自定义高度
        windowHeight: 5000
})
```
** 不加高度属性截图显示不全

### htmlOuter的可用方法

#### 初始化outer
```
let outer = new htmlOuter();

```
#### outer.appendList(dataList,itemTitle)-插入列表

数据格式为 {key:value,key2:value2}

|参数|参数描述|类型|
|----|----|----|
|dataList|列表数据|Object|
|itemTitle|单元标题|String|


####  outer.appendTable(columns, dataList, itemTitle)-插入表格

数据格式同iview的columns和data

|参数|参数描述|类型|
|----|----|----|
|columns|表头数据|Array|
|dataList|表格数据|Array|
|itemTitle|单元标题|String|

####  插入图片 outer.appendImage(imgUrl,itemTitle)

|参数|参数描述|类型|
|----|----|----|
|imgUrl|图片路径|String dataUrl|
|itemTitle|单元标题|String|

####  插入自定义html outer.appendHtml(html,itemTitle)

|参数|参数描述|类型|
|----|----|----|
|html|自定义html|String|
|itemTitle|单元标题|String|

####  最后生成 outer.outHtml(title = 'create-html')

|参数|参数描述|类型|
|----|----|----|
|title|html标题|String|

### 插件下载
▼[FileSaver.js](/download/js/FileSaver.js)

▼[htmlOuter.js](/download/js/htmlOuter.js)



```
"html2canvas": "^1.3.2"
$npm install html2canvas --save
```
