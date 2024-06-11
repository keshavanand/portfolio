import {FaBrain} from "react-icons/fa";
import {SiFuturelearn,} from "react-icons/si"
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Slide } from "../Slide";

export const Ksi = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:"We utilized Python for the entire project, leveraging libraries such as Pandas and NumPy for data preprocessing and exploration. Scikit-learn and TensorFlow were used for building and training machine learning models. Flask was chosen for deploying the model as a web API, and PostgreSQL was used for storing and managing data. The combination of these technologies provided a robust framework for developing, training, and deploying the predictive model.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:"One of the significant challenges was handling the high dimensionality and missing data within the dataset. We needed to implement effective data cleaning and feature selection techniques to ensure the model's accuracy and efficiency. Another challenge was deploying the model as a web API, which required ensuring that the API could handle real-time requests and provide reliable predictions under varying load conditions. Our thought process involved iterative testing and optimization of both the machine learning model and the API deployment to address these challenges.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:"This project highlighted the importance of thorough data preprocessing and feature selection in building an effective machine learning model. We learned the value of using domain expertise to inform feature engineering and selection, which significantly improved the model's performance. Additionally, deploying the model as a web API provided insights into the practical considerations of making machine learning models accessible for real-time use, including handling serialization and ensuring the API's robustness and scalability.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Predictive Traffic Accident Severity Classifier',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "This group project focused on developing a machine learning model to predict the severity of traffic accidents using the KSI (Killed or Seriously Injured) dataset. ",
        libraries: [{link:"https://www.python.org/", image:"https://banner2.cleanpng.com/20180715/phb/kisspng-python-javascript-logo-clojure-python-logo-download-5b4ba705f356d3.4338622815316846139967.jpg", name:"Python"},
                    {link:"https://flask.palletsprojects.com/en/3.0.x/", image:"https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png", name:"Flask"},
                    {link:"https://react.dev/", image:"https://1000logos.net/wp-content/uploads/2023/10/React-Logo.png", name:"React"},
                    {link:"https://pandas.pydata.org/", image:"https://i.pinimg.com/originals/28/ce/bf/28cebfa3c75ff7815999b0c81a826af6.jpg", name:"Pandas"},
                    {link:"https://numpy.org/", image:"https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png", name:"Numpy"},
                    {link:"https://scikit-learn.org/stable/", image:"https://p7.hiclipart.com/preview/309/384/987/scikit-learn-python-computer-icons-scikit-image-machine-learning-learning.jpg", name:"Scikit-learn"},
                ],
        image: "./ksi_ai.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}

export const Spam = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:"The development stack included Python for its extensive libraries and tools for machine learning and data science. NLTK was used for natural language processing tasks such as tokenization and stopword removal. Pandas facilitated data manipulation and exploration. Scikit-learn provided essential tools for feature extraction using CountVectorizer and TfidfTransformer, and for implementing and evaluating the Naive Bayes classifier. The entire development process was carried out in Jupyter Notebook for ease of experimentation and visualization",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:"One major challenge was effectively preprocessing the text data to improve the model's accuracy. This included handling various forms of spam text, tokenization, and transforming text data into numerical features. We applied NLTK for tokenization and stopword removal, and used CountVectorizer and TfidfTransformer for feature extraction. Ensuring the balance of the dataset and managing the variability in spam and non-spam comments also required careful consideration.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:"This project reinforced the importance of thorough data preprocessing and feature extraction in text classification tasks. We learned that combining different text processing techniques, such as tokenization and TF-IDF transformation, significantly enhances the model's performance. Additionally, cross-validation and careful evaluation of the model on separate test data are crucial for ensuring its robustness and generalizability. Deploying the model for real-time prediction provided insights into the practical challenges of implementing machine learning models in real-world applications.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Spam Detection in Social Media Comments',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "This project aimed to develop a spam detection system for social media comments using machine learning techniques. The system analyzes text data from social media comments, classifies them as spam or non-spam, and deploys the classifier for real-time predictions. The approach involved data preprocessing, feature extraction, model training, and evaluation using a Naive Bayes classifier to achieve high accuracy in spam detection.",
        libraries: [{link:"https://www.python.org/", image:"https://banner2.cleanpng.com/20180715/phb/kisspng-python-javascript-logo-clojure-python-logo-download-5b4ba705f356d3.4338622815316846139967.jpg", name:"Python"},
                    {link:"https://www.nltk.org/", image:"https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png", name:"NLTK"},
                    {link:"https://pandas.pydata.org/", image:"https://i.pinimg.com/originals/28/ce/bf/28cebfa3c75ff7815999b0c81a826af6.jpg", name:"Pandas"},
                    {link:"https://scikit-learn.org/stable/", image:"https://p7.hiclipart.com/preview/309/384/987/scikit-learn-python-computer-icons-scikit-image-machine-learning-learning.jpg", name:"Scikit-learn"},
                    {link:"https://jupyter.org/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png", name:"Jupyter"},                ],
        image: "./kattperry_ai_comment.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}