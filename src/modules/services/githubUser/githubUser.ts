const BASE_URL = 'https://api.github.com/users'

type GithubApiUser = {
  avatar_url: string
  html_url: string
  name: string
  company: string
  location: string
}

export type GithubUser = {
  avatarUrl: string
  htmlUrl: string
  name: string
  company: string
  location: string
}

export const getUser = async (username: string): Promise<GithubUser> => {
  try {
    const response = await fetch(`${BASE_URL}/${username}`)
    const data: GithubApiUser = await response.json()

    return {
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
      name: data.name,
      company: data.company,
      location: data.location,
    }
  } catch (error) {
    throw new Error('User not found')
  }
}
