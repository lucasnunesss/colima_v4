/* eslint-disable no-unused-vars */
import {
  FaTools,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
export const nav = [
  {
    label: "Quem Somos",
    to: "about"
  },
  {
    label: "Serviçoes",
    to: "services"
  },
  {
    label: "Contato",
    to: "contact"
  },
  {
    label: "Projetos",
    to: "projects"
  },
  {
    label: "Pilares",
    to: "pilares"
  }
]

export const socialNetworks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com"
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com"
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com"
  },
  {
    name: "Whatsapp",
    icon: <FaWhatsapp />,
    link: ""
  },
]

export const why = [
  {
    title: "Qualidade Sem Igual",
    icon: <FaCheckCircle />,
    description: "Preocupação em entregar uma qualidade perfeita"
  },
  {
    title: "Trabalho em Equipe",
    icon: <RiTeamFill />,
    description: "Equipe que rende resultados positivos"
  },
  {
    title: "Originalidade e Criatividade",
    icon: <FaDraftingCompass />,
    description: "Incentivamos soluções criativas e originais"
  },
  {
    title: "Focamos no Cliente",
    icon: <FaUserFriends />,
    description: "Nos preocupamos com as necessidades dos nossos clientes"

  }

]