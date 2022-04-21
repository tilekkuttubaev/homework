import './Card.css'


function Card(props) {
  return (
    <div className='div'>
      <div className='test'> </div>
      <img className='img' src={props.pic} alt='' />
      <div className='card'>
        {props.name}{props.id}
      </div>
    </div>
  )





}

export default Card;
