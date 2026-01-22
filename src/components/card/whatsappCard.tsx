import { LinkCardSmall } from "../linkCard/linkCardSmall"
import { Phone } from 'lucide-react';

export function WhatsappCard() {
    return (
        <LinkCardSmall href="https://wa.me/5535998095841?text=Olá%20desenvolvedor%20João." external variant="light">
            <div className="flex flex-col justify-center items-center">
                <Phone className="w-16 h-16 text-[var(--color-dark)] mb-6" />
                <p className="">WhatsApp</p>
            </div>
            
        </LinkCardSmall>
    )
}