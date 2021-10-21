import { html } from 'lit-html'
import Button from 'poc/button'
import { buildAndRegisterCustomElement } from './utils'

buildAndRegisterCustomElement('poc-button', Button)

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
}

const Template = ({ primary, label, backgroundColor, size }) => html`
  <poc-button
    background-color="${backgroundColor}"
    label="${label}"
    primary="${primary}"
    size="${size || ''}"
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
