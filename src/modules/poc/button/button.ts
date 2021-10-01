import { LightningElement, api } from 'lwc'
import cn from 'classnames'

const DEFAULT_SIZE = 'medium'
export default class Button extends LightningElement {
  private _primary = false
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
      (this.primary && 'button--primary') || 'button--secundary',
      `button--${this.size || DEFAULT_SIZE}`
    )
  }

  get buttonStyles(): string {
    return cn(
      this.backgroundColor && `background-color: ${this.backgroundColor}`
    )
  }

  handleClick(): void {
    this.dispatchEvent(new CustomEvent<void>('clicked'))
  }
}
