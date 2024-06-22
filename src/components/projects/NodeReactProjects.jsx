import {FaBrain} from "react-icons/fa";
import {SiFuturelearn,} from "react-icons/si"
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Slide } from "../Slide";

export const Medium = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:
                "The frontend uses React for a dynamic UI, while Cloudflare Workers power the serverless backend. Zod ensures data validation, TypeScript enhances code maintainability, and Prisma manages database operations with PostgreSQL. JWT secures user authentication.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:
                "Challenges included configuring serverless backend deployment, managing database connections, and ensuring secure JWT-based authentication. Building a responsive UI and maintaining data integrity with Zod required careful planning and execution.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:
                "The project reinforced the importance of modern web development practices, like using TypeScript for error-catching and adopting serverless architecture. It highlighted the need for secure authentication and the benefits of responsive design with React and Tailwind CSS.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'A Modern Blogging Platform',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "This is a modern blogging platform that allows users to create, update, and manage blog posts. It features secure authentication, a scalable backend, and a responsive frontend for an optimal user experience.",
        libraries: [{link:"https://react.dev/", image:"https://1000logos.net/wp-content/uploads/2023/10/React-Logo.png", name:"React"},
                    {link:"https://www.cloudflare.com/", image:"https://static-00.iconduck.com/assets.00/cloudflare-icon-2048x927-9dhn82y4.png", name:"Cloudflare"},
                    {link:"https://zod.dev/", image:"https://seeklogo.com/images/Z/zod-logo-B57E684330-seeklogo.com.png", name:"Zod"},
                    {link:"https://www.typescriptlang.org/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png", name:"TypeScript"},
                    {link:"https://www.prisma.io/", image:"https://icons.veryicon.com/png/o/business/vscode-program-item-icon/prisma.png", name:"Prisma"},
                    {link:"https://www.postgresql.org/", image:"https://www.postgresql.org/media/img/about/press/elephant.png", name:"PostgreSQL"},
                    {link:"https://jwt.io/", image:"https://jwt.io/img/pic_logo.svg", name:"JSON Web Tokens "},

                ],
        image: "./medium.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}