import './Hero.scss'
import HeroSlider from "@/components/HeroSlider";

const Hero = (props) => {
  const {} = props
  const categories = [
    'Woman’s Fashion',
    'Men’s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
  ]
  return (
    <section className="hero">
      <aside className="hero__aside">
        <ul className="hero__list">
          {categories.map((category, index) => (
            <li
              className="hero__category"
              key={index}
            >{category}</li>
          ))}
        </ul>
      </aside>
      <HeroSlider />
    </section>
  )
}

export default Hero