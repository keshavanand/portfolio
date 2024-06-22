import {FaBrain} from "react-icons/fa";
import {SiFuturelearn,} from "react-icons/si"
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Slide } from "../Slide";

export const Ksi = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:"We used Python with Pandas and NumPy for data preprocessing and exploration. Scikit-learn and TensorFlow were utilized for model building and training. Flask was used for deploying the model as a web API, and PostgreSQL managed data storage. This stack ensured robust development, training, and deployment.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:"Handling high dimensionality and missing data in the dataset was challenging, requiring effective data cleaning and feature selection. Deploying the model as a web API needed careful handling of real-time requests and load variations. We iteratively tested and optimized the model and API to address these issues.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:"Thorough data preprocessing and feature selection were crucial for an effective machine learning model. Domain expertise significantly improved feature engineering and model performance. Deploying the model as a web API provided practical insights into serialization, robustness, and scalability for real-time use.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Predictive Traffic Accident Severity Classifier',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "This project aimed to predict traffic accident severity using the KSI dataset. We developed a machine learning model and deployed it as a web API for real-time inference. The goal was to aid urban planning and preventive measures by forecasting accident severity based on environmental conditions, road types, and involved parties.",
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
            description:"The stack included Python, NLTK for text processing, Pandas for data manipulation, and Scikit-learn for feature extraction and model implementation. CountVectorizer and TfidfTransformer converted text into numerical vectors, essential for the Naive Bayes classifier.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:"Handling text variability, such as slang and spam tactics, was challenging. Robust preprocessing with NLTK normalized the text. Iterating through preprocessing steps and model parameters helped find the optimal configuration for accurate spam detection.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:"The project highlighted the importance of data preprocessing in text classification. Tokenization and TF-IDF transformation improved model performance. Cross-validation ensured model reliability, and deploying the classifier in real-time emphasized practical operational considerations.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Spam Detection in Social Media Comments',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "The Comment Spam Detection System uses machine learning to identify spam in user comments. Python's extensive libraries facilitated data preprocessing, feature extraction, and model training, while Jupyter Notebook enabled easy experimentation and visualization.",
        libraries: [{link:"https://www.python.org/", image:"https://banner2.cleanpng.com/20180715/phb/kisspng-python-javascript-logo-clojure-python-logo-download-5b4ba705f356d3.4338622815316846139967.jpg", name:"Python"},
                    {link:"https://www.nltk.org/", image:"https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png", name:"NLTK"},
                    {link:"https://pandas.pydata.org/", image:"https://i.pinimg.com/originals/28/ce/bf/28cebfa3c75ff7815999b0c81a826af6.jpg", name:"Pandas"},
                    {link:"https://scikit-learn.org/stable/", image:"https://p7.hiclipart.com/preview/309/384/987/scikit-learn-python-computer-icons-scikit-image-machine-learning-learning.jpg", name:"Scikit-learn"},
                    {link:"https://jupyter.org/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png", name:"Jupyter"},                ],
        image: "./kattperry_ai_comment.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}

export const Weapon = () => {
    const backcountryFeatures = [
        {
            id: 1,
            name: "Stack Explanation",
            description:"The development stack included Python for machine learning and computer vision. OpenCV handled image and video processing, and YOLOv3 provided accurate object detection. NumPy facilitated efficient data handling and manipulation for image processing tasks.",
            icon: GlobeAltIcon,
        },
        {
            id: 2,
            name: "Problems and Thought Process",
            description:"A primary challenge was optimizing YOLOv3 for weapon detection, involving correct loading of weights and configuration files. Processing video streams in real-time required balancing speed and accuracy. Setting confidence thresholds and using non-maxima suppression helped filter detections and reduce duplicates.",
            icon: FaBrain,
        },
        {
            id: 3,
            name: "Lessons Learned",
            description:"We learned the importance of advanced object detection algorithms like YOLOv3 for real-time applications. Proper model configuration and parameter tuning were critical. Integrating the detection model with video streams provided insights into maintaining stable video feeds and efficient frame processing.",
            icon: SiFuturelearn,
        },
    ];
    
    const dict = {
        name: 'Real-Time Weapon Detection Using YOLOv3',
        git: "https://github.com/keshavanand",
        deploy: "#",
        description: "This project develops a real-time weapon detection system using the YOLOv3 algorithm. It detects and identifies weapons in video streams or images, enhancing security in various environments. The system processes video input, detects weapons, and displays results in real-time.",
        libraries: [{link:"https://www.python.org/", image:"https://banner2.cleanpng.com/20180715/phb/kisspng-python-javascript-logo-clojure-python-logo-download-5b4ba705f356d3.4338622815316846139967.jpg", name:"Python"},
                    {link:"https://opencv.org/", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/OpenCV_Logo_with_text.png/487px-OpenCV_Logo_with_text.png", name:"OpenCV"},
                    {link:"https://github.com/ultralytics/yolov3", image:"https://raw.githubusercontent.com/ultralytics/assets/main/yolov3/banner-yolov3.png", name:"YOLOv3"},
                    {link:"https://numpy.org/", image:"https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png", name:"Numpy"},
        ],
        image: "./weapon_ai.png"
    }
    return <Slide features={backcountryFeatures} dicts={dict} />
    
}