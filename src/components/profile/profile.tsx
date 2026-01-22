export function Profile() {
  return (
    <div
      className="
        w-full
        max-w-md
        flex
        flex-col
        items-center
        text-center
        gap-2
      "
    >
      <img
        src="/assets/images/Profile.png"
        alt="Joao Victor Ventura Martins"
        className="
          w-23
          h-23
          sm:w-30
          sm:h-30
          rounded-xl
          border
          border-white/20
          shadow-2xl
          object-cover
        "
      />

      <h1
        className="
          font-medium
          text-2xl
          sm:text-[1.875rem]
          text-[var(--color-light)]
          leading-tight
        "
      >
        João Victor Ventura Martins
      </h1>

      <h6
        className="
          font-extralight
          text-[0.65rem]
          sm:text-sm
          tracking-[0.15rem]
          uppercase
          bg-gradient-to-r
          from-[var(--color-highlight)]
          via-[#c29957]
          to-[#dfc295]
          bg-clip-text
          text-transparent
        "
      >
        Desenvolvedor FullStack
      </h6>
    </div>
  )
}
