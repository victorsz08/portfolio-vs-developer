

interface CardProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    link: string;
    code?: string;
    age: string;
}

export default function CardExp({ title, subtitle, children, link, age, code } : CardProps){
    
    return (
        <div className="bg-gray-900 animate-fade-right animate-delay-[300ms] p-8 rounded-lg flex flex-col gap-8 justify-between w-[40rem] max-[412px]:w-[20rem] ">
            <div className="flex justify-between w-full items-start max-[412px]:flex-col max-[412px]:justify-start">
                <div className="flex flex-col gap-3 justify-start items-start">
                    <h1 className="text-gray-100 font-semibold text-xl">{title}</h1>
                    <h4 className="text-purple-600 font-normal text-sm">{subtitle}</h4>
                </div>
                <h2 className="text-gray-500 font-normal text-sm">{age}</h2>
            </div>
            <div className="flex justify-start gap-2 items-center max-[412px]:flex-wrap">
                {children}
                <a href={link} 
                    target="_blank" 
                    className="flex justify-center  max-[412px]:px-3 max-[412px]:text-xs
                    text-gray-50 gap-1 items-center bg-purple-600 px-5 py-3 rounded-md hover:bg-purple-800 duration-200"
                >
                    Demo
                </a>
                {code && 
                <a href={code} target="_blank" 
                    className="flex justify-center gap-1 max-[412px]:px-3 max-[412px]:text-xs 
                    items-center text-gray-50 bg-purple-600 p-3 px-5 py-3 rounded-md hover:bg-purple-800 duration-200">
                    Repositório
                </a>}
            </div>
        </div>
    )
}