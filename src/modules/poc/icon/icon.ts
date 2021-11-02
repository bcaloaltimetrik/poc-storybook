import { LightningElement, api } from 'lwc'
import cn from 'classnames'

const BASE_URL = '/svgs/spritesheet.svg'
export default class Icon extends LightningElement {
  @api size: string = 'medium'
  @api iconName: string

  get iconHref(): string {
    return `${BASE_URL}#${this.iconName}`
  }

  get iconClass(): string {
    return cn(this.size && `size--${this.size}`)
  }
}
