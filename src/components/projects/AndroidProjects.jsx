import {FaBrain} from "react-icons/fa";
import {SiFuturelearn,} from "react-icons/si"
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Slide } from "../Slide";

export const Hospital = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:"The app is developed using the Android SDK and Kotlin, leveraging the Room persistence library to handle database operations. The MVVM architecture is employed to separate the UI from the business logic, ensuring a clean and maintainable codebase. Shared Preferences are used to store nurse login credentials, enhancing the user experience by enabling persistent login sessions. This combination of technologies ensures robust, efficient, and user-friendly application performance.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:"A key challenge was integrating Room with the MVVM architecture to create a maintainable and efficient codebase. Designing a relational database schema to represent the Patient, Test, and Nurse entities, and implementing the necessary DAO (Data Access Object) interfaces, required careful planning. Ensuring a user-friendly UI involved thoughtful design and iterative testing to provide intuitive navigation and data entry forms. Addressing these challenges required a methodical approach to both backend and frontend development.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:"This project reinforced the importance of using architectural patterns like MVVM for clear separation of concerns and maintainability. The Room persistence library proved to be an effective tool for managing SQLite databases in an Android app. Implementing Shared Preferences demonstrated its usefulness for storing small-scale data, such as login credentials, to enhance the user experience. Overall, the project provided valuable insights into efficient Android app development, from database design and management to creating a user-friendly interface.",
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
                    {link:"https://developer.android.com/training/data-storage/room", image:"./android.png", name:"Room Persistence Library"},
                    {link:"https://developer.android.com/topic/libraries/architecture/viewmodel", image:"./android.png", name:"MVVM Architecture"},
                    {link:"https://developer.android.com/training/data-storage/shared-preferences", image:"./android.png", name:"Shared Preferences"},

                ],
        image: "./Hospital_android.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}