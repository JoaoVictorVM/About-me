export function Profile() {
    return (
        <div className="w-xl flex items-center justify-between text-center gap-3">

            <img 
                src="/assets/images/Profile.png" 
                alt="Joao Victor Ventura Martins" 
                className="w-37 h-40 rounded-xl border border-white/20 shadow-2xl"
            />

            <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-[1.73rem] text-[var(--color-light)]">João Victor Ventura Martins</h1>
                <h6 className="font-extralight text-s tracking-[0.15rem] uppercase bg-gradient-to-r from-[var(--color-highlight)] via-[#c29957] to-[#dfc295] bg-clip-text text-transparent">Desenvolvedor FullStack</h6>
            </div>

        </div>
    )
}