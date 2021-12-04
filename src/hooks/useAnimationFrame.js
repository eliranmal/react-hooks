import {useEffect} from 'react'


export const useAnimationFrame = (
  tickCallback = () => {},
  stopPredicate = () => 1
) => {
  useEffect(() => {
    let reqId
    const tick = () => {
      if (stopPredicate()) {
        return
      }
      tickCallback()
      reqId = window.requestAnimationFrame(tick)
    }
    reqId = window.requestAnimationFrame(tick)
    return () => {
      window.cancelAnimationFrame(reqId)
    }
  })
}
