import BadgeButton from '../ui/badge-button'
import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from '../ui/minimal-card'

const TemplateCard = () => {
    const cards = [
        {
            title: "Trail Running",
            description:
                "Step into every journey with The North Face footwear — built for endurance.",
            src: "/images/running-trail.avif",
        },
        {
            title: "Mountaineering",
            description:
                "Conquer the cold with The North Face jackets — warmth without compromise.",
            src: "/images/treking-adv.avif",
        },
        {
            title: "SnowSporting",
            description:
                "Carry more, go further — The North Face backpacks are adventure-ready.",
            src: "/images/adv.avif",
        },
    ]
    return (
        <div>
            <div className='w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto'>
                <div className='h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto'>
                    <BadgeButton>Discover</BadgeButton>
                    <div className='flex justify-between items-center'>
                        
                                    {cards.map((card, index) => (
                                        <MinimalCard className="m-2 w-[460px] " key={index}>
                                            <MinimalCardImage
                                                className="h-[160px]"
                                                src={card.src}
                                                alt={card.title}
                                            />
                                            <MinimalCardTitle>{card.title}</MinimalCardTitle>
                                            <MinimalCardDescription>
                                                {card.description}
                                            </MinimalCardDescription>
                                        </MinimalCard>
                                    ))}
                                
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TemplateCard