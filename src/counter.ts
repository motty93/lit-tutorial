import { css, html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('my-counter')
export class MyCounter extends LitElement {
  static styles = css`
    :host { display: inline-block; font-family: system-ui, sans-serif; }
    .box {
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 16px;
      min-width: 280px;
    }
    button {
      margin-right: 8px;
      padding: 6px 10px;
      border-radius: 8px;
      border: 1px solid #ccc;
      cursor: pointer;
      background: white;
    }
    button:hover { background: #f8f8f8; }
    .count { font-size: 24px; font-weight: 700; margin: 8px 0; }
  `

  // 外部属性と連携させたいなら@propertyを使う
  @property({ type: Number }) step = 1

  // 内部状態は@stateで再レンダリング対象
  @state() private count = 0

  private inc = () => {
    this.count += this.step
  }
  private dec = () => {
    this.count -= this.step
  }
  private reset = () => {
    this.count = 0
  }

  render() {
    return html`
    <div class="box">
      <div class="count">coutn: ${this.count}</div>
      <div>
        <button @click=${this.inc}>+${this.step}</button>
        <button @click=${this.dec}>-${this.step}</button>
        <button @click=${this.reset}>reset</button>
      </div>

      <p style="margin-top:12px;color:#666;">
        属性連動デモ → <code>&lt;my-counter step="5"&gt;</code> のように置くと
        ボタンが ±5 ずつ動きます。
      </p>
      <slot></slot>
    </div>
    `
  }
}

export default MyCounter
