import Image from "next/image"
import imgProfile from "@/assets/images/Profile.png"
import { Linkedin, Instagram, Github, Phone, Mail, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className={"heroSection"}>

            <main className="bg-[var(--background)] w-screen h-screen overflow-hidden flex items-center justify-center gap-5">

                <div className="flex flex-col gap-5">

                    <h1 className="text-4xl font-bold text-[var(--text)]">JOÃO VICTOR</h1>

                    <div className="rounded-md p-3 border-2 border-[var(--post-back)]">
                        <p>🎨 Código é arte quando feito com propósito.</p>
                    </div>

                    <div className="flex gap-5">

                        <div className="flex flex-col gap-4 w-96 h-48 p-3 rounded-md border-2 border-[var(--post-back)]">
                            <h2>Quem sou eu?</h2>
                            <p>Ola, me chamo João Victor, estudo tecnologia a 4 anos e trabalho a pouco mais de 2 anos</p>
                            <p>Desenvolver fullstack apaixonado e estusiasta do Frontend.</p>
                        </div>

                        <Image className="rounded-md"
                            src={imgProfile}
                            alt="Foto de Joao Victor"
                            width={192}
                            height={192}
                        />

                    </div>

                    <div className="flex flex-col gap-4">
                        <h2>Me chame de João!</h2>
                        <p>Gosto de pensar que o frontend é uma forma de contar histórias</p>
                        <p>Transformando ideias em código e código em interfaces, sempre com aquele <br/> toque de detalhe que faz a diferença.</p>
                    </div>

                </div>

                <div className="bg-[var(--post-back)] w-0.5 min-h-6/12"></div>

                <div className="flex flex-col gap-5">
                    <div>
                        <h2>Minha Trajetoria</h2>
                        <p> <span>→</span> 2021: Iniciei minha graduacao em Ciencias da Computacao</p>
                        <p> <span>→</span> 2025: Iniciei meu emprego na area de desenvolvimento, atuando como QA</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="rounded-md p-3 border-2 border-[var(--post-back)]">
                            <p>Agora que você me conhece, só falta eu te conhecer! <br/> Dá uma olhada nos links abaixo e entre em contato comigo 👇</p>
                        </div>

                        <div className="">
                            <ul>
                                <li>
                                    <a href="" target="_blank">
                                        <Linkedin size={20} className="stroke-2 text-[var(--text)]"/>
                                        Linkedin
                                        <ArrowUpRight size={14} className="stroke-2 text-[var(--text)]"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <Instagram size={20} className="stroke-2 text-[var(--text)]"/>
                                        Instagram
                                        <ArrowUpRight size={14} className="stroke-2 text-[var(--text)]"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <Github size={20} className="stroke-2 text-[var(--text)]"/>
                                        GitHub
                                        <ArrowUpRight size={14} className="stroke-2 text-[var(--text)]"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <BriefcaseBusiness size={20} className="stroke-2 text-[var(--text)]"/>
                                        Portfolio
                                        <ArrowUpRight size={14} className="stroke-2 text-[var(--text)]"/>
                                    </a>
                                </li>

                                <li className="flex gap-1">
                                    <Mail size={20} className="stroke-2 text-[var(--text)]"/>
                                    <p>jvmartinscv@gmail.com</p>
                                </li>
                                <li className="flex gap-1">
                                    <Phone size={20} className="stroke-2 text-[var(--text)]"/>
                                    <p>+55 (35) 99809-5841</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>

        </section>
    )
}