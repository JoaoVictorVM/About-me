import { LinkCard } from "../linkCard/linkCard"
import { Instagram } from 'lucide-react';

export function InstagramCard() {
    return (
        <LinkCard href="#" variant="light">
            <div className="h-full w-full flex items-center">
                <div className="w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <Instagram className="w-16 h-16 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p>Conheça meu <span>Instagram</span>. <span>Conteúdos</span><br />e <span>aprendizados</span> compartilhados</p>
                </div>
            </div>
        </LinkCard>
    )
}