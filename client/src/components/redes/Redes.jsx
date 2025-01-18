import "./redes.css"
import { socialNetworks } from "../../../data"
const Redes = () => {
  return (
    <div className="flex redes" id="red">
      {socialNetworks.map((handle, index) => (
        <a href={handle.link} className="flex-center icon" target="_blank" key={index}>
          {handle.icon}
        </a>
      ))}
    </div>
  )
}

export default Redes