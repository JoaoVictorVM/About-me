import { LinkCardProps } from "./LinkCard.types"

const variants = {
    dark: "bg-[var(--color-dark)]",
    light: "bg-[var(--color-light)]",
    gradient: "bg-gradient-to-r from-[var(--color-dark)] to-[#383C46]",
}

export function LinkCardSmall({
    children,
    href,
    variant = "dark"
}: LinkCardProps) {
    const Wrapper = href ? 'a' : 'div'

    return (
        <Wrapper
        href={href}
        className={`
            w-46
            h-40
            rounded-xl
            p-6
            border
            border-white/10
            shadow-2xl
            hover:scale-[1.02]
            transition
            ${variants[variant]}
        `}
        >
            {children}
        </Wrapper>
    )
} 