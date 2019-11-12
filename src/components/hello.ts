import { html, LitElement, customElement, property, css } from "lit-element";

@customElement("hello-element")
export default class HelloElement extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-family: sans-serif;
        color: orange;
      }
      h3 {
        font-family: serif;
        color: red;
      }
    `;
  }

  @property({ type: String })
  name = "lit-element";

  render() {
    return html`
      <h1>Hello ${this.name}</h1>
    `;
  }
}
