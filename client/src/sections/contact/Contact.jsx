import { FaLocationCrosshairs } from "react-icons/fa6";
import "./contact.css"
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  return (
   <section id="contact">
     <div className="overlay-div">
        <div className="container">
            <div className="flex left-container">
              <div className="contact-info-wrapper">
                {/* Contact Info */}
                <div className="flex contact-info">
                      <div className="flex-center icon">
                        <MdOutlineAlternateEmail />
                      </div>
                      <div className="details">
                          <h4>Email</h4>
                          <p><a href=""> contato@cllengenharia.com</a></p>
                      </div>
                </div>
                {/* Contact info end */}

                {/* Contact Info */}
                <div className="flex contact-info">
                      <div className="flex-center icon">
                        <FaLocationCrosshairs />
                      </div>
                      <div className="details">
                          <h4>Endereço</h4>
                
                          <p>São Paulo, SP</p>
                      </div>
                </div>
                {/* Contact info end */}

                             {/* Contact Info */}
                    <div className="flex contact-info">
                      <div className="flex-center icon">
                        <FiPhoneCall/>
                      </div>
                      <div className="details">
                          <h4>Telefone</h4>
                          <p>
                            Mande uma mensagem 
                          </p>
                          <p>(11)2115-6693</p>
                      </div>
                </div>
                {/* Contact info end */}
              </div>

            </div>
            <form className="forms">
                  <div className="form-top">
                      <h3 className="sub-heading">Faça um orçamento online</h3>
                      <p>Preencha o formulário abaixo</p>
                  </div>

                  <div className="form-mid">
                      <input type="text" placeholder="Nome" name="name" className="control" />

                      <input type="email" placeholder="Email" name="email" className="control" />

                      <input type="tel" placeholder="Contato" name="phoneNumber" className="control" />

                      <textarea name="message" placeholder="Descreva sua necessidade" className="control"></textarea>
                  </div>

                  <div className="form-btn">
                      <button type="button" className="btn primary">Enviar</button>
                  </div>
            </form>
        </div>
     </div>
   </section>
  )
}

export default Contact