import { LitElement, html, css } from "lit";

export class Logo extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        width: 72px;
        height: 75px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        
      }
    `,
  ];

  render() {
    return html` <img src="assets/public/logolilika.png" alt="Minha Logo" />; `;
  }
}
customElements.define("app-logo", Logo);
