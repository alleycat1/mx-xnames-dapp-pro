export function throttle(callback: Function, limit: number) {
  var waiting = false
  return function () {
    if (!waiting) {
      //@ts-ignore ignored because it's not important
      callback.apply(this, arguments)
      waiting = true
      setTimeout(function () {
        waiting = false
      }, limit)
    }
  }
}
