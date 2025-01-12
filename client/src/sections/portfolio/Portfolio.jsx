import "./portfolio.css"
import { portfolio } from "../../../data"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
          <div className="section-header">
              <h3 className="sub-heading">Nossos Projetos</h3>
              <p className="description">
                {" "}
                Explore nossos projetos para ver a alta-qualidade do nosso trabalho.
              </p>
          </div>
          <div className="portfolio-container">
                {portfolio.map((item, index)=> (
                  <div key={index} className="flex portfolio">
                      <div className="img-container">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="details">
                          <h4 className="section-title">{item.title}</h4>
                          <p className="line-clamp2 description">
                            {item.description}
                          </p>
                      </div>
                  </div>
                ))}
          </div>
      </div>
    </section>
  )
}

export default Portfolio