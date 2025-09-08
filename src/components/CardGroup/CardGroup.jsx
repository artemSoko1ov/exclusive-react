import './CardGroup.scss'
import Card from "@/components/Card";

const CardGroup = (props) => {
  const dataCards = [
    {
      img:'phone.jpg',
      title:'Phone 1',
      text:'Text for Phone 1',
    },
    {
      img:'phone.jpg',
      title:'Phone 2',
      text:'Text for Phone 2',
    },
    {
      img:'phone.jpg',
      title:'Phone 3',
      text:'Text for Phone 3',
    },
    {
      img:'phone.jpg',
      title:'Phone 4',
      text:'Text for Phone 4',
    },
    {
      img:'phone.jpg',
      title:'Phone 5',
      text:'Text for Phone 5',
    },
    {
      img:'phone.jpg',
      title:'Phone 6',
      text:'Text for Phone 6',
    },
    {
      img:'phone.jpg',
      title:'Phone 1',
      text:'Text for Phone 1',
    },
    {
      img:'phone.jpg',
      title:'Phone 2',
      text:'Text for Phone 2',
    },
    {
      img:'phone.jpg',
      title:'Phone 3',
      text:'Text for Phone 3',
    },
    {
      img:'phone.jpg',
      title:'Phone 4',
      text:'Text for Phone 4',
    },
    {
      img:'phone.jpg',
      title:'Phone 5',
      text:'Text for Phone 5',
    },
    {
      img:'phone.jpg',
      title:'Phone 6',
      text:'Text for Phone 6',
    },
  ]
  const {} = props
  return (
    <div className="card-group">
      {dataCards.map(({img, title, text},index) => (
        <Card
        img={img}
        title={title}
        text={text}
        />
      ))}
    </div>
  )
}

export default CardGroup