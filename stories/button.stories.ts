import { html } from 'lit-html'
import Button from 'poc/button'

function buildAndRegisterCustomElement(elementName, elementClass) {
  if (!customElements.get(elementName)) {
    const customElement = elementClass.CustomElementConstructor
    customElements.define(elementName, customElement)
  }
}

buildAndRegisterCustomElement('poc-button', Button)

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

const Template = ({ primary, label, backgroundColor, size }) => html`
  <poc-button
    background-color="${backgroundColor}"
    label="${label}"
    primary="${primary}"
    size=${size || ''}
  ></poc-button>
`

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
