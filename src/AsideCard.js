import './css/AsideCard.css'

function AsideCard(props) {
  return (
    <div className="aside_card">
      <h3>{props.title}</h3>
      {props.summary}
      {dividerLine(props.last)}
    </div>
  )
}

function dividerLine(last) {
    if(!last) return <div className='divider'></div>
}

export default AsideCard
