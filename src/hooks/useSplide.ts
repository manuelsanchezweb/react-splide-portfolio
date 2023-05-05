import { useEffect, useState } from 'react'

const getNumberOfSlides = () => {
  const width = window.innerWidth
  if (width > 1200) {
    return 4
  } else if (width > 600) {
    return 2
  } else {
    return 1
  }
}

export const useSplide = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(getNumberOfSlides())

  useEffect(() => {
    const handleResize = () => {
      setNumberOfSlides(getNumberOfSlides())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return numberOfSlides
}
