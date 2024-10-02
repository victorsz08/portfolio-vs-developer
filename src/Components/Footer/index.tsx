import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { RiCopyrightFill } from "react-icons/ri";




export default function Footer(){

    return (
        <footer className="w-screen bg-gray-900 flex justify-around items-center h-44 max-[480px]:h-32 max-[480px]:px-4 max-[480px]:gap-3">
            <div className="flex justify-start gap-1 items-center">
            <RiCopyrightFill className="text-gray-500 w-3 h-3 " />
                <p className="text-gray-500 font-normal max-[480px]:text-xs">Copyright 2024 - Victor S Developer - Portfólio</p>
            </div>
            <div className="flex items-center justify-start gap-4">
            <a
              href="https://github.com/victorsz08?tab=repositories"
              target="_blank"
              className="p-2 border-purple-600 border rounded-xl"
            >
              <IoLogoGithub className="w-4 h-4 cursor-pointer text-purple-600 hover:text-purple-800 duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-siqueira-893177272/"
              target="_blank"
              className="p-2 border-purple-600 border rounded-xl"
            >
              <IoLogoLinkedin className="w-4 h-4 cursor-pointer text-purple-600 hover:text-purple-800 duration-200" />
            </a>
            <a
              href="mailto:victorszdeveloper@gmail.com"
              target="_blank"
              className="p-2 border-purple-600 border rounded-xl"
            >
              <IoMail className="w-4 h-4 cursor-pointer text-purple-600 hover:text-purple-800 duration-200" />
            </a>
          </div>
        </footer>
    )
}