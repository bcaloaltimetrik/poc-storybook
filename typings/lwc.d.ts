declare module 'lwc' {
  export function createElement<T extends LightningElement>(
    tag: string,
    obj?: { is: new () => T }
  )
}
