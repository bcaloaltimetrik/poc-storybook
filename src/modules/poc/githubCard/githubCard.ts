import { LightningElement, api } from 'lwc'
import { getUser, GithubUser } from 'services/githubUser'
import { debounce } from 'utils/debounce'

export default class GithubCard extends LightningElement {
  private _username: string
  private data: GithubUser
  private processChange

  constructor() {
    super()
    this.processChange = debounce(() => this.fetchUserData())
  }

  @api
  get username(): string {
    return this._username
  }

  set username(value: string) {
    this._username = value
    this.processChange()
  }

  get renderCard() {
    return this.username && this.data
  }

  async fetchUserData() {
    try {
      this.data = await getUser(this._username)
    } catch (error) {
      console.log(error)
      this.data = null
    }
  }
}
