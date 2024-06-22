/* eslint-disable react/prop-types */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from "framer-motion";
import {FaGithub} from "react-icons/fa";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


export const Slide = ({features, dicts})=>{

    return <div>
        {/* Your first component */}
        {/* Blog django */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mb-16 ">
            <dl className="mt-10 px-2 space-y-10 order-last lg:order-first">
                {features.map((item,index) => (
                    <div key={index} className="relative">
                        <dt>
                            <motion.div 
                                whileHover={{
                                    scale: "1.2",
                                }}
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                            >
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </motion.div>
                            <p className="ml-16 text-xl text-gray-800  leading-6 font-bold dark:text-white">
                                {item.name}
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base font-semibold text-gray-500 :darktext-gray-500">
                            {item.description}
                        </dd>
                    </div>
                ))}
            </dl>
            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <div className="flex px-6 flex-col rounded-xl">
                    <motion.div
                        className="m-auto lg:w-11/12 relative"
                        whileHover={{
                            scale: 1.2,
                        }}
                    >
                        <Zoom zoomMargin={40} zoomZindex={100}>
                            <img
                                className="relative mx-auto rounded-xl border-gray-500 border-2 h-84"
                                width={490}
                                height={490}
                                src={dicts.image}
                                alt="image"
                            />
                        </Zoom>
                    </motion.div>
                    <div className="flex flex-col px-6 py-4">
                        <div className="flex justify-between">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                                {dicts.name}
                            </h2>
                            {/* links */}
                            <div className="flex gap-6">
                                <motion.a
                                    whileHover={{
                                        scale: 1.2,
                                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                                    }}
                                    whileTap={{ scale: 0.8 }}
                                    alt="github"
                                    href={dicts.git}
                                >
                                    <FaGithub aria-label="github" size={28} />
                                </motion.a>

                            </div>
                        </div>
                        {/* Tags */}
                        <div className="mt-3 flex pb-4 border-b-2 border-grey-200 gap-2 flex-wrap">
                            {dicts.libraries.map((item,index)=>(
                                <motion.a key={index}
                                    whileHover={{
                                        scale: 1.2,
                                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                                    }}
                                    whileTap={{ scale: 0.8 }}
                                    href={item.link}
                                    className=" text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-800 text-cyan-300 rounded-full"
                                >
                                    <img
                                        className="h-8 rounded-full"
                                        width={45}
                                        src={item.image}
                                        alt=""
                                    />
                                    {item.name}
                            </motion.a>

                            ))}
                            
                        </div>
                        {/* Description */}
                        <div className="py-4  text-gray-800 font-semibold dark:text-gray-500 ">
                            {dicts.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}