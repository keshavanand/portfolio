import {FaBrain} from "react-icons/fa";
import {SiFuturelearn,} from "react-icons/si"
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Slide } from "../Slide";

export const Hospital = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:"The app is built with the Android SDK and Kotlin, utilizing the Room persistence library for database operations. The MVVM architecture separates the UI from business logic, ensuring a clean codebase. Shared Preferences store nurse login credentials, allowing persistent login sessions for a better user experience." ,
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:"Integrating Room with MVVM for a maintainable codebase was challenging. Careful planning was required to design a relational database schema for Patient, Test, and Nurse entities. Creating an intuitive UI involved thoughtful design and iterative testing to ensure easy navigation and data entry.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:"The project highlighted the value of MVVM for maintainability and separation of concerns. Room proved effective for managing SQLite databases, while Shared Preferences enhanced the user experience by storing login credentials. Overall, it provided insights into efficient Android app development from backend to frontend",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Hospital management app',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "The Hospital Nurse Assistant App is an Android application designed to assist nurses in managing and tracking various medical tests performed on patients. ",
        libraries: [{link:"https://kotlinlang.org/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png", name:"Kotlin", icon:""},
                    {link:"https://developer.android.com/studio", image:"https://image.pngaaa.com/56/5356056-middle.png", name:"Android SDK"},
                    
                ],
        image: "./Hospital_android_l.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}