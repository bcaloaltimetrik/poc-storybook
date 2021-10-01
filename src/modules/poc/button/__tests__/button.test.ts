import Button from 'poc/button'
import { createRenderComponent } from 'utils/test'

const render = createRenderComponent('poc-button', Button)

describe('button', () => {
  describe('render', () => {
    it('renders a label', () => {
      const label = 'Test Label'
      const component = render({
        label,
      })

      const button: HTMLButtonElement =
        component.shadowRoot.querySelector('button')

      expect(button.textContent).toBe(label)
      expect(button.classList).toHaveLength(3)
      expect(button.classList).toContain('button')
      expect(button.classList).toContain('button--secundary')
      expect(button.classList).toContain('button--medium')
    })

    it('renders as primary with a background and as large', () => {
      const backgroundColor = 'blue'

      const component = render({
        backgroundColor,
        primary: true,
        size: 'large',
      })

      const button: HTMLButtonElement =
        component.shadowRoot.querySelector('button')
      expect(button.classList).toHaveLength(3)
      expect(button.classList).toContain('button')
      expect(button.classList).toContain('button--primary')
      expect(button.classList).toContain('button--large')
      expect(button.style.backgroundColor).toBe(backgroundColor)
    })
  })

  describe('interactions', () => {
    it('fires clicked event when the button is clicked', () => {
      const label = 'Test Label'
      const component = render({
        label,
      })

      const mockClicked = jest.fn()
      component.addEventListener('clicked', mockClicked)

      const button: HTMLButtonElement =
        component.shadowRoot.querySelector('button')
      button.click()

      expect(mockClicked).toHaveBeenCalledTimes(1)
    })
  })
})
