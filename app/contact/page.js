import PageShell from "../components/PageShell";

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
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-container"
              >
                Apply for a Memory Book
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmBLgVRSQ9O9XLAl5M50lO-c1fPf-4IBg13yGlFxyuZkYArA/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low"
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
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-surface-container-lowest/95 p-6 shadow-xl md:max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">“Bringing joy through the power of reminiscence.”</p>
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
                  <a
                    href="https://instagram.com/mindfulmemoriesinitiative"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-lg font-semibold text-primary"
                  >
                    @mindfulmemoriesinitiative
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-fixed text-on-secondary-fixed">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-on-surface-variant">Call us</p>
                  <a href="tel:3465889572" className="mt-2 block text-lg font-semibold text-primary">
                    3465889572
                  </a>
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
                <p className="text-sm uppercase tracking-[0.24em] text-on-primary/90">Mindful Memories Initiative</p>
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
