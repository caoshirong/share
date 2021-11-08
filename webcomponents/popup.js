// 自主定制元素
// 为元素创建类
class PopUpInfo extends HTMLElement {
  constructor() {
    //必须调用super
    super(); 
    // 创建shadow root
    const shadowRoot = this.attachShadow({mode: 'open'});
    // 创建内部元素
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);
    const info = document.createElement('span');
    info.setAttribute('class', 'info')
    // 获取自定元素内容并填充
    const text = this.getAttribute('text');
    info.textContent = text;

    // 插入图标
    let imgUrl;
    imgUrl = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png'
    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // 创建style
    const style = document.createElement('style');
    style.textContent = `
      .wrapper{position:relative}
      .info{
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // 将创建的元素挂载到shadow dom
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// 定义元素
customElements.define('popup-info', PopUpInfo);