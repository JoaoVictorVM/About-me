import { LinkCardSmall } from "../linkCard/linkCardSmall"
import { FileUser } from 'lucide-react';

export function CurriculumCard() {
    return (
        <LinkCardSmall href="/assets/pdf/Document.pdf" download variant="light">
            <div className="flex flex-col justify-center items-center">
                <FileUser className="w-16 h-16 text-[var(--color-dark)] mb-6" />
                <p className="">Curriculum</p>
            </div>
            
        </LinkCardSmall>
    )
}