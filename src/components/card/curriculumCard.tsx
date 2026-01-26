import { LinkCardSmall } from "../linkCard/linkCardSmall"
import { FileUser } from 'lucide-react';

export function CurriculumCard() {
    return (
        <LinkCardSmall href="/assets/pdf/CV-JoaoVictorVenturaMartins.pdf" download variant="light">
            <div className="flex flex-col justify-center items-center">
                <FileUser className="w-15 h-15 text-[var(--color-dark)] mb-6" />
                <p className="">Curriculum</p>
            </div>
            
        </LinkCardSmall>
    )
}