import {FaBrain} from "react-icons/fa";
import {SiFuturelearn,} from "react-icons/si"
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Slide } from "../Slide";

export const Blog = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:
                "For the blog website, I utilized Django as the web framework due to its robustness and built-in features. PostgreSQL was chosen for the database to leverage its full-text search capabilities. The front-end was developed using Bootstrap to ensure responsive design, while JavaScript was used to enhance interactive features.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:
                "One of the significant challenges was implementing a scalable tagging and recommendation system. Initially, the tagging was simple, but as the number of posts grew, the system needed optimization to handle large datasets efficiently. This led to a deeper understanding of indexing and query optimization in PostgreSQL.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:
                "Through this project, I learned the importance of planning database schema with scalability in mind. Implementing SEO features also taught me how critical it is to make a site search-engine-friendly from the start. Additionally, balancing feature richness with performance was a key takeaway.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Django Blog Web Application',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "A cross platform mobile app for browsing movies, built with KMM, Kotlin, Ktor and decompose",
        libraries: [{link:"https://www.djangoproject.com/", image:"./django-logo.png", name:"Django Framework", icon:""},
                    {link:"https://developer.android.com/develop/ui/compose", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png", name:"Jetpack Compose"},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""}
                ],
        image: "./blog-django.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}

export const Social = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:
                "The social website was built using Django for the backend, leveraging Django Channels for real-time notifications. PostgreSQL was used for the database, while the front-end relied on HTML, CSS, and JavaScript for dynamic content. Social authentication was integrated using the OAuth protocol.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:
                "Managing real-time updates and notifications posed a significant challenge, particularly in ensuring the system remained performant under heavy load. Implementing OAuth for social authentication also required careful handling of security concerns and user data privacy.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:
                "This project highlighted the complexities of real-time web applications and the importance of efficient data handling and asynchronous processing. The experience reinforced the need for robust security practices, especially when dealing with third-party authentication services.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Django Socail App',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "A cross platform mobile app for browsing movies, built with KMM, Kotlin, Ktor and decompose",
        libraries: [{link:"https://www.djangoproject.com/", image:"./django-logo.png", name:"Django Framework", icon:""},
                    {link:"https://developer.android.com/develop/ui/compose", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png", name:"Jetpack Compose"},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""}
                ],
        image: "./social.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}

export const Shop = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:
                "The online shop was developed using Django, with Celery and RabbitMQ handling asynchronous tasks such as order processing and notifications. Stripe was integrated for payment processing, and the front-end was built using Bootstrap for responsiveness.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:
                "Integrating a payment gateway was particularly challenging due to the strict security requirements and the need for seamless user experience during transactions. Additionally, managing session data efficiently to maintain shopping cart contents across sessions required careful consideration.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:
                "This project underscored the importance of securing user data, especially during financial transactions. It also taught me the value of asynchronous processing for handling background tasks, which significantly improves the performance and responsiveness of the application.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Django Blog Web Application',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "A cross platform mobile app for browsing movies, built with KMM, Kotlin, Ktor and decompose",
        libraries: [{link:"https://www.djangoproject.com/", image:"./django-logo.png", name:"Django Framework", icon:""},
                    {link:"https://developer.android.com/develop/ui/compose", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png", name:"Jetpack Compose"},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""},
                    {link:"", image:"", name:""}
                ],
        image: "./shop.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}