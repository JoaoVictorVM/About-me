import Image from "next/image"
import { Linkedin, Instagram, Github, Phone, Mail, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="flex min-h-screen w-full items-center justify-center bg-[var(--color-bg)] text-white">
            <div className="flex flex-col items-center w-[90%] max-w-[420px] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-[0_0_40px_rgba(255,255,255,0.1)]  transition-all duration-300 gap-5">
                <Image
                    src="/assets/images/Profile.png"
                    alt="Imagem de fundo"
                    width={200}
                    height={200}
                    className="rounded-full object-cover border-2 border-[var(--color-light)]"
                />

                <div className="text-center flex flex-col gap-2">
                    <h1>Joao Victor Ventura Martins</h1>
                    <h2 className="text-[var(--color-highlight)]">Fullstack Developer</h2>
                </div>

                <ul className="flex flex-col gap-2">
                    <a href="">
                        <li>
                            Linkedin
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Instagram
                        </li>
                    </a>
                    <a href="">
                        <li>
                            GitHub
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Portfolio
                        </li>
                    </a>
                </ul>
            </div>
        </section>
    )
}
