import Icon from 'poc/icon'
import { createRenderComponent } from 'utils/test'

const TAG = 'poc-icon'

const render = createRenderComponent(TAG, Icon)

describe(TAG, () => {
  it('renders no svg', () => {
    const component = render()
    expect(component.shadowRoot.querySelector('svg')).toBeNull()
  })

  it('renders an icon', () => {
    const iconName = 'location'
    const component = render({ iconName })

    const svg: HTMLElement = component.shadowRoot.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg.classList).toHaveLength(1)
    expect(svg.classList).toContain('size--medium')

    const use = svg.querySelector('use')

    expect(use).not.toBeNull()
    expect(use.getAttribute('href')).toBe(`/svgs/spritesheet.svg#${iconName}`)
  })

  it('renders with large size', () => {
    const iconName = 'location'
    const size = 'large'

    const component = render({ iconName, size })

    const svg: HTMLElement = component.shadowRoot.querySelector('svg')
    expect(svg.classList).toHaveLength(1)
    expect(svg.classList).toContain(`size--${size}`)
  })
})
