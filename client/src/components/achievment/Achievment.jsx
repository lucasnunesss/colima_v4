import { useEffect, useState } from "react"
import "./achievment.css"
import ReactOdometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css"
const Achievment = () => {
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
          setProjects(175);
          setSatisfaction(98)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
 
  return (
    <div className="achievements">
      {/* card start */}
      <div className="achievement-card">
          <h3 className="achievement-title">Projetos concluidos</h3>
          <div className="flex">
                <ReactOdometer value={projects} className="title" />
                <h1 className="title">+</h1>
          </div>
          <p>A favorita de diversas empresas</p>
      </div>
      {/* Card End */}

            {/* card start */}
            <div className="achievement-card">
          <h3 className="achievement-title">Satisfação</h3>
          <div className="flex">
                <ReactOdometer value={satisfaction} className="title" />
                <h1 className="title">%</h1>
          </div>
          <p>de nossos clientes</p>
      </div>
    </div>
  )
}

export default Achievment