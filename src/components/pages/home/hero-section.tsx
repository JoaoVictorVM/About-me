import Image from "next/image"
import imgProfile from "@/assets/images/Profile.png"

export default function HeroSection() {
    return (
        <section className={"heroSection"}>

            <main className="bg-[var(--background)] w-screen h-screen overflow-hidden flex items-center justify-center gap-5">

                <div className="flex flex-col gap-5">

                    <h1 className="text-xl font-bold text-[var(--text)]">Joao Victor</h1>

                    <div className="bg-[var(--post-span)] rounded-md p-3">
                        <p>🎨 Código é arte quando feito com propósito.</p>
                    </div>

                    <div className="flex gap-5">

                        <div className="bg-[var(--post-back)] flex flex-col gap-4 w-96 h-48 p-3 rounded-md">
                            <h2>Quem sou eu?</h2>
                            <p>Ola, me chamo Joao Victor, estudo tecnologia a 4 anos e trabalho a pouco mais de 2 anos</p>
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
                        <h2>Me chame de Joao!</h2>
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
                        <div className="bg-[var(--post-span)] rounded-md p-3">
                            <p>Agora que você me conhece, só falta eu te conhecer! <br/> Dá uma olhada nos links abaixo e entre em contato comigo 👇</p>
                        </div>

                        <div className="bg-[var(--post-back)] w-96 h-48 p-3 rounded-md">
                            <p>Links</p>
                        </div>
                    </div>
                </div>

            </main>

        </section>
    )
}