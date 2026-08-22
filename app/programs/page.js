import PageShell from "../components/PageShell";

export default function ProgramsPage() {
  return (
    <PageShell>
      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter text-center">
          <h1 className="text-5xl font-semibold text-primary">Our Impact Programs</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
            Bridging the gap between medical care and emotional wellness through therapeutic tools designed to stimulate the mind and reconnect loved ones with their most precious memories.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#engagement-kits" className="rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-on-secondary transition hover:bg-secondary-fixed-dim">
              Engagement Kits
            </a>
            <a href="#memory-books" className="rounded-full border-2 border-primary px-8 py-4 text-sm font-semibold text-on-surface transition hover:bg-primary/10">
              Pages of the Past
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src="/house2.jpeg"
                alt="Senior using an engagement kit"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src="/house3.jpg"
                alt="Memory book opened during group activity"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="engagement-kits" className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1440px] px-gutter">
          <div className="rounded-[2rem] bg-surface-container-low p-8 shadow-sm shadow-surface-container-highest">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 text-primary font-semibold uppercase tracking-[0.24em]">
                  <span className="material-symbols-outlined">extension</span>
                  Tactile Stimulation
                </div>
                <h2 className="text-4xl font-semibold text-on-surface">Cognitive Engagement Kits</h2>
                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  Curated fidget-style engagement packages designed for dementia care. Each kit includes hands-on tools that keep fingers active, focus attention, and gently stimulate memory through calm, repetitive interaction.
                </p>
                <ul className="mt-8 space-y-4 text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Fidget-friendly pieces like textured shapes, sorting tasks, and simple puzzle components.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Sensory prompts that encourage touch, movement, and calm engagement.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Caregiver guidance for short, meaningful mind-engagement sessions.
                  </li>
                </ul>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[2rem] overflow-hidden bg-white shadow-sm shadow-surface-container-highest">
                  <img
                    src="/package1.jpeg"
                    alt="Cognitive engagement kit package"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden bg-white shadow-sm shadow-surface-container-highest">
                  <img
                    src="/package3.jpeg"
                    alt="Cognitive engagement kit components"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="memory-books" className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1440px] px-gutter">
          <div className="rounded-[2rem] bg-surface-container-low p-8 shadow-sm shadow-surface-container-highest">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 text-secondary font-semibold uppercase tracking-[0.24em]">
                  <span className="material-symbols-outlined">menu_book</span>
                  Pages of the Past Program
                </div>
                <h2 className="text-4xl font-semibold text-on-surface">Personalized Memory Books</h2>
                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  The purpose of our program is to enhance emotional well-being and cognitive engagement through meaningful photos, captions, and stories from each patient’s life.
                </p>
                <div className="mt-8 rounded-[2rem] border-l-4 border-primary bg-surface p-8">
                  <h3 className="text-2xl font-semibold text-on-surface">Why Reminiscence Therapy?</h3>
                  <p className="mt-4 text-on-surface-variant">
                    Reminiscence therapy encourages individuals with dementia to recall cherished memories, which can improve mood and cognitive function.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition hover:bg-primary-container"
                  >
                    Apply for a Memory Book
                  </a>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden bg-white shadow-2xl">
                <img
                  src="/bookpic.jpg"
                  alt="Memory book creation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] bg-surface p-8 shadow-sm shadow-surface-container-highest md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-low text-primary">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h3 className="text-2xl font-semibold text-on-surface">How Pages of the Past Helps</h3>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Each memory book is personalized with photos, life milestones, and familiar stories so caregivers can guide calm, meaningful conversations. The goal is to spark recognition, reduce stress, and create comforting moments of connection for both patients and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-[5rem] text-on-secondary">
        <div className="mx-auto max-w-[1200px] px-gutter text-center">
          <h2 className="text-4xl font-semibold mb-6">Want to support these programs?</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 opacity-90 mb-10">
            Your contribution helps us create more meaningful personalized memory books and expand our reach to those who need it most. Every donation creates a moment of clarity.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 font-bold text-secondary hover:bg-surface-container transition-colors"
            >
              Sponsor a Kit
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-10 py-4 font-bold text-white hover:bg-white/10 transition-colors"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
