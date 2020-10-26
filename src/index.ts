import { useRef } from 'react'
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect'

export default function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useIsomorphicLayoutEffect(() => {
    ref.current = value
  })
  return ref.current
}
