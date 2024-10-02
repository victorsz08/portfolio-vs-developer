import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function About() {
  return (
    <section className="flex justify-center items-center h-screen w-screen animate-fade-right animate-delay-200 max-[864px]:p-8 max-[480px]:p-4">
      <div id="about" className="p-10 rounded-xl bg-gray-900 flex justify-between gap-12 items-start max-[864px]:w-full max-[864px]:text-center max-[864px]:justify-center">
        <img
          src="/image.jpeg"
          className="rounded-lg object-cover h-[25rem] w-[30rem] max-[864px]:hidden"
        />
        <div className="flex flex-col h-full justify-between gap-4 items-start w-[30rem] max-[864px]:w-[20rem] max-[864px]:gap-10 max-[864px]:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-normal text-purple-600 text-xl">Quem Sou</h2>
            <h1 className="text-4xl font-bold text-gray-100">
              Victor Siqueira
            </h1>
          </div>
          <div className="flex flex-col gap-6 justify-start">
            <span 
                className="text-base font-normal text-gray-500 w-[30rem] max-[864px]:w-[20rem] max-[480px]:text-sm"
            >
              Olá! Meu nome é Victor Siqueira, atualmente cursando Análise e
              Desenvolvimento de Sistemas, me especializando em Desenvolvimento
              Web. Atualmente tenho conhecimento sólido em desenvolvimento Full
              Stack.
            </span>
            <span
              className="text-base font-normal text-gray-500 w-[30rem] max-[864px]:w-[20rem] max-[480px]:text-sm"
            >
              Trabalhei como UI Design em uma empresa de uniformes e acessórios
              personalizados, com isso tive a oportunidade de aprimorar minha
              criação de interfaces intuitivas, atualmente trabalho como
              freelancer em desenvolvimento Web Full Stack.
            </span>
          </div>
          <div className="flex items-center justify-start gap-4">
            <a
              href="https://github.com/victorsz08?tab=repositories"
              target="_blank"
              className="p-5 border-purple-600 border rounded-xl max-[480px]:p-3"
            >
              <IoLogoGithub className="w-8 h-8 cursor-pointer text-purple-600 hover:text-purple-800 duration-200 max-[480px]:w-6 max-[480px]:h-6"/>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-siqueira-893177272/"
              target="_blank"
              className="p-5 border-purple-600 border rounded-xl max-[480px]:p-3"
            >
              <IoLogoLinkedin className="w-8 h-8 cursor-pointer text-purple-600 hover:text-purple-800 duration-200 max-[480px]:w-6 max-[480px]:h-6" />
            </a>
            <a
              href="mailto:victorszdeveloper@gmail.com"
              target="_blank"
              className="p-5 border-purple-600 border rounded-xl max-[480px]:p-3"
            >
              <IoMail className="w-8 h-8 cursor-pointer text-purple-600 hover:text-purple-800 duration-200 max-[480px]:w-6 max-[480px]:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
