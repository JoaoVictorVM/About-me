import Image from "next/image"
import { Linkedin, Instagram, Github, Phone, Mail, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="flex min-h-screen w-full justify-center bg-[var(--color-bg)] text-white">
            <div className="flex flex-col gap-5 w-3xl mt-36">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold">JOAO VICTOR VENTURA MARTINS</h1>
                    <p className="text-[var(--color-highlight)] font-bold tracking-[0.3rem]">FULLSTACK DEVELOPER</p>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2">
                        <h2>Quem sou eu?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique adipisci magni non modi corporis sequi inventore autem, ipsa reiciendis cum culpa repellat eius fuga doloremque nam aperiam libero officia tenetur!</p>
                    </div>
                    <img
                        src="/assets/images/Profile.png"
                        alt=""
                        className="w-3xs h-3xs"
                    />
                </div>
                <div className="bg-[var(--color-highlight)] h-[1px] mt-10 mb-10"></div>

                <div className="flex flex-col gap-2">
                    <h2>Minha Trajetoria</h2>

                    <ul className="marker:text-[var(--color-highlight)]">
                        <li>
                            <span>2021: </span> Iniciei minha graduacao em ciencias da computacao
                        </li>
                        <li>
                            <span>2025: </span> Comecei a atuar como QA
                        </li>
                    </ul>

                </div>

                <div className="flex flex-col gap-2">
                    <h2>Links e Contato</h2>
                    <div className="flex gap-15">
                        <div className="flex flex-col">
                            <a href="">🔗 Linkedin</a>
                            <a href="">🔗 GitHub</a>
                            <a href="">🔗 Instagram</a>
                            <a href="">🔗 Portfolio</a>
                        </div>
                        <div>
                            <p>📞: +55 35 99809-5841</p>
                            <p>📧: jvmartinscv@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
