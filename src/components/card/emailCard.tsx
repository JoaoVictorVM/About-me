import { LinkCardSmall } from "../linkCard/linkCardSmall"
import { Mail } from 'lucide-react';

export function EmailCard() {
    return (
        <LinkCardSmall href="#" variant="light">
            <div className="flex flex-col justify-center items-center">
                <Mail className="w-16 h-16 text-[var(--color-dark)] mb-6" />
                <p className="">Email</p>
            </div>
            
        </LinkCardSmall>
    )
}