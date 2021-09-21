import Button from 'poc/button'
import { createRenderComponent } from 'utils/test'

const render = createRenderComponent('poc-button', Button)

describe('button', () => {
  it('renders a label', () => {
    const label = 'Test Label'
    const component = render({
      label,
    })

    expect(component.label).toBe(label)
  })
})
