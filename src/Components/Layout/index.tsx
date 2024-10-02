import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

export default function Layout({ children } : { children: React.ReactNode }){
    // Estado para controlar o menu hambúrguer
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
          <header 
            className="w-full z-[1000] fixed
               bg-black flex justify-around py-6 px-8 
               max-[864px]:px-8 max-[864px]:py-6 max-[864px]:justify-between max-[412px]:relative max-[412px]:px-5">
            <div>
                <h1 className="font-bold text-xl text-gray-200">
                    VS <strong className="font-bold text-bold text-purple-600">DEV</strong>
                </h1>
            </div>
            <div className="max-[412px]:block hidden">
            <IoMenu className='w-5 h-5 text-gray-50 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
            </div>
            <nav className="flex items-center text-sm text-gray-400 font-light justify-center gap-5 max-[412px]:hidden">
                <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#home">Início</a>
                <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#about">Sobre</a>
                <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#experiencies">Projetos</a>
                <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#contact">Contato</a>
            </nav>
          </header>
          <div className={`w-screen p-8 absolute top-16 bg-black text-gray-200 text-sm flex flex-col items-end gap-4 overflow-hidden animate-fade-down ${isOpen ? 'max-h-60 py-4' : 'hidden'}`}>
              <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#home" onClick={() => setIsOpen(false)}>Início</a>
              <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#about" onClick={() => setIsOpen(false)}>Sobre</a>
              <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#experiencies" onClick={() => setIsOpen(false)}>Projetos</a>
              <a className="hover:text-purple-700 duration-200 cursor-pointer" href="#contact" onClick={() => setIsOpen(false)}>Contato</a>
          </div>
          <section className="bg-gray-950 max-[864px]:overflow-x-hidden">
            {children}
          </section>
        </main>
    )
}
