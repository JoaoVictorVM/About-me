import { LinkCard } from "../linkCard/linkCard"
import { Instagram } from 'lucide-react';

export function InstagramdevCard() {
    return (
        <LinkCard href="https://www.instagram.com/dev.joaov/" external variant="light">
            <div className="h-full w-full flex items-center">
                <div className="w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <Instagram className="w-16 h-16 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p><span>Código</span> e <span>desenvolvimento</span>.<br /> <span>Instagram</span> focado em <span>projetos</span></p>
                </div>
            </div>
        </LinkCard>
    )
}