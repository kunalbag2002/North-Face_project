
import AiInputCard from '@/components/homeCards/AiInputCard'
import CardCarouselParent from '@/components/homeCards/CardCarouselParent'
import SpecialCard from '@/components/homeCards/SpecialCard'
import TemplateCard from '@/components/homeCards/TemplateCard'
import HeroContent from '@/components/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <CardCarouselParent />
      <TemplateCard />
      <SpecialCard />
      <AiInputCard />
    </div>
  )
}

export default page