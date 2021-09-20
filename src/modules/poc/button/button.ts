import { LightningElement, api } from 'lwc'
import cn from 'classnames'

export default class Button extends LightningElement {
  @api label
  @api primary = false
  @api backgroundColor

  get buttonClass(): string {
    return cn(
      'button',
      (this.primary && 'button--primary') || 'button--secundary'
    )
  }

  get buttonStyles(): string {
    return cn(
      this.backgroundColor && `background-color: ${this.backgroundColor}`
    )
  }
}
