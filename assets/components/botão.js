import { LitElement, html, css } from 'lit';

export class BotãO extends LitElement {
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
customElements.define('app-botão', BotãO);
