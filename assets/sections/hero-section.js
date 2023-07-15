import { LitElement, html, css } from "lit";

export class HeroSection extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <div></div>
      <section>
     <app-titulologo>Lilika Bolos e Doces</app-titulologo>
     <app-logo></app-logo>
     

      

    `;
  }
}
customElements.define("hero-section", HeroSection);
