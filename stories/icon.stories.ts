import { html } from 'lit-html'
import Icon from 'poc/icon'
import { buildAndRegisterCustomElement } from './utils'

buildAndRegisterCustomElement('poc-icon', Icon)

const sizeOptions = ['medium', 'small', 'large']
const iconOptions = ['building', 'location']

export default {
  title: 'Example/Icon',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions,
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: iconOptions,
      },
    },
  },
}

const Template = ({ size = sizeOptions[0], iconName = iconOptions[0] }) => html`
  <poc-icon size="${size}" icon-name="${iconName}"></poc-icon>
`

export const Base = Template.bind({})
