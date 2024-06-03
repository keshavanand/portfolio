import Switcher from "./Switcher";

export function Header(){
    return (
        <div className="dark:bg-gray-900 animate-moving-line sticky top-0 z-50 bg-white px-56 h-16 grid grid-cols-12 gap-36 shadow-md bg-cover bg-center bg-[url('./bg.png')] dark:bg-[url('#')]">
            <a href="#dashboard" className="dark:text-white dark:bg-black dark:hover:bg-gray-700 text-lg text-center text-gray-600 w-32 mb-2 mt-2 pt-2 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl active:text-base active:duration-100 rounded-lg">
                <span>Dashboard</span>
            </a>
            <a href="#Projects"className="dark:text-white  dark:bg-black dark:hover:bg-gray-700  text-lg text-center text-gray-600 w-32 mb-2 mt-2 pt-2 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl active:text-base active:duration-100 rounded-lg">
                <span>Projects</span>
            </a>
            <a href="#About" className="dark:text-white  dark:bg-black dark:hover:bg-gray-700  text-lg text-center text-gray-600 w-32 mb-2 mt-2 pt-2 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl active:text-base active:duration-100 rounded-lg ">
                <span>About</span>
            </a>
            <div className="dark:bg-black text-xl text-center text-black-600 bg-gray-200 w-12 h-12 mb-2 mt-2 pt-0 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl hover:ring-2 ring-gray-500 active:text-base active:duration-100 rounded-lg col-start-8">
                <button className="max-w-24 ">
                    <Switcher/>
                </button>
            </div>
        </div>
    )
}