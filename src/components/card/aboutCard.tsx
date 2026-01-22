import { LinkCard } from "../linkCard/linkCard"

export function AboutCard() {
    return (
        <LinkCard href="#" variant="gradient">
            <div className="h-full w-full flex items-center">
                <div className="w-[45%] sm:w-[30%] flex justify-center">
                    <div className="flex flex-col text-[var(--color-highlight)]">
                        <h1 className="block text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-light)] bg-clip-text text-transparent">
                        SAIBA
                        </h1>
                        <h1 className="block text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-light)] bg-clip-text text-transparent">
                        MAIS
                        </h1>
                    </div>
                </div>

                <div>
                    <p className="text-[var(--color-light)]">Um pouco da minha <span>história</span>,<br /> <span>interesses</span> e <span>objetivos</span></p>
                </div>
            </div>
        </LinkCard>
    )
}