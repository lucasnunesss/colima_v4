import "./footer.css"
import Logo from "../../components/logo/logo"
import { footer } from "../../../data"
const Footer = () => {
  return (
    <footer id="footer">
        <div className="overlay-div">
          <div className="container">
            <div className="column">
                <Logo />
            </div>
            {
              footer.map((foot, index) => (
                <div className="columns" key={index}>
                  <h4 className="footer-title">
                    {foot.title}
                    {
                      foot.router.map((route, index) => (
                        <a href={route.href} className="route" key={index}>{route.name}</a>
                      ))
                    }
                  </h4>
                </div>
              ))
            }
          </div>
          <div className="footer-bot">
              <p>Copyright &copy; Collima - All right reserver</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer