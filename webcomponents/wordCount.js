// 自定义内置元素
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
    const wcParent = this.parentNode;
    function countWords(node) {
      let text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    const count = `words: ${countWords(wcParent)}`

    const shadow = this.attachShadow({mode: 'open'});

    const text = document.createElement('span');
    text.textContent = count;

    shadow.appendChild(text);

  }
}

customElements.define('word-count', WordCount, {extends: 'p'})