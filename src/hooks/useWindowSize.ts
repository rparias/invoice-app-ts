import { useState, useEffect } from 'react'

type WindowSize = {
  width: undefined | number
  height: undefined | number
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export default useWindowSize
