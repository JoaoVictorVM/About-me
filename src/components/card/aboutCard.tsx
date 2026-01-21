import { LinkCard } from "../linkCard/linkCard"

export function AboutCard() {
    return (
        <LinkCard href="#" variant="light">
            <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-purple-400 font-semibold">
                MÉTODO SPE
                </span>

                <p className="text-white text-lg font-medium">
                O guia prático para{" "}
                <span className="text-orange-400">aumentar</span>{" "}
                suas vendas pelos{" "}
                <span className="text-purple-400">stories</span>
                </p>
            </div>
        </LinkCard>
    )
}