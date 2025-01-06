import logo from "../../assets/logo.jpg"
import "./logo.css"
const Logo = () => {
  return (
    <div className="flex-center logo-div">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Logo