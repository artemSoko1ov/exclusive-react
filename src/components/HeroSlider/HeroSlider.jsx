import './HeroSlider.scss'
import Iphone from '@/assets/images/iphone-14.jpg'
import AppleIcon from '@/assets/icons/apple-icon.svg?react'

const HeroSlider = (props) => {
  const dataSlides = [
    {
      title: 'iPhone 13 Series',
      description: 'Up to 10% off Voucher',
      image: Iphone,
    },
  ]
  const {} = props
  return (
    <div className="hero-slider">
      {dataSlides.map(({title, description, image}, index) => (
        <div className="hero-slider__slide">
          <div className="hero-slider__slide-inner">
            <header className="hero-slider__slide-header">
              <AppleIcon />
              <h1 className="hero-slider__slide-title h5">{title}</h1></header>

            <p className="hero-slider__slide-description h1">{description}</p>
            <a
              className="header-top__inner-link"
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
  )
}

export default HeroSlider