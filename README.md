## 列表图无缝滚动

多用于往期回顾等图片列表之类的。

##### 效果图（[点击预览完整页面](https://vitaxu.github.io/tabBar/ "点击预览")）

![](http://i.imgur.com/AqdAwsm.gif)

### 依赖

依赖jQuery。

### 用法

##### html结构
 
```html
<div class="list" id="rList">
	<a class="prev" id="rPrev"><span title="上一页"></span></a>
	<a class="next" id="rNext"><span title="下一页"></span></a>
	<ul>
  		<li></li><li></li><li></li><li></li>
	</ul>
</div>
```
外部用一个元素包裹图片列表和切换按钮，这个元素必须定义一个id值。
按钮可以使用任意`html`标签，但是图片列表必须使用`ul>li`的结构。

##### js调用

`tabBar({wrap: "rList", num: 6, prevBtn: "rPrev", nextBtn: "rNext"});`


参数说明：

* wrap: 必填，外部包裹元素`id`
* num: 必填，可视区域内显示几张图片（用于判断图片列表数量是否足够多，是否需要滚动）
* prevBtn: 必填，切换到上一张的按钮`id`
* nextBtn: 必填，切换到下一张的按钮`id`

**同一个页面中可以存在多个滚动列表，只需要设置不同的id即可。**
