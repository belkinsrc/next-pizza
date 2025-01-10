import { useEffect } from 'react'

function useDisableScroll(isDisabled: boolean) {
  useEffect(() => {
    const originalStyle = getComputedStyle(document.body).overflow
    const originalPaddingRight = getComputedStyle(document.body).paddingRight

    if (isDisabled) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.paddingRight = originalPaddingRight
      document.body.style.overflow = originalStyle
    }

    return () => {
      document.body.style.paddingRight = originalPaddingRight
      document.body.style.overflow = originalStyle
    }
  }, [isDisabled])
}

export { useDisableScroll }
