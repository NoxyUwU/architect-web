import MotionSection from '@/components/ui/MotionSection';

export default function AboutPreview() {
  return (
    <MotionSection className="px-6 py-20 md:px-12 md:py-24" delay={0.1}>
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-stone-200/15 bg-stone-900/30 p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">About Me</p>
          <h2 className="mt-5 text-3xl font-light leading-tight tracking-tight text-stone-100 md:text-5xl">Designing spaces with clarity, atmosphere, and long-term relevance.</h2>
        </div>
        <p className="text-base leading-relaxed text-stone-300">
          I develop architecture through site-specific research, refined geometry, and careful material articulation. Each project is shaped as a balance between function, emotion, and environmental performance.
        </p>
      </div>
    </MotionSection>
  );
}
