export const debounce = (func: Function, timeout = 300) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, timeout)
  }
}
