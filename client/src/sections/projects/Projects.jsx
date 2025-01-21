import "./projects.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolio } from "../../../data";
import { Autoplay } from "swiper/modules";
const Projects = () => {
  return (
    <section id='project'>
        <div className="container">
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            autoplay={true}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={{
              900: {slidesPerView: 3},
              600: {slidesPerView: 2}
            }}
            className="project-container"
          >
            {portfolio.map((project, index) => (
              <SwiperSlide className="project" key={index}>
                <div className="img-container">
                  <img src={project.image} alt="" />
                </div>
                <div className="details">
                  <h4 className="line-clamp-2 project-title">{project.title}</h4>
                  <p className="line-clamp-2 muted">
                    {project.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  )
}

export default Projects