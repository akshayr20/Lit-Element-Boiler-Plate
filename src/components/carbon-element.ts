import { html, LitElement, customElement } from "lit-element";
const { Modal } = require("carbon-components");

@customElement("carbon-modal")
export default class HelloElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback");
  }

  firstUpdated() {
    const modalElement = this.renderRoot.firstElementChild;
    console.log("firstUpdated", modalElement);

    const modalInstance = Modal.create(modalElement);

    setTimeout(() => {
      modalInstance.show();
      console.log("here");
    }, 2000);
  }

  render() {
    console.log("render");

    return html`
      <div
        data-modal
        id="my-modal"
        class="bx--modal "
        role="dialog"
        aria-modal="true"
        aria-labelledby="my-modal-label"
        aria-describedby="my-modal-heading"
        tabindex="-1"
      >
        <div class="bx--modal-container">
          <div class="bx--modal-header">
            <p
              class="bx--modal-header__heading bx--type-beta"
              id="my-modal-heading"
            >
              Modal heading
            </p>
            <button
              class="bx--modal-close"
              type="button"
              data-modal-close
              aria-label="close modal"
            >
              (The close button image)
            </button>
          </div>
          <div class="bx--modal-content">
            <label for="my-text-input" class="bx--label"
              >Text Input label</label
            >
            <input
              id="my-text-input"
              type="text"
              class="bx--text-input"
              placeholder="Optional placeholder text"
              data-modal-primary-focus
            />
          </div>
        </div>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
