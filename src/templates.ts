import { html, render } from 'lit'

export function renderHello(mount: HTMLElement, name: string) {
  const view = html`
    <p>
      こんにちは、<strong>${name}</strong>さん！
      <button @click=${() => alert('Hello from lit-html style!')}>Say Hi</button>
    </p>
  `

  render(view, mount)
}

/**
 * よく使うディレクティブ例（必要に応じて import）
 *  - classMap:     動的に class を組み立てる
 *  - styleMap:     style オブジェクトを直接バインド
 *  - ifDefined:    undefined のとき属性を外す
 *  - when:         条件分岐テンプレ
 */
// import { classMap } from 'lit/directives/class-map.js';
// import { styleMap } from 'lit/directives/style-map.js';
// import { ifDefined } from 'lit/directives/if-defined.js';
// import { when } from 'lit/directives/when.js';
