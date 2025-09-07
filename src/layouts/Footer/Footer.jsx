import './Footer.scss'
import Logo from "@/components/Logo";

const Footer = (props) => {
  const data = [
    {
      title: 'Support',
      links: [
        '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
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
  const {} = props
  return (
    <footer className='footer'>
      <div className="footer__inner container">
        <div className="footer__menu hr-bottom">
          <div className="footer__menu-group  ">
            <Logo />
            <h2 className="footer__menu-title h4">Subscribe</h2>
            <li className="footer__menu-item">Get 10% off your first order</li>
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
            <p>Save $3 with App New User Only</p>
            <div className="footer__menu-grid">
              <img
                src="../../assets/images/qr-code.png"
                alt=""
                loading="lazy"
              />
              <img
                src="@/assets/images/google-play.png"
                alt=""
                loading="lazy"
              />
              <img
                src="@/assets/images/app-store.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer