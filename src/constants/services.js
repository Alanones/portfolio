import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I enjoy developing complex, user-friendly and responsive web applications, working with dashboards, and backed and much more. Key technologies I use include Nodejs, Reactjs, Tailwind, SCSS, among others.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Yes, I can design with tools such as figma and web flow.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `I develop cross-platform mobile applications with React Navitve.`,
  },
]

export default services
