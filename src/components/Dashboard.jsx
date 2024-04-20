import { LuRocket } from "react-icons/lu";
export function Dashboard(){
    return (
        <div id="dashboard" className="dark:bg-gray-800 pt-20 mx-64 animate-moving-line ">
            <div className=" text-indigo-600 text-2xl sm:text-3xl font-bold">
                Hey there! My name is
            </div>
            <div className="dark:text-white text-black text-6xl sm:text-8xl lg:text-9xl font-bold">
                Keshav Anand Singh. 
            </div>
            <div className="dark:text-white text-black text-2xl sm:text-3xl font-medium sm:font-bold pt-10">
                Software Engineer.
                <span className="text-indigo-500 text-2xl text-center sm:text-3xl font-medium sm:font-bold pt-10"> A Full-Stack Developer with an interest in Artifical Intelligence</span>
            </div>
            <div className=" text-black flex flex-row text-md md:text-lg lg:text-2xl font-md md:font-lg lg:font-xl pt-10">
                <div className="text-4xl my-auto text-indigo-500"><LuRocket></LuRocket></div>
                <p className="dark:text-gray-400 ml-5 mt-1 text-center font-semibold text-xl sm:text-2xl">Currently exploring new opportunities and working on some side projects.</p>
            </div>
            <div className="pt-10 flex flex-wrap justify-center sm:justify-start gap-4 flex-row space-x-3 mb-3">
                <a href="https://github.com/keshavanand">
                    <button type="button" className="inline-flex justify-around h-12 w-32 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <img alt="github-link" className="w-8 h-8" src="https://img.icons8.com/ios-filled/50/000000/github.png"></img>
                        <span className="ml-2 font-md text-base sm:text-lg">Github</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/keshav-anand-singh-8b4427154/">
                    <button type="button" className="inline-flex justify-around h-12 w-32 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <img alt="linkdin-link" className="w-8 h-8" src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"></img>
                        <span className="ml-2 font-md text-base sm:text-lg">Linkdin</span>
                    </button>
                </a>
                <a href="mailto:keshavanandsingh89@gmail.com">
                    <button type="button" className="inline-flex justify-around h-12 w-32 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <img alt="email-link" className="w-8 h-8" src="https://img.icons8.com/ios-filled/50/000000/mail.png"></img>
                        <span className="ml-2 font-md text-base sm:text-lg">E-Mail</span>
                    </button>
                </a>
            </div>
        </div>
    )
}