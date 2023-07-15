import { LitElement, html, css } from 'lit';

export class Titulologo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<slot>OLá mundo</slot>`;
    }
}
customElements.define('app-titulologo', Titulologo);
