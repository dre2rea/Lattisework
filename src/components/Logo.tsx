export function Logo() {
  return (
    <div className="flex items-center gap-[10px]">
      <a href="/" className="text-[18px] font-semibold leading-[48px] tracking-[-0.2px] text-ink">
        Lattisework
      </a>
      <span className="hidden md:block w-[32px] h-px bg-ink" />
      <span className="hidden md:inline text-[13px] font-light leading-[25px] tracking-[0.39px] text-ink">
        Visual language for AI image generation
      </span>
    </div>
  )
}
