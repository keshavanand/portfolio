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
        name: 'Blog Web Application',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "A comprehensive blog application built with Django, featuring user authentication, tagging, post recommendations, full-text search, and a robust commenting system. The project emphasizes SEO optimization and responsive design to enhance user engagement and search engine visibility.",
        libraries: [{link:"https://www.djangoproject.com/", image:"./django-logo.png", name:"Django Framework", icon:""},
                    {link:"https://django-taggit.readthedocs.io/en/latest/", image:"https://avatars.githubusercontent.com/u/99400294?s=64&v=4", name:"Django Taggit", icon:""},
                    {link:"https://www.postgresql.org/", image:"https://www.postgresql.org/media/img/about/press/elephant.png", name:"PostgreSQL"},
                    {link:"https://getbootstrap.com/", image:"https://framerusercontent.com/images/btbksTQnswjezUKyzZmXPOtLkKQ.jpg", name:"Bootstrap"},
                    {link:"https://www.javascript.com/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png", name:"JavaScript"},
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
        name: 'Socail App',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "A dynamic social networking platform developed using Django and Django Channels, enabling users to share images, follow others, and receive real-time notifications. The site includes social authentication, image bookmarking, and interactive features to foster user interaction and community building.",
        libraries: [{link:"https://www.djangoproject.com/", image:"./django-logo.png", name:"Django Framework", icon:""},
                    {link:"https://channels.readthedocs.io/en/latest/", image:"https://user-images.githubusercontent.com/6927678/36393573-789e7bc2-15b0-11e8-9a31-49f58e03a5c9.png", name:"Django Channels"},
                    {link:"https://www.postgresql.org/", image:"https://www.postgresql.org/media/img/about/press/elephant.png", name:"PostgreSQL"},
                    {link:"https://www.javascript.com/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png", name:"JavaScript"},
                    {link:"https://oauth.net/2/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/598px-Oauth_logo.svg.png", name:"OAuth"}
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
        name: 'Shop App',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "An e-commerce platform created with Django, featuring a product catalog, shopping cart, and order management system. The project integrates a payment gateway for secure transactions and employs Celery and RabbitMQ for efficient asynchronous task handling, ensuring a smooth and reliable user experience.",
        libraries: [{link:"https://www.djangoproject.com/", image:"./django-logo.png", name:"Django Framework", icon:""},
                    {link:"https://pypi.org/project/celery/", image:"https://awesome-astra.github.io/docs/img/celery/celery_logo.png", name:"Celery"},
                    {link:"https://www.rabbitmq.com/", image:"https://static-00.iconduck.com/assets.00/rabbitmq-icon-484x512-s9lfaapn.png", name:"RabbitMQ"},
                    {link:"https://stripe.com/en-ca", image:"https://logos-world.net/wp-content/uploads/2021/03/Stripe-Emblem.png", name:"Stripe"},
                    {link:"https://www.javascript.com/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png", name:"JavaScript"},
                ],
        image: "./shop.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}