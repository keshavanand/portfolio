import { GlobeAltIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import {
	FaReact,
	FaGithub,
	FaExternalLinkAlt,
	FaBrain,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiFuturelearn,
} from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Blog, Shop, Social } from "./projects/DjangoProjects";
import { useState } from "react";
import { Medium } from "./projects/NodeReactProjects";
import { Paytm } from "./projects/NextProjects";

const Projects = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true
	};

	const DjangoProjects = () => <Slider {...settings} ><Blog/><Shop/><Social/></Slider>
	const AIProjectOne = () => <Slider {...settings}><Social/><Social/></Slider>
	const AllProjects = () => <Slider {...settings}><Blog/><Social/></Slider>
	const NodeProjects = () => <Slider {...settings}><Medium/><Medium/></Slider>
	const NextProjects = () => <Slider {...settings}><Paytm/><Paytm/></Slider>


	const [showoProjects, setProjects] = useState(AllProjects);

	const renderProjects = (value) =>{
		switch(value) {
			case 'django':
				setProjects(DjangoProjects)
				break;
			case 'AI':
				setProjects(AIProjectOne)
				break;
			case 'rn':
				setProjects(NodeProjects)
				break;
			case 'next':
				setProjects(NextProjects)
				break
			default:
				setProjects(AllProjects)
		}
	}


	return (
		<div id="Projects" className="pt-1 mx-64 animate-moving-line ">
			<div className="lg:space-x-6 mt-20 xl:mt-28">
				<div className="text-black dark:text-white">
					<h2 className="flex gap-2 font-bold mb-4 text-4xl">
						<motion.div
							whileHover={{
								scale: [1, 3, 3, 1, 1],
								rotate: [0, 0, 270, 270, 0],
							}}
						>
							✏️
						</motion.div>
						Projects
						<div className="flex justify-evenly mx-auto border-2 rounded-full py-1 w-2/3 text-lg">
							<button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 hover:bg-gray-500 hover:rounded-lg focus:bg-gray-500 focus:rounded-lg" onClick={()=> renderProjects('django')}>Django</button>
							<button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 hover:bg-gray-500 hover:rounded-lg focus:bg-gray-500 focus:rounded-lg" onClick={()=> renderProjects('AI')}>AI</button>
							<button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 hover:bg-gray-500 hover:rounded-lg focus:bg-gray-500 focus:rounded-lg" onClick={()=> renderProjects('android')}> Android Studio</button>
							<button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 hover:bg-gray-500 hover:rounded-lg focus:bg-gray-500 focus:rounded-lg" onClick={()=> renderProjects('rn')}>React+Node</button>
							<button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 hover:bg-gray-500 hover:rounded-lg focus:bg-gray-500 focus:rounded-lg" onClick={()=> renderProjects('next')}>Next</button>
						</div>
					</h2>
							{showoProjects}

					</div>
				</div>
			</div>
	);
};

export default Projects;