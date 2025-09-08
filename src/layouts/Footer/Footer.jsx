import './Footer.scss'
import Logo from "@/components/Logo"
import Input from "@/Input"
import qrCode from "@/assets/images/qr-code.png"
import googlePlay from "@/assets/images/google-play.png"
import appStore from "@/assets/images/app-store.png"

const Footer = () => {
  const data = [
    {
      title: 'Support',
      links: [
        '111 Bijoy sarani, Dhaka, \nDH 1515, Bangladesh.',
        'exclusive@gmail.com',
        '+88015-88888-9999',
      ],
    },
    {
      title: 'Account',
      links: [
        'My Account',
        'Cart',
        'Wishlist',
        'Shop',
      ],
    },
    {
      title: 'Quick Link',
      links: [
        'Privacy Policy',
        'Terms Of Use',
        'FAQ',
        'Contact',
      ],
    },
  ]
  return (
    <footer className='footer'>
      <div className="footer__inner container">
        <div className="footer__menu hr-bottom">
          <div className="footer__menu-group  ">
            <Logo />
            <h2 className="footer__menu-title h4">Subscribe</h2>
            <p className="footer__menu-item">Get 10% off your first order</p>
            <Input
              className="footer__menu-input"
              icon="send"
              type="text"
              isNotFilled
              placeholder="Enter your email"
            />
          </div>
          {data.map(({title, links}) => (
            <div
              className="footer__menu-group"
              key={title}
            >
              <h2 className="footer__menu-title h4">{title}</h2>
              <ul className="footer__menu-list">
                {links.map((item, i) => (
                  <li
                    className="footer__menu-item"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer__menu-group">
            <h2 className="footer__menu-title h4">Download App</h2>
            <p className="footer__menu-item--gray">Save $3 with App New User Only</p>
            <div className="footer__menu-grid">
              <img
                className="footer__menu-grid-qr"
                src={qrCode}
                alt=""
                loading="lazy"
                width={110}
                height={110}
              />
              <img
                className="footer__menu-grid-google"
                src={googlePlay}
                alt=""
                loading="lazy"
              />
              <img
                className="footer__menu-app"
                src={appStore}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="footer__menu-social">

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer