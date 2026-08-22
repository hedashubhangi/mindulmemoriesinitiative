from pathlib import Path

base = Path(__file__).resolve().parent / 'app'

files = {
    'page.js': '''import PageShell from "./components/PageShell";

export default function Home() {
  return (
    <PageShell>
      <section className="bg-primary text-on-primary overflow-hidden py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-[0.24em]">
              <span className="material-symbols-outlined">menu_book</span>
              Capturing Compassion
            </span>
            <h1 className="text-headline-xl text-headline-xl leading-tight">
              Preserving Precious Memories, Bringing Joy to Dementia Patients
            </h1>
            <p className="max-w-xl text-body-lg text-on-primary-container/90">
              Discover the power of reminiscence therapy and witness the facial expressions of joy.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-surface px-8 py-4 text-sm font-semibold text-primary transition hover:bg-surface-container-low"
              >
                Apply for a Memory Book
              </a>
              <a
                href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-surface px-8 py-4 text-sm font-semibold text-surface transition hover:bg-surface/10"
              >
                Make a Donation
              </a>
            </div>
          </div>

          <div className="relative lg:w-1/2">
            <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-3xl" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATBtkf_Sb7C_PgaOpOxOaKVlF3TPyagbVLPnh54WGpIVozPO9yctmt6DbHhuKnxd4_FKPqJVEvOE7IwUf4_P7q9ztR0WyV7NkQHjoCdXi-khdlDvcKOlcmI_amnFhrFxISO_LT9yfq4jT75oMYbxla9e80NGF4bbKUTnQBuGCC1gcSgDgjBeP_2wOnW4ftkF5UAdspeOzvTMgoAiii0gl9jy3t_xLDYh-oyzlJjqQ7JaG22-nDHo2OlrE5QDniWrTThomkBvrsRe-J"
              alt="Mindful Memories Initiative team in action"
              className="relative z-10 w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-padding">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-surface-container-low p-10 border border-outline-variant shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary text-3xl">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <h2 className="text-4xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              To preserve precious memories and bring joy to dementia patients through personalized memory books, creating meaningful connections between patients, families, and caregivers while honoring each individual's unique life story.
            </p>
          </div>
          <div className="rounded-xl bg-surface-container-low p-10 border border-outline-variant shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary-fixed text-tertiary text-3xl">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <h2 className="text-4xl font-semibold text-tertiary mb-4">Our Vision</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              A world where every person affected by dementia experiences dignity, connection, and joy through the power of preserved memories and compassionate care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-padding">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-[0.24em]">
              <span className="material-symbols-outlined">menu_book</span>
              Pages of the Past Program
            </span>
            <h2 className="text-headline-lg text-headline-lg text-primary">Personalized Memory Books</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Pages of the Past is a compassionate program dedicated to creating personalized memory books that work as powerful tools for dementia patients and their families. Our carefully crafted books help preserve cherished memories, spark meaningful conversations, and provide comfort during challenging times.
            </p>
            <div className="rounded-3xl border-l-4 border-primary bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-3">Why Reminiscence Therapy?</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Reminiscence therapy helps individuals with dementia by encouraging them to recall cherished memories, which can improve mood and cognitive function. Through familiar photos, stories, and personal mementos, our personalized memory books create meaningful connections that bring joy and comfort to both patients and their loved ones.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8dkAM9YqTwx7i3t5ISr8AvFpoTrn-6Mr9es-TrzRNLQPs70pO5pUg5YrThI1BXKwgeJa_Iy0956Fxm_GcK_2BJT3ClTAJxm4YhPdjJY3mZI3BkrQBgMgB1GxZAF6mrFs01e5Fu4qG357m-kwhimt5i50_ypO-HX2vpsHIY9SRGl-wTvhTzaghu33nlD_oQzHTqpPGV_tzWP257EBg-BrzHKiMiSivLLAcYObxq4cQcqxbWuNb1UGYOjOVmXRrZq38W5DIBPMg9aJm"
              alt="Memory book creation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary text-on-secondary py-section-padding">
        <div className="mx-auto max-w-[1200px] px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg mb-12">Our Impact to Date</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl bg-surface-container-low p-8">
              <p className="font-headline-xl text-headline-xl text-primary">100</p>
              <p className="mt-4 uppercase tracking-[0.25em] text-sm opacity-80">Kits Distributed</p>
            </div>
            <div className="rounded-3xl bg-surface-container-low p-8">
              <p className="font-headline-xl text-headline-xl text-primary">10</p>
              <p className="mt-4 uppercase tracking-[0.25em] text-sm opacity-80">Memory Books</p>
            </div>
            <div className="rounded-3xl bg-surface-container-low p-8">
              <p className="font-headline-xl text-headline-xl text-primary">2</p>
              <p className="mt-4 uppercase tracking-[0.25em] text-sm opacity-80">Active Chapters</p>
            </div>
            <div className="rounded-3xl bg-surface-container-low p-8">
              <p className="font-headline-xl text-headline-xl text-primary">50+</p>
              <p className="mt-4 uppercase tracking-[0.25em] text-sm opacity-80">Families Served</p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-body-lg leading-8 opacity-90">
            &ldquo;These numbers represent real people, real families, and real moments of rediscovered joy. Every kit and book is a promise kept to honor the dignity of those we serve.&rdquo;
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-padding">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-primary">Restaurant Fundraisers</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Our restaurant fundraiser nights bring together volunteers, families, and supporters for an evening of community building. By partnering with local businesses, we create opportunities for people to connect while contributing to the expansion of our cognitive engagement programs.
            </p>
            <a
              href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border-2 border-secondary px-8 py-4 text-secondary font-bold hover:bg-secondary/10 transition-all"
            >
              Donate
            </a>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl h-[400px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxdxelv8c7YJQpWYVeM_VoCEGNLvjJDyVc2-ijj7QeV4A36NM6c1PZYjQvNwChmJSK_nkMWHC4v7yPLeHJtHScmq663aQK7JDUa12UrFVLT_QQAqcorI47Ib6U3rP4ugl8p773wLBiuAW6VB7hV0YLKbyCTnRO-6VSTwlOFykHBkmyZ3RxhleXde7NVrFOzx8w-pKS2pbXVfVK9EHwL34stAUPGPatWvN1oXfSqo17En-Ravzkd0Cc5xYj6DdTZcHye-RAdVLGEVlx"
              alt="Restaurant Fundraisers"
              className="h-full w-full object-cover rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-padding">
        <div className="mx-auto max-w-[1200px] px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Want to help us make a difference?</h2>
          <p className="mx-auto max-w-3xl text-body-lg leading-8 text-on-surface-variant mb-10">
            Join our mission to bring joy and comfort to dementia patients and their families. Whether through volunteering your time or making a donation, every contribution helps us expand our reach.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="rounded-[2rem] border border-outline-variant bg-white p-8 text-left shadow-sm transition hover:shadow-md"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mb-4 text-4xl">📖</p>
              <h3 className="text-xl font-semibold text-primary">Apply for a Book</h3>
              <p className="mt-2 text-sm text-on-surface-variant">Receive a custom memory book celebrating a unique life story.</p>
            </a>
            <a
              className="rounded-[2rem] border border-outline-variant bg-white p-8 text-left shadow-sm transition hover:shadow-md"
              href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mb-4 text-4xl">🤝</p>
              <h3 className="text-xl font-semibold text-primary">Make a Donation</h3>
              <p className="mt-2 text-sm text-on-surface-variant">Support the creation of more personalized memory books.</p>
            </a>
            <a
              className="rounded-[2rem] border border-outline-variant bg-white p-8 text-left shadow-sm transition hover:shadow-md"
              href="https://docs.google.com/forms/d/e/1FAIpQLScmBLgVRSQ9O9XLAl5M50lO-c1fPf-4IBg13yGlFxyuZkYArA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mb-4 text-4xl">👥</p>
              <h3 className="text-xl font-semibold text-primary">Volunteer Today</h3>
              <p className="mt-2 text-sm text-on-surface-variant">Share your time and talents to support our mission.</p>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
''',
    'about/page.js': '''import PageShell from "../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-12 lg:grid-cols-[2.2fr_1fr] items-center">
          <div>
            <span className="inline-block rounded-full bg-secondary-fixed px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-on-secondary-fixed">
              About Us
            </span>
            <h1 className="mt-6 text-5xl font-semibold text-primary leading-tight">
              About Mindful Memories Initiative
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-on-surface-variant">
              <p>
                Mindful Memories Initiative is a compassionate nonprofit organization dedicated to improving the lives of dementia patients through the power of reminiscence therapy. Founded with the belief that memories are precious gifts that deserve to be preserved and celebrated, we work tirelessly to bring joy and connection to those affected by memory loss.
              </p>
              <p>
                Our flagship program, “Pages of the Past,” creates personalized memory books filled with photographs, stories, and meaningful moments from each patient’s life. These carefully crafted books serve as powerful tools for reminiscence therapy, helping patients reconnect with their memories and experience moments of clarity and joy.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />
            <img
              src="/house4.jpg"
              alt="Reminiscence therapy illustration"
              className="relative z-10 w-full rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="space-y-8 text-center">
            <p className="text-lg leading-8 text-on-surface-variant">
              Through our work, we’ve witnessed the transformative power of memory preservation. When patients hold their memory books and see familiar faces and places, their expressions light up with recognition and happiness.
            </p>
            <p className="mx-auto max-w-3xl text-2xl font-semibold italic text-primary">
              “We believe that every person deserves to be remembered and celebrated.”
            </p>
          </div>
        </div>
      </section>

      <section className="py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter text-center mb-12 lg:mb-14">
          <h2 className="text-4xl font-semibold text-primary">Our Founders</h2>
          <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-primary" />
        </div>
        <div className="mx-auto max-w-[1200px] px-gutter space-y-10 lg:space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-stretch">
            <div>
              <div className="group relative overflow-hidden rounded-[2rem] border border-outline-variant bg-white shadow-xl">
              <img
                src="/board.jpeg"
                alt="Both founders together"
                  className="h-[360px] w-full object-cover transition duration-500 group-hover:brightness-75 sm:h-[420px]"
              />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100">
                  <p className="m-6 rounded-xl bg-black/45 px-4 py-3 text-sm leading-relaxed text-white sm:text-base">
                    Founders Disha and Anish in San Antonio, TX for a city council meeting to expand MMI&apos;s impact.
                  </p>
                </div>
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <a
                  href="https://www.linkedin.com/in/disha-somasetty-95835a373/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border-2 border-primary bg-surface px-6 py-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary"
                >
                  <p className="text-xl font-semibold">Disha Somasetty</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em]">Co-Founder</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/anish-senthil-65323b375/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border-2 border-primary bg-surface px-6 py-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary"
                >
                  <p className="text-xl font-semibold">Anish Senthil</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em]">Co-Founder</p>
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-surface-container-lowest p-8 border border-outline-variant shadow-sm sm:p-10 lg:p-11">
              <h3 className="text-3xl font-semibold text-secondary mb-6">Our Inspiration</h3>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Our journey began when we both started volunteering at a local senior care facility. Working closely with residents living with dementia, we witnessed firsthand the incredible power of memories to bring joy, comfort, and connection.
                </p>
                <p>
                  We saw how a simple photograph could light up someone’s face, how a familiar story could spark meaningful conversations, and how preserving these precious moments could strengthen the bonds between patients and their families.
                </p>
                <p>
                  This experience deeply inspired us to create Mindful Memories Initiative. We continue to love volunteering at the senior care facility, and this experience guides our mission to bring personalized memory books to more families affected by dementia.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src="/present1.png"
                alt="Volunteers working with seniors in a community setting"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src="/house.jpeg"
                alt="Seniors smiling together during a group activity"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-on-secondary py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter text-center">
          <h2 className="text-4xl font-semibold mb-6">Support Our Mission</h2>
          <p className="mx-auto max-w-2xl text-body-lg leading-relaxed opacity-90 mb-8">
            Every memory book we create is a reflection of care, compassion, and dedication. Join us in bringing joy to families affected by dementia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/programs"
              className="rounded-lg bg-on-secondary text-secondary px-8 py-4 font-bold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Learn About Our Mission
            </a>
            <a
              href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-on-secondary text-on-secondary px-8 py-4 font-bold hover:bg-on-secondary hover:text-secondary transition-all"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
''',
    'programs/page.js': '''import PageShell from "../components/PageShell";

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
''',
    'impact/page.js': '''import PageShell from "../components/PageShell";

export default function ImpactPage() {
  return (
    <PageShell>
      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16 items-center">
          <div>
            <span className="inline-flex rounded-full bg-surface-container px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Our Impact
            </span>
            <h1 className="mt-6 text-5xl font-semibold text-on-background leading-tight">
              Measuring the Heart of Our Mission
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
              At Mindful Memories Initiative, impact isn’t just about numbers; it’s about the moments of connection, the spark of recognition, and the support we provide to families navigating the journey of dementia.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <img
              src="/book2.jpeg"
              alt="Memory book pages highlighting family moments"
              className="h-[320px] w-full object-cover sm:h-[380px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-10 shadow-sm shadow-surface-container-highest">
              <p className="text-5xl font-bold text-primary">100</p>
              <p className="mt-4 uppercase tracking-[0.25em] text-sm text-on-surface-variant">Cognitive Engagement Kits Distributed</p>
            </div>
            <div className="rounded-[2rem] bg-white p-10 shadow-sm shadow-surface-container-highest">
              <p className="text-5xl font-bold text-primary">10</p>
              <p className="mt-4 uppercase tracking-[0.25em] text-sm text-on-surface-variant">Personalized Memory Books Created</p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-secondary text-on-secondary p-10 shadow-2xl">
              <p className="text-5xl font-bold">2</p>
              <p className="mt-4 uppercase tracking-[0.25em] text-sm">Active Chapters</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-on-secondary animate-pulse" />
                <span className="text-sm">Upcoming: India Expansion</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 items-center">
            <div className="w-full overflow-hidden rounded-[2rem] bg-white shadow-sm shadow-surface-container-highest">
              <img
                src="/book3.jpg"
                alt="Family memory book spread with personal stories"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
            </div>
            <div className="rounded-[2rem] border border-outline bg-surface p-8 shadow-sm shadow-surface-container-highest sm:p-10 lg:p-12">
              <h3 className="text-3xl font-semibold text-primary mb-4">Real stories, real results</h3>
              <p className="text-on-surface-variant leading-8 text-left">
                Every number we share is built on emotional reconnection, improved comfort, and renewed dignity. Our programs are designed to support families, caregivers, and communities through easy-to-use tools and compassionate care.
              </p>
              <p className="mt-6 text-on-surface-variant leading-8 text-left">
                From memory books to sensory kits, we create resources that can be used at home, in care facilities, or during family visits to spark conversation and familiar feelings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <h2 className="text-headline-lg text-headline-lg text-primary text-center mb-16">Community Recognition</h2>
          <div className="grid gap-8 md:grid-cols-2 mb-8">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm text-center">
              <img src="/proclamation1.jpg" alt="MMI proclamation 1" className="mx-auto h-80 w-full object-contain" />
            </div>
            <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm text-center">
              <img src="/proclamation2.jpg" alt="MMI proclamation 2" className="mx-auto h-80 w-full object-contain" />
            </div>
            <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm text-center">
              <img src="/proclamation3.jpg" alt="MMI proclamation 3" className="mx-auto h-80 w-full object-contain" />
            </div>
            <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm text-center">
              <img src="/proclamation4.jpg" alt="MMI proclamation 4" className="mx-auto h-80 w-full object-contain" />
            </div>
          </div>
          <p className="mb-12 text-center text-body-lg text-on-surface-variant">
            These proclamations recognize how MMI has raised dementia awareness in communities across Texas.
          </p>
          <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-outline-variant bg-white">
            <a href="https://youtu.be/fYu-dLxykQk?si=1WWhIPRMSceHYu4i" target="_blank" rel="noreferrer" className="block">
              <div className="aspect-video w-full bg-surface-dim relative flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs1XCSV1ekS_5yAiMn19Q_lTyUbAwBOfbu-9EdxDp_ndiB0emp77_QTTpRqy_F00MUxdMXQxtwAf5TuA_TNGLpQlpCwdPfBiTJTclynDiitPNxlUQwq1TIcAF8RQPEXK0ec1fsEnhK6gbM9nMHzVnIFKbjlq27KwJ_yAx944ywL3u2sSgE0GYO3SujYILEmB1R2-0ToQNKAX1jlocEPy-ACnwaWQtHuQCtrpfAg_jG4mqUq0XTEgN8e0VAKNjiS0xixB5Jb0tC3k0x"
                  alt="Manvel City Council Presentation"
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <span className="material-symbols-outlined relative z-10 text-7xl text-white">play_circle</span>
              </div>
            </a>
            <div className="p-6 text-center">
              <p className="font-headline-md text-headline-md text-primary">City Council Presentations Across Texas</p>
              <p className="mt-2 text-body-md text-on-surface-variant">
                MMI presented to city councils all over Texas to raise dementia awareness and expand impact and outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-[5rem] text-on-secondary">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="bg-secondary p-12 rounded-2xl text-center overflow-hidden relative">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="font-headline-xl text-headline-xl">Join the Movement</h2>
              <p className="text-body-lg max-w-2xl mx-auto opacity-90 mt-4">
                Help us double our impact in the coming year. Whether you give time, resources, or advocacy, every contribution creates a ripple of memory.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-secondary px-10 py-4 font-bold hover:bg-surface-container transition-all"
                >
                  Support the Expansion
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-10 py-4 font-bold text-white hover:bg-white/10 transition-all"
                >
                  Volunteer Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
''',
    'gallery/page.js': '''import PageShell from "../components/PageShell";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_QbkTcQMeZ_P5AIIpYz05xeol9QJ1LhDxxkOunswux5C0L1Hd8FIjjuXf4tB-mpQPwCFZodALUGc-XwpwGSLaMeGmZlJd1sI82jNqLM-cW0vkDfimjEXt2OWbeunz_KM0Wt2n8H0RAVkTn2FUxbPd5bsPvbvv82NSRPhkAEMcTLuQwBhGOdanGitn14QjC26_ld3YTbMA5GhtJDD5cTHIg3d8bSgJBLkxiC7IfHYF9M8CbGoZM6DqSSU-PKMQZCvTJ8N922yrPdh6",
    alt: "Volunteers assembling care kits",
    classes: "masonry-item-tall"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIyhjB1DxO6kxq3a5Z32TizNuSPq9MR_D3j8QQxggqcVMv3lk7ato2P9e_WVWNv4nfugJkSxR1VqvOPoGalBGgrNB8h53ZHnwLZ12SfqQGjA5sphfGfn0xCw5qjw2ns6gHje3_KWofiIIWvmwGqtnZsD5WSOi8B-lfEjmUQhLnOnchHH9NDtMvVGLHhYCItv5-WMPlMUY9Xnn-7iA8h_cw0fX_ciYUYfjZ6Hnr8FYLq-aTAd2QToeYfKtsvthbTURAQASfbE4CfpKr",
    alt: "Founders with seniors",
    classes: ""
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZa6d_UXa1KFSQwCuJgque23uErz4uNaT-gt8jU8ZGsyOmnG_fxSGL8Hq1PxPTHZoGiU0djTohmdcaRK0v1ko5ZvmfAC4gSzdo2Ywh7d1K2YdIzGu-AHC2gRNs_nY0M9Ic2JTaWkE_wi0_f5bIEuE1lb7gtXdOwwyH3CCDCePD1faMeGGB4Zxn2AnDAXNPVRo8Axe0kePsm7aTHB8_tpMdPoMooxSH4gK_1Shu3lPKLSz3lySd_GnBH5oSNe05JxvbbA-IWQtorFt4",
    alt: "Memory book creation",
    classes: ""
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4Q2InlJtt2m7RQP0AqQPzSqq0gWZmah2lCngf_8QSrUVjItkjiEbfRxJ2P5zdIF5Ic94YDUNsPILcMqskvSK9T6-wK8jywoCcxP9ZcVa1uATgyeGgXXpxEdJl5Tr3FxBLord2URaJ53-SzsgNRyJW172zxM2bLsrHwZ_qjpknZLbL99uLv3hs7PU1vXn5hBH81-n9aGJyZNIQEWbjWpC899AYCrikUoBMS4kjMUKN58vNdYpHAEuyqSB2SmWVW6I-nQPUKfrk-Pg",
    alt: "Community outreach event",
    classes: ""
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnRcJzvjQsjG8oHB_G34kcp2PqdgauRylc5xYTyKjF3izKDTHDUn7ByWhkbnbyCerGvZiYxFN2OslelEMaCyvqC6m1dZp4UVLxb_bB-f6INc4A5VHZTKy0uRsm6aOal-wP7nOICsAmROZ_tjdZr3m85mwfoWkkFSlMqSIJRKFh_hxt-0cyQQ-XMKMAXGn4c2NaXl2V9urBmFTxQvoUls2P9grXV09jIgYnxX5fLW15j_FOEBpKBIc1TRUdLH-MBCwdRH7GrcNvi5p5",
    alt: "Sensory kit items",
    classes: ""
  }
];

export default function GalleryPage() {
  return (
    <PageShell>
      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter text-center">
          <span className="inline-block rounded-full bg-surface-container px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Capturing Compassion
          </span>
          <h1 className="mt-6 text-5xl font-semibold text-primary">Our Mission in Action</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
            Witness the moments of connection, creativity, and care that define our journey. From local workshops to global outreach, every image tells a story of dignity restored.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="masonry-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className={`${image.classes} group relative overflow-hidden rounded-[2rem] bg-white shadow-sm border border-outline-variant image-hover-zoom`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:brightness-75"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-black/10 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="m-4 rounded-lg bg-black/55 px-3 py-2 text-xs leading-relaxed text-white sm:text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
            <div className="masonry-item-wide rounded-[2rem] bg-surface-container border-2 border-dashed border-outline p-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="text-2xl font-semibold text-on-surface">Coming Soon: India Chapter</h3>
              <p className="mt-4 text-on-surface-variant">
                Expanding our global reach to support families in Mumbai and beyond. Stay tuned for updates on our international launch.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold">
                <span className="text-sm">LAUNCHING FALL 2024</span>
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-8 md:grid-cols-3 text-center">
          <div>
            <p className="text-5xl font-bold text-primary">100+</p>
            <p className="mt-2 uppercase tracking-[0.25em] text-sm text-on-surface-variant">Kits Distributed</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">2</p>
            <p className="mt-2 uppercase tracking-[0.25em] text-sm text-on-surface-variant">Active Chapters</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">500+</p>
            <p className="mt-2 uppercase tracking-[0.25em] text-sm text-on-surface-variant">Lives Impacted</p>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
''',
    'contact/page.js': '''import PageShell from "../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-flex rounded-full bg-secondary-fixed px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-on-secondary-fixed">
              Connect With Us
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-on-background">Get in Touch</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
              We would love to hear from you. Whether you’re a family seeking a memory book for a loved one, a student looking to volunteer, or a donor wanting to support our mission, your voice matters to us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-container"
              >
                Apply for a Memory Book
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmBLgVRSQ9O9XLAl5M50lO-c1fPf-4IBg13yGlFxyuZkYArA/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition hover:bg-surface-container-low"
              >
                Volunteer Today
                <span className="material-symbols-outlined text-sm">volunteer_activism</span>
              </a>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-[2rem] border border-outline bg-surface-container-low shadow-xl md:h-[500px]">
            <img
              src="/book1.jpeg"
              alt="Hands of caregiver and senior holding memory cards"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/90 p-6 shadow-xl md:max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">“Bringing joy through the power of reminiscence.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-surface p-10 shadow-sm shadow-surface-container-highest border border-outline">
            <h2 className="text-3xl font-semibold text-on-background">Contact Information</h2>
            <div className="mt-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-fixed text-on-secondary-fixed">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-on-surface-variant">Email us at</p>
                  <a href="mailto:mindfulmemoriesinitiative@gmail.com" className="mt-2 block text-lg font-semibold text-primary">
                    mindfulmemoriesinitiative@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-fixed text-on-secondary-fixed">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-on-surface-variant">Follow our journey</p>
                  <a href="https://instagram.com/mindfulmemoriesinitiative" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-primary">
                    @mindfulmemoriesinitiative
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-fixed text-on-secondary-fixed">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-on-surface-variant">Mailing Address</p>
                  <p className="mt-2 text-on-surface-variant leading-relaxed">
                    Mindful Memories Initiative<br />
                    742 Heritage Oaks Way<br />
                    Sacramento, CA 95825
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-primary p-10 text-on-primary shadow-2xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 opacity-10 text-[180px]">
              <span className="material-symbols-outlined">auto_stories</span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl opacity-50">format_quote</span>
              <p className="mt-6 text-2xl font-semibold italic leading-relaxed">
                Our mission is to preserve precious memories and bring joy to dementia patients through personalized memory books, creating meaningful connections between patients, families, and caregivers.
              </p>
              <div className="mt-8 border-t border-on-primary/20 pt-6">
                <p className="text-sm uppercase tracking-[0.24em] text-on-primary/80">Mindful Memories Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="rounded-[2rem] bg-surface-container-high p-10 shadow-sm shadow-surface-container-highest border border-outline">
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-center">
              <div>
                <h2 className="text-4xl font-semibold text-on-background">Want to help us make a difference?</h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-on-surface-variant">
                  Join our mission to bring joy and comfort to dementia patients and their families. Every contribution helps us expand our reach.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <a
                  href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-on-secondary transition hover:bg-primary"
                >
                  Make a Donation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
'''
}

for relative_path, content in files.items():
    path = base / relative_path
    path.write_text(content, encoding='utf-8')
    print(f'Updated {path}')
