import "./about.css"
import { about } from "../../assets"
import emp from "../../assets/emp.jpeg"
const About = () => {
  return (
    <section id="about">
      <div className="overlay-div">
        <div className="container">
          <div className="about-img">
            <img src={about} alt="" />
          </div>
          <div className="section-header">
                <h1 className="section-title">Quem Somos</h1>
                <h3 className="sub-title">Unindo novas tecnologias, com mentes brilhantes</h3>
                <p className="section-description">
                Com 9 anos de experiência no mercado, somos uma empresa formada pela união de profissionais capacitados. Nosso objetivo não é apenas realizar projetos integrados, mas também oferecer as melhores soluções para edificações a longo prazo. Priorizamos a facilitação da execução, garantindo o menor custo e a maior qualidade em todas as fases do processo.
                </p>
                <div className="clients"><img src={emp} alt="" className="client-img"  /></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About