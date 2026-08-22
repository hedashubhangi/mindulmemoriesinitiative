import PageShell from "../components/PageShell";

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
          <p className="mx-auto max-w-2xl text-body-lg leading-relaxed text-on-secondary/95 mb-8">
            Every memory book we create is a reflection of care, compassion, and dedication. Join us in bringing joy to families affected by dementia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/programs"
              className="rounded-lg bg-on-secondary text-on-surface px-8 py-4 font-bold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Learn About Our Mission
            </a>
            <a
              href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-on-secondary text-on-secondary px-8 py-4 font-bold hover:bg-on-secondary hover:text-on-surface transition-all"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
