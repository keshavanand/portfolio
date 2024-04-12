import { LuRocket } from "react-icons/lu";
export function Dashboard(){
    return (
        <div id="dashboard" className="pt-20 mx-64 animate-moving-line ">
            <div className=" text-indigo-600 text-2xl sm:text-3xl font-bold">
                Hey there! My name is
            </div>
            <div className=" text-black text-6xl sm:text-8xl lg:text-9xl font-bold">
                Keshav Anand Singh. 
            </div>
            <div className=" text-black text-2xl sm:text-3xl font-medium sm:font-bold pt-10">
                Software Engineer.
                <span className="text-gray-700 dark:text-indigo-500 text-2xl text-center sm:text-3xl font-medium sm:font-bold pt-10"> A Full-Stack Developer with an interest in Artifical Intelligence</span>
            </div>
            <div className=" text-black flex flex-row text-md md:text-lg lg:text-2xl font-md md:font-lg lg:font-xl pt-10">
                <div className="text-4xl my-auto text-indigo-500"><LuRocket></LuRocket></div>
                <p className="ml-5 mt-1 text-center font-semibold text-xl sm:text-2xl">Currently exploring new opportunities and working on some side projects.</p>
            </div>
            <div>
                <button>Github</button>
                <button>Linkedin</button>
                <button>E-mail</button>
            </div>
        </div>
    )
}