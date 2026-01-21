import { LinkCard } from "../linkCard/linkCard"

export function PortfolioCard() {
    return (
        <LinkCard href="#" variant="gradient">
            <div className="h-full w-full flex items-center">
                <div className="w-[30%] flex justify-center">
                    <div className="flex flex-col text-[var(--color-highlight)]">
                        <span className="block text-4xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-light)] bg-clip-text text-transparent">
                        PORT
                        </span>
                        <span className="block text-4xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-light)] bg-clip-text text-transparent">
                        FÓLIO
                        </span>
                    </div>
                </div>

                <div>
                    <p>testes</p>
                </div>
            </div>
        </LinkCard>
    )
}