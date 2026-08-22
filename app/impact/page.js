import PageShell from "../components/PageShell";

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
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-on-secondary shadow-sm">
              <span className="text-2xl font-bold">2</span>
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">Active Chapters</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
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
                <span className="material-symbols-outlined relative z-10 text-7xl text-on-primary">play_circle</span>
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
              <p className="text-body-lg max-w-2xl mx-auto text-on-secondary/95 mt-4">
                Help us double our impact in the coming year. Whether you give time, resources, or advocacy, every contribution creates a ripple of memory.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-on-surface px-10 py-4 font-bold hover:bg-surface-container transition-all"
                >
                  Support the Expansion
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-on-secondary px-10 py-4 font-bold text-on-secondary hover:bg-on-secondary/10 transition-all"
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
