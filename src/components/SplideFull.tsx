// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FC } from 'react'

import {
  manuCoding,
  manuLinguistics,
  manuMarketing,
  manuTranslation,
  manuDesign,
  manuEditor,
} from '../assets/img-portfolio'
import { useSplide } from '../hooks/useSplide'

const SplideFull: FC = () => {
  const numberOfSlides = useSplide()
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: numberOfSlides,
        perMove: 1,
        loop: true,
        autoplay: true,
        updateOnMove: true,
        drag: true,
        interval: 3000,
        // rewind: true,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <a href="/">
          <img src={manuLinguistics} alt="Image 1" />
          <div className="splide__body">
            <p>Linguistics</p>
            <small>Cognitive Linguistics</small>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="/">
          <img src={manuTranslation} alt="Image 2" />
          <div className="splide__body">
            <p>Translation</p>
            <small>De - Es and En - Es</small>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="/">
          <img src={manuMarketing} alt="Image 3" />
          <div className="splide__body">
            <p>Marketing</p>
            <small>Content Marketing</small>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="/">
          <img src={manuCoding} alt="Image 4" />
          <div className="splide__body">
            <p>Coding</p>
            <small>Web Development</small>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="/">
          <img src={manuDesign} alt="Image 5" />
          <div className="splide__body">
            <p>Design</p>
            <small>Love it</small>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="/">
          <img src={manuEditor} alt="Image 6" />
          <div className="splide__body">
            <p>Editor</p>
            <small>Videos are my friends</small>
          </div>
        </a>
      </SplideSlide>
    </Splide>
  )
}

export default SplideFull
