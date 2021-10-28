import { LightningElement, api } from 'lwc'

const MOCK = {
  login: 'bcaloaltimetrik',
  id: 38947479,
  node_id: 'MDQ6VXNlcjM4OTQ3NDc5',
  avatarUrl: 'https://avatars.githubusercontent.com/u/38947479?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/bcaloaltimetrik',
  htmlUrl: 'https://github.com/bcaloaltimetrik',
  followers_url: 'https://api.github.com/users/bcaloaltimetrik/followers',
  following_url:
    'https://api.github.com/users/bcaloaltimetrik/following{/other_user}',
  gists_url: 'https://api.github.com/users/bcaloaltimetrik/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/bcaloaltimetrik/starred{/owner}{/repo}',
  subscriptions_url:
    'https://api.github.com/users/bcaloaltimetrik/subscriptions',
  organizations_url: 'https://api.github.com/users/bcaloaltimetrik/orgs',
  repos_url: 'https://api.github.com/users/bcaloaltimetrik/repos',
  events_url: 'https://api.github.com/users/bcaloaltimetrik/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/bcaloaltimetrik/received_events',
  type: 'User',
  site_admin: false,
  name: 'Brahian Calo',
  company: 'Altimetrik',
  blog: '',
  location: 'Uruguay',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 2,
  following: 1,
  created_at: '2018-05-03T12:21:36Z',
  updated_at: '2021-10-21T12:55:15Z',
}

export default class GithubCard extends LightningElement {
  @api username

  private data = MOCK
}
