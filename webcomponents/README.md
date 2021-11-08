# Web Components

### 构成:

- Custom elements(自定义元素)：允许定义 custom elements 及其行为
- Shadow Dom(影子 DOM)：将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联功能，通过这种方式，可以保持元素的功能私有，这样它们就可以被脚本化和样式化，不会与文档中其他部分发生冲突
- HTML templates：template 和 slot 元素可以编写不在呈现页面中显示的标记模板，它们可以作为自定义元素结构的基础被多次重用

### 实现基本方法：

1. 创建一个类或者函数来指定 web 组件功能
2. 使用 CustomElementRegistry.define() 方法注册新自定义元素，并向其传递要定义的元素名称（必须要有短横线）、指定元素功能的类、以及可选的其所继承的元素(一个包含 extends 属性的配置对象，可以继承任何内置元素)
3. 使用 Element.attachShadow()方法将一个 shadow DOM 附加到自定义元素上。使用通用的 DOM 方法向 shadow DOM 中添加子元素、事件监听器等
4. 使用 template 和 slot 定义一个 HTML 模板。再次使用常规 DOM 方法克隆模板并将其附加到 shadow DOM 中
5. 使用自定义元素

### 生命周期

在构造函数中，可以设定一些生命周期的回调函数，在特定的时间，这些回调函数会被调用

- connectedCallback: 当 custom element 首次被插入文档 DOM 时
- disconnectedCallback: 删除时调用
- adoptedCallback: 被移动到新的文档时调用
- attributeChangedCallback: 当 custom element 增加、删除、修改自身属性时，被调用
