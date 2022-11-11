import './css/Aside.css'
import AsideCard from './AsideCard.js'

function Aside() {

  const asideData = [
    {
      Title: 'Hydrogen VS Electric Cars',
      Summary: 'Will hydrogen-fuled cars ever catch up to EVs?',
    },
    {
      Title: 'The Downsides of AI Artistry',
      Summary:
        'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      Title: 'Is VC Funding Drying Up?',
      Summary:
        'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ]

  const asideCard = asideData.map((value, id) => {
        return <AsideCard key={id} title={value.Title} summary={value.Summary} last={id === (asideData.length - 1)}/>
  })

  return (
    <aside>
      <h2>New</h2>
      {asideCard}
    </aside>
  )
}

export default Aside
