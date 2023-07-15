import { LitElement, html, css } from "lit";

export class Titulologo extends LitElement {
  static styles = [
    css`
      :host {
        color: #fff;
        font-family: Inria Serif;
        font-size: 11px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        width: 363px;
        height: 640px;
      }
    `,
  ];

  render() {
    return html`<slot>OLá mundo</slot>`;
  }
}
customElements.define("app-titulologo", Titulologo);
