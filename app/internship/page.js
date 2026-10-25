import PageShell from "../components/PageShell";

const applicationUrl = "https://tally.so/r/q5Zj9d";

const highlights = [
  {
    title: "Make a Direct Impact",
    image: "/house2.jpeg",
    alt: "Volunteers connecting with seniors",
    text: "Work hands-on with older adults in senior centers and assisted living communities. Build meaningful connections through personalized activities, conversations, and cognitive engagement programs designed to promote social interaction and emotional well-being."
  },
  {
    title: "Gain Real-World Experience",
    image: "/boxes.jpeg",
    alt: "MMI volunteers at a community event",
    text: "Explore healthcare-related service, nonprofit operations, project management, and community outreach. Develop communication, teamwork, problem-solving, and leadership skills through meaningful responsibilities and real-world experiences."
  },
  {
    title: "Lead Meaningful Initiatives",
    image: "/walk3.jpeg",
    alt: "MMI members during a neighborhood outreach walk",
    text: "Take an active role in planning community events, coordinating volunteer projects, organizing awareness campaigns, and expanding MMI’s reach across the Texas Gulf Coast. Turn your ideas into initiatives that create measurable community impact."
  },
  {
    title: "Support Seniors & Families",
    image: "/carts.jpeg",
    alt: "Cognitive engagement kits prepared for seniors",
    text: "Help create personalized memory books, assemble cognitive engagement kits, and deliver meaningful resources to seniors and their caregivers. Every project contributes to MMI’s mission of preserving memories, encouraging connection, and supporting families affected by dementia."
  }
];

const tracks = [
  {
    title: "Senior Engagement & Community Care",
    image: "/house4.jpg",
    alt: "Seniors and volunteers during an engagement activity",
    text: "Gain firsthand experience in senior care environments by participating in supervised, hands-on engagement activities with older adults. Assist with cognitive stimulation programs, facilitate meaningful interactions, and help create welcoming, supportive experiences for seniors."
  },
  {
    title: "Memory Preservation & Cognitive Engagement",
    image: "/book1.jpeg",
    alt: "A page from a personalized memory book",
    text: "Contribute directly to MMI’s signature initiatives by creating personalized memory books and preparing cognitive engagement kits. Work collaboratively to develop and deliver resources that encourage connection, preserve personal stories, and support individuals experiencing cognitive decline."
  },
  {
    title: "Outreach, Partnerships & Leadership",
    image: "/board.jpeg",
    alt: "MMI founders at a city council meeting",
    text: "Develop professional communication and leadership skills by connecting with senior centers, healthcare organizations, and community partners. Help coordinate service opportunities, organize outreach campaigns, and expand MMI’s impact throughout the Texas Gulf Coast."
  },
  {
    title: "Research, Education & Advocacy",
    image: "/proclamation1.jpg",
    alt: "City proclamation recognizing MMI",
    text: "Explore the intersection of neuroscience, aging, and public health through educational initiatives and evidence-based projects. Contribute to dementia awareness campaigns, develop informational resources, and advocate for greater understanding of neurological conditions and the challenges faced by caregivers."
  }
];

const steps = [
  {
    title: "Submit Your Application",
    text: "Complete the online application and share your interests, experiences, and motivation for joining the MMI Youth Internship Program."
  },
  {
    title: "Tell Us Your Story",
    text: "Help us understand your passion for community service, healthcare, leadership, or neuroscience, and what you hope to contribute to our mission."
  },
  {
    title: "Participate in the Selection Process",
    text: "Selected applicants will be invited to an interview or introductory meeting to discuss their interests, availability, and potential contributions."
  },
  {
    title: "Begin Your Internship",
    text: "Accepted interns will receive onboarding information, program expectations, and opportunities to participate in meaningful projects and community engagement activities."
  }
];

const timeline = [
  { label: "Applications Open", value: "November 1, 2026", icon: "event_available" },
  { label: "Application Deadline", value: "November 30, 2026", icon: "event_busy" },
  { label: "Location", value: "Texas Gulf Coast Region", icon: "location_on" },
  { label: "Program", value: "MMI Youth Internship Program", icon: "school" }
];

export default function InternshipPage() {
  return (
    <PageShell>
      <section className="py-[3rem]">
        <div className="overflow-hidden rounded-[2rem] bg-primary px-8 py-12 text-on-primary shadow-2xl sm:px-12 sm:py-16">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em]">
            Mindful Memories Initiative
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
            Make an Impact. Gain Experience. Transform Lives.
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 opacity-95">
            <p>
              Turn your passion for healthcare, leadership, and community service into meaningful action through the MMI Youth Internship Program.
            </p>
            <p>
              Open to motivated students across the Texas Gulf Coast, this hands-on internship provides opportunities to work directly with older adults in senior living communities, support individuals affected by dementia and neurological conditions, and contribute to initiatives that make a lasting difference.
            </p>
            <p>
              Gain real-world experience, develop valuable leadership skills, and become part of a student-led movement dedicated to improving the lives of seniors and their families.
            </p>
          </div>
          <a
            href={applicationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 font-bold uppercase tracking-wide text-primary transition-colors hover:bg-surface-container sm:w-auto"
          >
            Apply to Become an Intern →
          </a>
          <p className="mt-6 text-sm opacity-85">
            Hands-On Experience · Healthcare Exposure · Leadership Development · Community Impact
          </p>
        </div>
      </section>

      <section className="py-[4rem]">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-primary">Beyond Volunteering. Experience That Matters.</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
          <div className="mt-6 space-y-4 text-lg leading-8 text-on-surface-variant">
            <p>
              The MMI Youth Internship Program goes beyond traditional community service. Interns become active contributors to meaningful projects, gaining firsthand exposure to senior care environments while developing the skills needed to create lasting change.
            </p>
            <p>
              Through direct community engagement, collaborative projects, and leadership opportunities, interns gain experiences that strengthen both their professional development and their impact on the community.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {highlights.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[2rem] bg-surface-container-low shadow-sm shadow-surface-container-highest">
              <img src={card.image} alt={card.alt} className="h-64 w-full object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-on-surface">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-on-surface-variant">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[4rem]">
        <div className="rounded-[2rem] bg-surface-container-low p-8 shadow-sm shadow-surface-container-highest md:p-12">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3 font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="material-symbols-outlined">explore</span>
              Find Your Place at MMI
            </div>
            <h2 className="text-4xl font-semibold text-on-surface">Discover Your Passion. Build Your Future.</h2>
            <p className="mt-6 text-lg leading-8 text-on-surface-variant">
              Every intern brings a unique perspective, set of interests, and passion for service. Whether you’re interested in healthcare, neuroscience, nonprofit leadership, or community advocacy, MMI offers opportunities to explore your interests while making a meaningful difference.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {tracks.map((track, index) => (
              <div key={track.title} className="flex flex-col gap-6 rounded-[2rem] bg-surface p-6 sm:flex-row sm:items-center">
                <img src={track.image} alt={track.alt} className="h-40 w-full shrink-0 rounded-2xl object-cover sm:h-28 sm:w-28" />
                <div>
                  <h3 className="text-xl font-semibold text-on-surface">
                    <span className="text-primary">{index + 1}.</span> {track.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-on-surface-variant">{track.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[4rem]">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-primary">Your Opportunity to Make a Difference Starts Here.</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-8 text-on-surface-variant">
            We are looking for passionate, dedicated, and service-driven students who are eager to develop their skills, take initiative, and make a meaningful impact in their communities.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-on-primary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-on-surface">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-on-surface-variant">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="h-fit rounded-[2rem] border-l-4 border-primary bg-surface-container-low p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Application Timeline</h3>
            <dl className="mt-6 space-y-5">
              {timeline.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <dt className="text-sm text-on-surface-variant">{item.label}</dt>
                    <dd className="font-semibold text-on-surface">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <a
              href={applicationUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary-container"
            >
              Start Your Application →
            </a>
          </div>
        </div>
      </section>

      <section className="py-[3rem]">
        <div className="rounded-[2rem] bg-secondary px-8 py-14 text-center text-on-secondary">
          <h2 className="mb-6 text-4xl font-semibold">Your Impact Starts With One Decision.</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 opacity-90">
            Join a community of motivated young leaders committed to supporting seniors, preserving memories, and creating meaningful change. Through the MMI Youth Internship Program, your time, compassion, and dedication can become something truly extraordinary.
          </p>
          <a
            href={applicationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 font-bold text-secondary transition-colors hover:bg-surface-container"
          >
            Apply to Become an Intern →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
