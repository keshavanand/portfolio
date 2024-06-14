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
                "Blog development stack is meticulously chosen to ensure robustness and efficiency. The frontend is built using React, which allows for a dynamic and interactive user interface. The backend is powered by Cloudflare Workers, providing a serverless and scalable infrastructure. For schema validation and type inference, Zod is utilized, ensuring data integrity across the application. TypeScript is the language of choice, offering type safety and improved maintainability. Prisma serves as the ORM, facilitating database operations and connection pooling with PostgreSQL as the reliable data storage solution. For secure user authentication, JSON Web Tokens (JWT) are used, ensuring that user sessions are protected.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:
                "Developing blog presented several challenges that required careful consideration and problem-solving. Initializing the backend with Cloudflare Workers involved understanding serverless architecture and its deployment nuances. Managing the database with Prisma and PostgreSQL required configuring connection pooling for optimal performance. Implementing secure authentication using JWTs posed the challenge of protecting user data effectively. On the frontend, building a responsive and user-friendly interface with React necessitated attention to detail in design and navigation. Integrating Zod for validation was crucial for maintaining data integrity and type safety throughout the application. Each step required thorough planning, testing, and debugging to ensure a cohesive and functional platform.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:
                "The development journey of blog provided numerous insights. Integrating multiple technologies highlighted the importance of understanding each component's role and interactions. Using TypeScript and Zod together proved beneficial in catching errors early, enhancing code reliability and maintainability. Building the backend with Cloudflare Workers taught valuable lessons in serverless architecture and efficient deployment strategies. Implementing JWT-based authentication emphasized the need for secure token management and user session protection. Creating a responsive UI with React and Tailwind CSS underscored the significance of design in enhancing user engagement. Overall, the project emphasized the value of adopting modern web development practices and the continuous learning and adaptation necessary to keep up with evolving technologies.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'A Modern Blogging Platform',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "This is a cutting-edge blogging platform designed to provide a seamless and efficient user experience for both bloggers and readers. Built with a robust technology stack, it enables users to create, update, and manage blog posts with ease. The application features a secure authentication system, a scalable backend, and a responsive frontend, ensuring optimal performance and usability. By leveraging the latest web technologies and best practices.",
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