import { createElement, LightningElement } from 'lwc'

export const createRenderComponent =
  <T extends LightningElement>(
    tag: string,
    ComponentConstructor: new () => T
  ) =>
  (props = {}) => {
    const comp = createElement<T>(tag, { is: ComponentConstructor })
    Object.assign(comp, props)
    document.body.appendChild(comp)
    return comp
  }
