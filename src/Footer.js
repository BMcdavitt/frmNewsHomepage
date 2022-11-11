import FooterCard from './FooterCard'

function Footer() {

    const footerData = [
        {
            title: 'Reviving Retro PCs',
            summary: 'What happens when old PCs are given modern upgrades?',
            image: './images/image-retro-pcs.jpg',
            imageAlt: 'Retro PCs',
        },
        {
            title: 'Top 10 Laptops of 2022',
            summary: 'Our best picks for various needs and budgets.',
            image: './images/image-top-laptops.jpg',
            imageAlt: 'Closeup of a laptop keyboard',
        },
        {
            title: 'The Growth of Gaming',
            summary: 'How the pandemic has sparked fresh opportunities.',
            image: './images/image-gaming-growth.jpg',
            imageAlt: 'Catching a gaming controller',
        },
    ]

    const footerCard = footerData.map((value, id) => {
        return <FooterCard key={id} count={id + 1} title={value.title} summary={value.summary} image={value.image} imageAlt={value.imageAlt}/>
    })

    return (
        <footer>
            {footerCard}
        </footer>
    )
}

export default Footer