import './HeaderTop.scss'

const HeaderTop = (props) => {
  const {} = props
  return (
    <div className="header-top">
      <div className="header-top__inner container">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!&nbsp;
            <a
              className="header-top__inner-link"
              href="/"
            >
               ShopNow
            </a>
          </span>
        <select className="header-top__select">
          <option>English</option>
        </select>
      </div>
    </div>
  )
}

export default HeaderTop