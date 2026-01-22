import { LinkCard } from "../linkCard/linkCard"

export function PortfolioCard() {
    return (
        <LinkCard href="https://joaovictormartins.vercel.app/" external variant="gradient">
            <div className="h-full w-full flex items-center">
                <div className="w-[45%] sm:w-[30%] flex justify-center">
                    <div className="flex flex-col text-[var(--color-highlight)]">
                        <h1 className="block text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-light)] bg-clip-text text-transparent">
                        PORT
                        </h1>
                        <h1 className="block text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-light)] bg-clip-text text-transparent">
                        FÓLIO
                        </h1>
                    </div>
                </div>

                <div>
                    <p className="text-[var(--color-light)]">Explore meus <span>projetos</span> e<br />minha atuação <span>profissional</span></p>
                </div>
            </div>
        </LinkCard>
    )
}