import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<p>Lilika Bolos e Doces</p>`;
    }
}
customElements.define('app-home-page', HomePage);
