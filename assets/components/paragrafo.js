import { LitElement, html, css } from 'lit';

export class Paragrafo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('app-paragrafo', Paragrafo);
