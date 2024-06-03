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
                "Built medium like blogpost website using react as frontend, node as backend, cloudflare workers , zod as validation , typescript, prisma orm, postgres, jwt",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:
                "",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:
                "Learn how about react state management, lifecycle, tailwind,",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Medium',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "A web application for sharing blogs",
        libraries: [{link:"https://www.djangoproject.com/", image:"./django-logo.png", name:"Django Framework", icon:""},
                    {link:"https://developer.android.com/develop/ui/compose", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png", name:"Jetpack Compose"},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""}
                ],
        image: "./medium.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}