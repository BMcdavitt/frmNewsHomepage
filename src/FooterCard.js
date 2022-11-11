import './css/FooterCard.css'

function FooterCard(props) {
  let count = String(props.count).padStart(2, '0')

  console.log(props)

  return (
    <div className="footer_card">
      <img src={props.image} alt={props.imageAlt} />
      <div className="content">
        <div className="counter">{count}</div>
        <h2>{props.title}</h2>
        {props.summary}
      </div>
    </div>
  )
}

export default FooterCard
