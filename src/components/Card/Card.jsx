import './Card.scss'

const Card = (props) => {
  const {
    img,
    title,
    text,
  } = props
  return (
    <div className="card">
      <img
        className="card__image"
        src={`public/${img}`}
        alt=""
        loading="lazy"
        width={300}
        height={200}
      />
      <h3 className="card__title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card