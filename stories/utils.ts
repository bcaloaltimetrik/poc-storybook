export function buildAndRegisterCustomElement(elementName, elementClass) {
  if (!customElements.get(elementName)) {
    const customElement = elementClass.CustomElementConstructor
    customElements.define(elementName, customElement)
  }
}
