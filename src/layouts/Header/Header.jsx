import './Header.scss'
import Logo from "@/components/Logo";
import HeaderTop from "@/components/HeaderTop";
import HeaderMenu from "@/components/HeaderMenu";
import Input from "@/Input";
import Button from "@/components/Button";
import HeartIcon from "@/assets/icons/heart-icon.svg?react"
import CartIcon from "@/assets/icons/cart-icon.svg?react"

const Header = (props) => {
  const {} = props
  return (
    <>
      <HeaderTop />
      <header className="header hr-bottom">
        <div className="header__inner container">
          <Logo />
          <HeaderMenu />
          <div className="header__inner-func">
            <Input className="header__inner-input" type="search" icon="search" placeholder="What are you looking for?" />
            <Button icon={HeartIcon} />
            <Button icon={CartIcon} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header