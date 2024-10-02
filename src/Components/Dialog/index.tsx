interface DialogProps {
    visible: boolean;
    onHide: (value: boolean) => void;
    children: React.ReactNode;
    header: string;
    subtitle: string;
}

export default function Dialog({ children, onHide, visible, header, subtitle } : DialogProps){

    if (!visible) return null; // Não renderiza o modal se não estiver visível

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 animate-jump rounded-lg p-10 flex flex-col gap-8 w-full max-w-xl max-[412px]:w-[22rem]">
                <div className="flex  justify-between items-start mb-4">
                    <div className="flex flex-col justify-start items-start gap-1">
                    <h1 className="font-semibold text-gray-50 text-xl">{header}</h1>
                    <small className="font-normal text-sm text-purple-600">
                        {subtitle}
                    </small>
                    </div>
                    <button 
                        className="bg-transparent w-8 h-8 text-gray-50 font-bold border border-gray-400 rounded-full text-base"
                        onClick={() => onHide(false)}
                    >
                        X
                    </button>
                </div>
                <div className="text-gray-300 text-sm font-normal">
                    {children}
                </div>
            </div>
        </div>
    );
}
