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
import {main1, main2, main3, main4, main5} from "./src/assets"
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

export const portfolio = [
  {
    title: "Projetos de Incêndio",
    image: main1,
    description: "Um projeto de incêndio bem planejado pode salvar vidas. Todos os aspectos da segurança, desde a detecção precoce de incêndio até as rotas de evacuação e os sistemas de supressão de incêndios"
  },
  {
    title: "Projetos de AVCB",
    image: main2,
    description: "Um projeto AVCB bem elaborado é essencial para garantir a segurança de uma edificação e cumprimento das normas e regulamentos de segurança contra incêndio. Portanto, é importante contar com profissionais qualificados e experientes na elaboração desse tipo de projeto"
  },
  {
    title: "Proejtos de Detecção",
    image: main3,
    description: "Fazer um projeto de detecção é essencial para garantir a segurança das pessoas, proteger propriedades, cumprir regulamentos, reduzir custos associados a incêndios e manter a reputação da empresa. É um investimento crítico na segurança e proteção de uma edificação"
  },
  {
    title: "Projetos de Instalações Hidráulicas",
    image: main4,
    description: "Projetos de instalações hidraúlicas é fundamental para garantir o uso adequado e sustentável dos recursos hídricos, promover a saúde públic e proporcionar conforto e segurançã aos usuário das instalações"
  },
  {
    title: "Projetos de Reengenharia",
    image: main5,
    description: "Um projeto de reengenharia bem-sucedido pode resultar em melhorias significativas na eficiência operacional, na qualidade dos produtos e servições, na satisfação do cliente e na competitividade da organização no mercado"
  }
]