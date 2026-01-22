import { LinkCard } from "../linkCard/linkCard"
import { Github } from 'lucide-react';

export function GithubCard() {
    return (
        <LinkCard href="#" variant="light">
            <div className="h-full w-full flex items-center">
                <div className="w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <Github className="w-16 h-16 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p>Veja meus repositórios no <span>GitHub</span><br />e explore meus <span>projetos</span></p>
                </div>
            </div>
        </LinkCard>
    )
}