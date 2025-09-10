import './HeroSlider.scss'
import Iphone from '@/assets/images/iphone-14.jpg'
import AppleIcon from '@/assets/icons/apple-icon.svg?react'
import {useEffect, useState} from "react";

const dataSlides = [
  {
    title: 'iPhone 13 Series',
    description: `Up to 10% \noff Voucher`,
    image: Iphone,
  },
  {
    title: 'iPhone 13 Series',
    description: 'Up to 10% \noff Voucher',
    image: Iphone,
  },
  {
    title: 'iPhone 13 Series',
    description: 'Up to 10% \noff Voucher',
    image: Iphone,
  },
  {
    title: 'iPhone 13 Series',
    description: 'Up to 10% \noff Voucher',
    image: Iphone,
  },
  {
    title: 'iPhone 13 Series',
    description: 'Up to 10% \noff Voucher',
    image: Iphone,
  },
]
const HeroSlider = () => {
  const [imageIndex, setImageIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(index => (index === dataSlides.length - 1 ? 0 : index + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="hero-slider__container"
        style={{transform: `translateX(-${imageIndex * 100}%)`}}
      >
        {dataSlides.map(({title, description, image}, index) => (
          <div
            className="hero-slider__slide"
            key={index}
          >
            <div className="hero-slider__slide-inner">
              <header className="hero-slider__slide-header">
                <AppleIcon />
                <h1 className="hero-slider__slide-title h5">{title}</h1>
              </header>

              <p className="hero-slider__slide-description h1">{description}</p>
              <a
                className="hero-slider__link"
                href="/"
              >
                ShopNow
              </a>
            </div>
            <img
              src={image}
              alt="banner"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider