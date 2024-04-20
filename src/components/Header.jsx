import Switcher from "./Switcher";

export function Header(){
    return (
        <div className="dark:bg-gray-900 animate-moving-line sticky top-0 z-50 bg-white px-56 h-16 grid grid-cols-12 gap-36 shadow-md">
            <div className="dark:text-white dark:bg-black dark:hover:bg-gray-700 text-xl text-center text-gray-600 w-40 mb-2 pt-4 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl active:text-base active:duration-100 rounded-lg">
                <a href="#dashboard">Dashboard</a>
            </div>
            <div className="dark:text-white  dark:bg-black dark:hover:bg-gray-700  text-xl text-center text-gray-600 w-40 mb-2 pt-4 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl active:text-base active:duration-100 rounded-lg">
                <a href="#Projects">Projects</a>
            </div>
            <div className="dark:text-white  dark:bg-black dark:hover:bg-gray-700  text-xl text-center text-gray-600 w-40 mb-2 pt-4 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl active:text-base active:duration-100 rounded-lg ">
                <a href="#About">About</a>
            </div>
            <div className="dark:bg-black text-xl text-center text-black-600 bg-gray-200 w-12 h-12 mb-2 mt-2 pt-0 duration-700 hover:text-black hover:bg-gray-200 hover:text-2xl hover:ring-2 ring-gray-500 active:text-base active:duration-100 rounded-lg col-start-8">
                <button className="max-w-24 ">
                    <Switcher/>
                </button>
            </div>
        </div>
    )
}