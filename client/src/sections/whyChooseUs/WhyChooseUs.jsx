import {Swiper, SwiperSlide} from "swiper/react"
import "./WhyChooseUs.css"
import {Autoplay} from "swiper/modules"
import { why } from "../../../data"
const WhyChooseUs = () => {
  return (
    <section id="why">
      <div className="container">
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          loop={true}
          spaceBetween={15}
          autoplay={true}
          speed={5000}
          modules={[Autoplay]}
          breakpoints={{
            350: {
                slidesPerView: 2,
            },
            768: {slidesPerView: 3},
            1000: {slidesPerView: 4}
          }}    
        >
              {why.map((why, index) => (
                <SwiperSlide className="flex why-item" key={index}>
                  <div className="flex-center primary icon">
                      {why.icon}
                  </div>
                  <div className="details">
                      <h4 className="why-title">{why.title}</h4>
                      <p className="muted">{why.description}</p>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  )
}

export default WhyChooseUs