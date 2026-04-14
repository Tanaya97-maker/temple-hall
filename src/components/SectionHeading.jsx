export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      {tag && (
        <span className="inline-block font-accent text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B8860B] mb-3 border border-[#D4A017]/40 px-4 py-1 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-5">
        <span className="w-12 h-[1px] bg-[#D4A017]" />
        <span className="text-[#D4A017] text-xs">✦</span>
        <span className="w-12 h-[1px] bg-[#D4A017]" />
      </div>
    </div>
  );
}
