import { useState, useEffect, useRef } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3, IoLogoNodejs, IoLogoSass } from "react-icons/io5";
import { RiBootstrapFill, RiHtml5Fill, RiJavascriptFill, RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql } from "react-icons/si";

export default function HardSkill() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="flex h-screen justify-center items-center px-80 max-[864px]:px-10 max-[480px]:px-4">
            <div className="flex flex-col gap-12 bg-gray-900 p-10 rounded-lg">
                <div className={`flex flex-col gap-1 justify-center items-center ${isVisible ? 'animate-fade-up animate-delay-100' : ''}`}>
                    <h3 className="text-purple-600 font-medium text-base">Hard Skills</h3>
                    <h1 className="text-semibold text-3xl font-bold text-gray-100">Tecnologias.</h1>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-8">
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[200ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <RiJavascriptFill className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">Javascript</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[400ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <BiLogoTypescript className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">Typescript</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[600ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <RiReactjsLine className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">React</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[800ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <RiNextjsFill className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">Next.js</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[1000ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <IoLogoNodejs className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">Node.js</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[1200ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <SiMysql className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">MySQL</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[1400ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <BiLogoPostgresql className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">PostgreSQL</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[1600ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <RiTailwindCssFill className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">TailwindCSS</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[1800ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <RiHtml5Fill className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">HTML5</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[2000ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <IoLogoCss3 className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">CSS3</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[2200ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <IoLogoSass className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">Sass</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[2400ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <RiBootstrapFill className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">Bootstrap</p>
                    </div>
                    <div className={`flex flex-col gap-2 justify-center items-center ${isVisible ? 'animate-fade-right animate-delay-[2600ms]' : ''}`}>
                        <span className="p-4 rounded-md border border-purple-600">
                            <SiExpress className="text-purple-600 w-8 h-8" />
                        </span>
                        <p className="font-light text-gray-400 text-xs">Express.js</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
