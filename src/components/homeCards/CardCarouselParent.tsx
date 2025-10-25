import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = () => {

    const images = [
        {src:'/images/img1.jpeg',alt:"Image 1"},
        {src:'/images/img2.jpeg',alt:"Image 2"},
        {src:'/images/img3.jpeg',alt:"Image 3"},
    ]

  return (
    <div className=" mt-10 bg-[url('/cardcroul-bg.jpg')] bg-black/25 bg-blend-darken bg-cover bg-center">


        <div className="py-10">
          <CardCarousel images={images} showPagination={false} />
        </div>
    </div>
  )
}

export default CardCarouselParent