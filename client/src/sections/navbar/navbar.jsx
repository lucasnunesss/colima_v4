import Logo from "../../components/logo/logo"
import { nav } from "../../../data"
import { Link } from "react-scroll"
import "./navbar.css"
import Redes from "../../components/redes/Redes"
import { FaArrowTurnDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../../components/sidebar/Sidebar"
import { useState } from "react"
import useNavbar from "../../hooks/useNavbar"
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const {showNavbar} = useNavbar()
  return (
    <>
    <Sidebar openSidebar={openSidebar} onClose={()=>setOpenSidebar(!openSidebar)} />
    <nav className={`flex-center navbar ${showNavbar ? "drop" : ""}`}>
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
          <Link to="#" className={`${!openSidebar ? "flex-center btn primary" : "sumir"}`} smooth={true}>
                Saiba Mais
              <FaArrowTurnDown/>
          </Link>
        <button className={`${!openSidebar ? "flex-center icon menu-btn" : "sumir"}`} onClick={() => setOpenSidebar(!openSidebar)}>
          <FiMenu />
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar