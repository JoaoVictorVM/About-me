import { LinkCard } from "../linkCard/linkCard"
import { Linkedin } from 'lucide-react';

export function LinkedinCard() {
    return (
        <LinkCard href="https://www.linkedin.com/in/jvvmartins/" external variant="light">
            <div className="h-full w-full flex items-center">
                <div className="w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <Linkedin className="w-16 h-16 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p>Perfil <span>profissional</span> no <span>LinkedIn</span>.<br/>Conecte-se comigo</p>
                </div>
            </div>
        </LinkCard>
    )
}