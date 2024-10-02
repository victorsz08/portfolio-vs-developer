import { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";



export default function Home(){
    //Animação de texto
    const text = "Desenvolvedor Front End | Web Full Stack";
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [blink, setBlink] = useState(true); 

    useEffect(() => {
        if (charIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[charIndex]);
                setCharIndex(charIndex + 1);
            }, 80);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, text]);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink((prev: any) => !prev);
        }, 500); 

        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <section id="home" className="h-screen flex justify-center w-full">
            <div className="flex w-screen justify-around items-center lg:w-full max-[864px]:px-8 max-[864px]:relative">
                <div className="flex flex-col justify-start items-start gap-8 " >
                    <div className="flex flex-col gap-3 max-[412px]:justify-center max-[412px]:items-center max-[412px]:text-center">
                    <h1 className="font-bold text-7xl text-gray-100 max-[412px]:text-5xl">
                        Victor <strong className="font-bold text-purple-600">Siqueira</strong>
                    </h1>
                    <span className="text-lg ml-3 flex items-center text-gray-400 font-normal max-[412px]:text-base">
                            {displayText}
                            <span className={`ml-1 text-purple-600 font-bold ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
                        </span>
                    </div>
                    <div className="flex ml-3 justify-start items-center gap-4 max-[412px]:jusify-center max-[412px]:flex-col max-[412px]:justify-center max-[412px]:ml-0 max-[412px]:w-full">
                        <a 
                            href="/src/assets/curriculo.pdf" 
                            className="px-3 py-2 text-sm text-gray-200 rounded-lg bg-purple-600 
                            hover:bg-purple-800 duration-200" 
                            download="curriculo.pdf">
                                Download Currículo
                        </a>
                        <div className="flex items-center justify-center gap-4 max-[412px]:flex max-[412px]:items-center max-[412px]:justify-center">
                        <a href="https://github.com/victorsz08?tab=repositories" target="_blank">
                            <IoLogoGithub className="w-8 h-8 cursor-pointer text-purple-600 hover:text-purple-800 duration-200"/>
                        </a>    
                        <a href="https://www.linkedin.com/in/victor-siqueira-893177272/" target="_blank">
                            <IoLogoLinkedin className="w-8 h-8 cursor-pointer text-purple-600 hover:text-purple-800 duration-200"/>
                        </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-96 max-[864px]:w-86 max-[864px]:absolute max-[412px]:w-60 max-[412px]:translate-x-[-50px]" src="/src/assets/icon.svg"/>
                </div>
            </div>
        </section>
    )
}