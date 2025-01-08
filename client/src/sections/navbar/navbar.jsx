import Logo from "../../components/logo/logo"
import { nav } from "../../../data"
import { Link } from "react-scroll"
import "./navbar.css"
import Redes from "../../components/redes/Redes"
import { FaArrowTurnDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="flex-center navbar">
      <Logo />
      <div className="nav-links">
          {nav.map((item, index)=> (
            <Link to={item.to} className="nav-item" activeClass="active" spy={true} smooth={true}
              offset={-300} key={index}
            >{item.label}</Link>
          ))}
      </div>
      <Redes />
      <div className="flex-center">
          <Link to="#" className="flex-center btn primary" smooth={true}>
                Saiba Mais
              <FaArrowTurnDown/>
          </Link>
        <button className="flex-center icon menu-btn">
          <FiMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar