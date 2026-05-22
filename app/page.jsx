export default function HomePage() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center px-6 pb-20 pt-36 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-stone-400">
          Architecture Portfolio
        </p>
        <h1 className="text-4xl font-light leading-tight tracking-tight text-stone-100 sm:text-5xl md:text-7xl">
          Designing Spatial Narratives Through Light, Form, and Material
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-stone-300 md:text-lg">
          A curated presentation of residential, commercial, and urban concepts that explore context-driven design and modern architectural expression.
        </p>
      </div>
    </section>
  );
}
