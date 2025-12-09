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
                        <div className="flex flex-col justify-between h-full">
                            <p>Sou estudante de Ciência da Computação e apaixonado por transformar ideias em soluções reais. Atuo no <span>Front-end</span> com <span>Next.js</span> e <span>TailwindCSS</span>, sempre priorizando organização, escalabilidade e boa experiência do usuário. Tenho experiência como <span>QA</span> e vivência em <span>Back-end</span> com <span>Node.js</span>.</p>
                            <p>🚀 <strong>Vamos construir algo incrível juntos?</strong><br />Fale comigo e conheça meu trabalho!</p>                            
                        </div>
                    </div>
                    <img
                        src="/assets/images/Profile.png"
                        alt=""
                        className="w-3xs h-3xs"
                    />
                </div>
                <div className="bg-[var(--color-highlight)] h-[1px] mt-5 mb-5"></div>

                <div className="flex flex-col gap-2">
                    <h2>Minha Trajetoria</h2>
                    <ul className="marker:text-[var(--color-highlight)]">
                        <li>
                            <strong>2021: </strong> Iniciei minha graduacao em ciencias da computacao
                        </li>
                        <li>
                            <strong>2025: </strong> Comecei a atuar como QA
                        </li>
                    </ul>
                    <p>Conquistei tudo isso, enquanto eu:</p>
                    <ul className="marker:text-[var(--color-highlight)]">
                        <li>
                            Realizei o curso de HTML e CSS da Origamid
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <h2>Fale comigo e conheça meu trabalho!</h2>
                    <div className="flex gap-15">
                        <div className="flex flex-col">
                            <a href="">🔗 <strong>Linkedin</strong></a>
                            <a href="">🔗 <strong>GitHub</strong></a>
                            <a href="">🔗 <strong>Instagram</strong></a>
                            <a href="">🔗 <strong>Portfolio</strong></a>
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
