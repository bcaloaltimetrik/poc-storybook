import { LightningElement, api } from 'lwc'
import cn from 'classnames'

const DEFAULT_SIZE = 'medium'
export default class Button extends LightningElement {
  private _primary = false
  private active = false
  @api label: string
  @api backgroundColor: string
  @api size: string

  @api
  get primary() {
    return this._primary
  }

  set primary(value: boolean | string) {
    this._primary = typeof value === 'string' ? value === 'true' : value
  }

  get buttonClass(): string {
    return cn(
      'button',
      (this.primary && 'button--primary') || 'button--secondary',
      `button--${this.size || DEFAULT_SIZE}`,
      this.active && 'button--active'
    )
  }

  get buttonStyles(): string {
    return cn(
      this.backgroundColor &&
        !this.active &&
        `background-color: ${this.backgroundColor}`
    )
  }

  handleClick(): void {
    this.active = true
    this.dispatchEvent(new CustomEvent<void>('clicked'))
  }
}
