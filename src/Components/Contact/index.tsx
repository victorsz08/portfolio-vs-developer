import { useState } from "react"
import { BsFillSendCheckFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { z } from "zod";




export default function Contact() {
    const [success, setSuccess] = useState<boolean>(false);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const dataSchema = z.object({
        name: z.string().min(1, { message: "O Campo é obrigatório!"}),
        email: z.string().min(1, { message: "O Campo é obrigatório!"}).email({ message: "Email inválido!"}),
        subject: z.string().min(1, { message: "O Campo é obrigatório!"}),
        message: z.string().min(1, { message: "O Campo é obrigatório!"})
    })


    const serviceID = "service_o7iebma";
    const templateID = "template_fynydh9";
    const publicKey = "NvcfAK_2GCe1zD1x9";

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }



        try {
            dataSchema.parse(templateParams);


            const res = await emailjs.send(serviceID, templateID, templateParams, publicKey)
                    .then(res => res)
                    .catch(err => err)

            if(res.status !== 200){
                alert("error")
            }

            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            setSuccess(true);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {};
                error.errors.forEach(err => {
                  if (err.path.length > 0) {
                    fieldErrors[err.path[0]] = err.message;
                  }
                });
                setErrors(fieldErrors);
              }
        }
    }

    return (
        <section id="contact" className="min-h-screen z-0 flex justify-center p-16 items-center w-screen">
            <div className=" flex flex-col w-full justify-center items-center gap-6 p-8 animate-fade-right animate-duration-[800ms] max-[480px]:text-center">
                {!success && <div className="flex flex-col gap-2 justify-center items-center">
                    <h4 className="text-purple-600 font-normal text-sm">Contato</h4>
                    <h1 className="text-3xl font-semibold text-gray-50 max-[480px]:text-xl">Me envie uma mensagem</h1>
                </div>}
                {!success ? 
                <form onSubmit={handleSubmit} 
                    className="flex duration-300 bg-gray-900 rounded-lg p-6 flex-col justify-start gap-4 w-[35rem]  max-[480px]:max-w-[20rem] max-[480px]:text-start">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-400 text-sm font-normal">Nome</label>
                    <input
                        id="name" 
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors({})}}
                        className={`bg-gray-950 text-gray-50 p-4 border ${errors.name ? "border-red-500" : "border-gray-500"} rounded-lg`}
                        />
                {errors.name && <p className="text-xs font-light text-red-500">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-400 text-sm font-normal">Email</label>
                    <input
                        id="email" 
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrors({}) }}
                        className={`bg-gray-950 text-gray-50 p-4 border ${errors.email ? "border-red-500" : "border-gray-500"} rounded-lg`}
                        />
                        {errors.email && <p className="text-xs font-light text-red-500">{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="subject" className="text-gray-400 text-sm font-normal">Assunto</label>
                    <input 
                        id="subject" 
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value); setErrors({}) }}
                        className={`bg-gray-950 text-gray-50 p-4 border ${errors.subject ? "border-red-500" : "border-gray-500"} rounded-lg`}
                        />
                        {errors.subject && <p className="text-xs font-light text-red-500">{errors.subject}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-gray-400 text-sm font-normal">Mensagem</label>
                    <textarea
                        id="message" 
                        value={message}
                        aria-invalid={errors.message ? true : false}
                        onChange={(e) => { setMessage(e.target.value); setErrors({}) }} 
                        className={`bg-gray-950 text-gray-50 p-4 border ${errors.message ? "border-red-500" : "border-gray-500"} rounded-lg h-72`}
                        />
                        {errors.message && <p className="text-xs font-light text-red-500">{errors.message}</p>}
                </div>
                <div className="flex justify-end items-center">
                    <button 
                        className="px-5 py-3 my-3 rounded-lg bg-purple-600 text-gray-50 font-medium text-base hover:bg-purple-900 duration-200"
                    >
                        Enviar mensagem
                    </button>
                </div>
            </form> 
            :
            <div className="h-full animate-fade-right animate-duration-[800ms] w-[35rem] p-8 flex justify-center items-center">
                <div className="flex flex-col gap-3 justify-center items-center">
                <BsFillSendCheckFill className="w-40 h-40 text-green-600 max-[480px]:w-32 max-[480px]:h-32"/>
                <h1 className="text-gray-100 font-semibold text-2xl max-[480px]:text-xl">Obrigado pela sua mensagem!</h1>
                    <button 
                        onClick={() => setSuccess(false)}
                        className="px-5 py-3 my-3 rounded-lg bg-purple-600 text-gray-50 font-medium text-base hover:bg-purple-900 duration-200">
                            Nova mensagem
                        </button>
                </div>    
            </div>
            }
            </div>
        </section>
    )
}