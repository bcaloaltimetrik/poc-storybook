import { html } from 'lit-html'
import GithubCard from 'poc/githubCard'
import { buildAndRegisterCustomElement } from './utils'

buildAndRegisterCustomElement('poc-github-card', GithubCard)

export default {
  title: 'Example/GithubCard',
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
  },
}

const Template = ({ username }) => html`
  <poc-github-card username="${username}"></poc-github-card>
`

export const Base = Template.bind({})
Base.args = {
  username: 'bcaloaltimetrik',
}
