import Image from "next/image"
import imgProfile from "@/assets/images/Profile.png"

export default function HeroSection() {
    return (
        <section className={"heroSection"}>

            <main className="bg-[var(--background)] w-screen h-screen overflow-hidden flex items-center justify-center gap-5">

                <div className="flex flex-col gap-5">

                    <h1 className="text-xl font-bold text-[var(--text)]">Joao Victor</h1>

                    <div className="bg-[var(--post-span)] rounded-md p-3">
                        <p>teste</p>
                    </div>

                    <div className="flex gap-5">

                        <div className="bg-[var(--post-back)] w-96 h-48 p-3 rounded-md">
                            <h2>Quem sou eu?</h2>
                        </div>

                        <Image className="rounded-md"
                            src={imgProfile}
                            alt="Foto de Joao Victor"
                            width={192}
                            height={192}
                        />

                    </div>

                    <div>
                        <h2>me chame</h2>
                        <p>se voce</p>
                        <div>
                            <p>minha missao</p>
                        </div>
                        <p>compensa</p>
                    </div>

                </div>

                <div className="bg-[var(--post-back)] w-0.5 min-h-6/12"></div>

                <div className="flex flex-col gap-5">
                    <div>
                        <h2>Minha Trajetoria</h2>
                        <p>teste</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="bg-[var(--post-span)] rounded-md p-3">
                            <p>teste</p>
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