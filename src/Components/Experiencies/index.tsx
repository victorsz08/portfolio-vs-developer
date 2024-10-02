import { useState } from "react";
import Dialog from "../Dialog";
import CardExp from "./card";

interface Experience {
  title: string;
  description: string;
  technologies: string;
  age: string;
  subtitle: string;
  code?: string;
  link: string;
}

export default function Experiencies() {
  // Dados das experiências
  const experiences: Experience[] = [
    {
      title: "AeC - Claro Vendas Ativo",
      subtitle: "Sistema de Gestão",
      description:
        "Sistema de Gestão de contratos: O problema é que os operadores não tinha como salvar e fazer a gestão dos contratos acompanhar suas instalações para baterem suas metas, dessa forma eu trouxe a solução de disponibilizar um sistema de gestão dos contratos e metas para que os operadores terem uma visão de suas metas, melhorando os resultados de todas a operação. É usado por cerca de 64 operadores.",
      technologies: "NextJs / TailwindCSS / PostgreSQL / Primereact / NextAuth",
      age: "Set 2024 - Set 2024",
      link: "https://demo-ativo-notetools.vercel.app/operacao"
    },
    {
      title: "AeC - Claro Vendas Receptivo",
      subtitle: "Sistema de Gestão",
      description:
        "Sistema de Gestão de contratos, o sistema por mais que seja semelhante ao anterior, esse os contratos não são armazenados em um banco de dados em nuvem, nesse sistema, fui instruído para que os dados sejam salvos localmente, dessa forma, fui obrigado a utilizar o IndexedDB para salvar os contratos com modificações de metas e diferentes tipos de contratos. Utilizado por cerca de 140 operadores.",
      technologies: "NextJs / TailwindCSS / PostgreSQL / Primereact / NextAuth",
      age: "Ago 2024 - Set 2024",
      link: "https://demo-vendas-notetools.vercel.app/operacao"
    },
    {
      title: "Cinestream - Site de Filmes",
      subtitle: "Catálogo de Filmes e Séries",
      code: "https://github.com/victorsz08/cinestreamhd",
      description:
        "Catálogo de filmes online com integração de várias APIs. Oferece buscas e filtros personalizados.",
      technologies: "NextJs / TailwindCSS / PostgreSQL / Primereact",
      age: "Abr 2024 - Mai 2024",
      link: "https://www.cinestreamhd.top"
    },
  ];

  // Estado para rastrear o card selecionado
  const [selectedCard, setSelectedCard] = useState<Experience | null>(null);

  // Função para abrir o modal com base no card clicado
  const openModal = (card: Experience) => {
    setSelectedCard(card); // Define o card clicado
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedCard(null); // Fecha o modal
  };

  return (
    <section
      id="experiencies"
      className="py-8 flex justify-start gap-8 px-24 min-h-screen max-[864px]:px-10 max-[480px]:px-4 max-[480px]:gap-4"
    >
      {/* Modal condicional com base no card clicado */}
      {selectedCard && (
        <Dialog
          visible={!!selectedCard}
          onHide={closeModal}
          header={selectedCard.title} // Título dinâmico do modal
          subtitle={selectedCard.age} // Subtítulo dinâmico do modal
        >
          <span className="flex flex-col gap-2">
            <p>{selectedCard.description}</p>
            <strong className="text-purple-600">
              Tecnologias usadas: {selectedCard.technologies}
            </strong>
          </span>
        </Dialog>
      )}

      <hr className="border-l-4 border-purple-600 min-h-screen max-[864px]:h-full" />
      <div className="flex flex-col gap-10">
        <section className="flex justify-start animate-fade-down animate-delay-300 items-start flex-col gap-4">
          <h1 className="font-semibold text-3xl text-gray-100">
            Experiências.
          </h1>
          <h4 className="text-purple-600 text-base font-normal">
            Projetos Concluídos
          </h4>
        </section>
        <div className="grid grid-cols-2 gap-8 justify-between max-[864px]:grid-cols-1 ">
          {experiences.map((exp) => (
            <CardExp
              key={exp.title}
              title={exp.title}
              subtitle={exp.subtitle}
              age={exp.age}
              link={exp.link}
              code={exp?.code}
            >
              <span className="flex flex-col gap-2">
                <button
                  onClick={() => openModal(exp)}
                  className="flex justify-center text-gray-50 gap-1 items-center 
                  bg-purple-600 px-5 py-3 rounded-md hover:bg-purple-800 duration-200 max-[480px]:px-3 max-[480px]:text-xs "
                >
                  Mais Informações
                </button>
              </span>
            </CardExp>
          ))}
        </div>
      </div>
    </section>
  );
}
