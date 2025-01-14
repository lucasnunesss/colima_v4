import { FaArrowTurnDown } from "react-icons/fa6"
import Achievment from "../../components/achievment/Achievment"
import { Link } from "react-scroll"
import {escavadeira} from "../../assets"
import "./hero.css"
const Hero = () => {
  return (
    <section id='hero' className="blur-effect">
      <div className="overlay-div">

        <div className="container">
            <div className="column left">
              <div className="hero-value">
                  <h1 className="title">Conheça
                      inovações
                      tecnológicas
                      na Engenharia
                      moderna</h1>
                    <p className="description">Na Collima Engenharia, utilizamos tecnologias inovadoras e talentos excepcionais para desenvolver soluções eficientes e sustentáveis, sempre focando na excelência e na satisfação total dos nossos clientes.</p>
              </div>
              <Achievment />
              <div className="flex-center buttons-wrapper">
              <Link to="projetos" smooth={true} className="btn">
              Projetos
              </Link>
              <Link to="contact" smooth={true} className="flex-center btn primary">
                  Fale conosco <FaArrowTurnDown />
              </Link>
              </div>
            </div>
            <div className="column hero-img-container obj-contain">
                  <img src={escavadeira} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero