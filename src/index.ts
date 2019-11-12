import "./components/hello";
import "./components/carbon-element";

import { customElement, LitElement, html } from "lit-element";

@customElement("root-el")
export class RootElement extends LitElement {
  render() {
    return html`
      <carbon-modal></carbon-modal>
    `;
  }
}
