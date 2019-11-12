import { html, LitElement, customElement, property, css } from "lit-element";

@customElement("hello-element")
export default class HelloElement extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-family: sans-serif;
        color: orange;
      }
    `;
  }

  @property({ type: String })
  name = "lit-element";

  render() {
    return html`
      <h1>You are Awesome ${this.name}</h1>
    `;
  }
}
