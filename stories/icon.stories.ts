import { html } from 'lit-html'
import Icon from 'poc/icon'
import { buildAndRegisterCustomElement } from './utils'

buildAndRegisterCustomElement('poc-icon', Icon)

export default {
  title: 'Example/Icon',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
}

const Template = ({ size }) => html` <poc-icon></poc-icon> `

export const Base = Template.bind({})
