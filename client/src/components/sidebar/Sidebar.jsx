/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa"
import Logo from "../logo/logo"
import "./sidebar.css"
import { nav } from "../../../data"
import { Link } from "react-scroll"
const Sidebar = ({openSidebar, onClose}) => {
  return (
    <div className={`sidebar ${openSidebar ? "visible" : ""}`}>
      <div className="sidebar-wrapper">
          <div className="flex-center top">
          
              <Logo />
             

              <button className="flex-center icon" onClick={onClose}>
              <FaTimes />
              </button>
          </div>

          <div className="mid navlinks">
              {nav.map((nav, index) => (
                <Link to={nav.to} smooth={true} className="navitem" key={index}
                onClick={onClose}
                >{nav.label}</Link>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Sidebar