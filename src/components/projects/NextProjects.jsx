import {FaBrain} from "react-icons/fa";
import {SiFuturelearn,} from "react-icons/si"
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Slide } from "../Slide";

export const Paytm = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:
                "The project utilizes Next.js for both frontend and backend development, with auxiliary backends in Express. The data layer is managed by PostgreSQL with Prisma ORM, and Tailwind CSS is used for styling. Turborepo assists in managing multiple packages within the project.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:
                "Key challenges involved integrating bank webhooks for secure money transfers, managing multiple user roles, and ensuring reliable transactions. Designing a responsive and intuitive UI, handling database migrations, and maintaining real-time transaction updates required detailed planning and execution.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:
                "The project emphasized the importance of a robust architecture for handling financial transactions. It reinforced the need for secure authentication and data validation practices. Utilizing Prisma for database management and leveraging Tailwind for UI design streamlined the development process.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Paytm',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "The Paytm project is designed to provide a seamless and comprehensive payment solution, enabling users to log in, transfer money via phone numbers or QR codes, and manage their funds. It supports merchant-specific features like QR code generation for payments and automated bank transfers.",
        libraries: [{link:"https://nextjs.org/", image:"https://cdn.cosmicjs.com/e2194bb0-310b-11e8-8a87-1d4e79eefafa-nextjs-website-boilerplate.jpg", name:"Next.js"},
                    {link:"https://expressjs.com/", image:"https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png", name:"Express"},
                    {link:"https://www.postgresql.org/", image:"https://www.postgresql.org/media/img/about/press/elephant.png", name:"PostgreSQL"},
                    {link:"https://www.prisma.io/", image:"https://icons.veryicon.com/png/o/business/vscode-program-item-icon/prisma.png", name:"Prisma"},
                    {link:"https://tailwindcss.com/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", name:"Tailwind"},
                    {link:"Turborepo", image:"https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png", name:"Turborepo"},
                ],
        image: "./paytm.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}