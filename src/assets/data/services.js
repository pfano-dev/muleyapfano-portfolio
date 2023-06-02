import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

export const services = [
  {
    id: 1,
    service: "UI/UX Design",
    description: "stunning user interface designer using Figma and Framer",
    icon: AiOutlineAntDesign,
  },
  {
    id: 2,
    service: "Frontend Development",
    description:
      "I can build a beautiful and scalable SPA using HTML,CSS and React.js",
    icon: RiComputerLine,
  },
  {
    id: 3,
    service: "BackEnd Development",
    description:
      "handle database, server, api using Express & other popular frameworks",
    icon: FaServer,
  },
  {
    id: 4,
    service: "APIs development",
    description:
      "I can develop robust REST API using django-rest-api & Node API",
    icon: AiOutlineApi,
  },
  {
    id: 5,
    service: "Competitive Coder",
    description: "a daily problem solver in HackerRank and Leet Code",
    icon: MdDeveloperMode,
  },
  {
    id: 6,
    service: "Other",
    description: "80%",
    icon: BsCircleFill,
  },
];
