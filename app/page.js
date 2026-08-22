"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageShell from "./components/PageShell";
import { fetchSiteContent } from "./lib/api";
import { cloneDefaultSiteContent } from "./lib/site-content";

const heroImages = [
  "/board.jpeg",
  "/book1.jpeg",
  "/book2.jpeg",
  "/book3.jpg",
  "/chipotle1.png",
  "/chipotle4.png",
  "/house.jpeg",
  "/house2.jpeg",
  "/house3.jpg",
  "/house4.jpg",
  "/package1.jpeg",
  "/walk1.jpeg",
  "/walk2.jpeg",
  "/walk3.jpeg"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [siteContent, setSiteContent] = useState(cloneDefaultSiteContent());

  const calendarEvents = [...siteContent.calendar.events].sort((left, right) => {
    const leftTime = new Date(`${left.date}T${left.time || "00:00"}`).getTime();
    const rightTime = new Date(`${right.date}T${right.time || "00:00"}`).getTime();
    return leftTime - rightTime;
  });

  useEffect(() => {
    heroImages.forEach((imagePath) => {
      const image = new Image();
      image.src = imagePath;
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const refreshContent = () => {
      fetchSiteContent()
        .then((content) => {
          if (isMounted) {
            setSiteContent(content);
          }
        })
        .catch(() => {
          if (isMounted) {
            setSiteContent(cloneDefaultSiteContent());
          }
        });
    };

    const handleSiteContentUpdate = () => refreshContent();
    const handleStorageUpdate = (event) => {
      if (event.key === "mmi-site-content-updated-at") {
        refreshContent();
      }
    };

    refreshContent();
    window.addEventListener("mmi-site-content-updated", handleSiteContentUpdate);
    window.addEventListener("storage", handleStorageUpdate);

    return () => {
      isMounted = false;
      window.removeEventListener("mmi-site-content-updated", handleSiteContentUpdate);
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % heroImages.length;
      setNextImageIndex(nextIndex);
      setIsTransitioning(true);

      window.setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setIsTransitioning(false);
      }, 1200);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <PageShell>
      <section className="bg-primary text-on-primary overflow-hidden py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <span className="inline-flex items-center gap-2 text-secondary-fixed-dim font-semibold uppercase tracking-[0.24em]">
              <span className="material-symbols-outlined">menu_book</span>
              Capturing Compassion
            </span>
            <h1 className="text-headline-xl text-headline-xl leading-tight">
              Preserving Precious Memories, Bringing Joy to Dementia Patients
            </h1>
            <p className="max-w-xl text-body-lg text-on-primary/90">
              Discover the power of reminiscence therapy and witness the facial expressions of joy.
            </p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-nowrap sm:items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeXWlEgcQxewdMXjvDiPQQuTYtGcCkM-Bf8GHqfGpdEp5WeQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-surface px-8 py-4 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low sm:whitespace-nowrap"
              >
                Apply for a Memory Book
              </a>
              <a
                href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-on-primary px-8 py-4 text-sm font-semibold text-on-primary transition hover:bg-on-primary/10 sm:whitespace-nowrap"
              >
                Make a Donation
              </a>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-full border border-on-primary/30 bg-on-primary/8 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-on-primary transition hover:bg-on-primary/14 sm:whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
                Admin
              </Link>
            </div>
          </div>

          <div className="relative lg:w-1/2">
            <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-3xl" />
            <div className="relative z-10 h-[420px] w-full overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={heroImages[currentImageIndex]}
                alt="Mindful Memories Initiative hero gallery"
                className="absolute inset-0 h-full w-full object-cover opacity-100"
              />
              <img
                src={heroImages[nextImageIndex]}
                alt="Mindful Memories Initiative hero gallery"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1200 ease-in-out ${isTransitioning ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-padding">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-surface-container-low p-10 border border-outline-variant shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-fixed text-primary text-3xl">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <h2 className="text-4xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              To preserve precious memories and bring joy to dementia patients through personalized memory books, creating meaningful connections between patients, families, and caregivers while honoring each person&apos;s unique life story.
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
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-on-primary transition hover:bg-primary-container"
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

      <section className="bg-surface-container-low py-section-padding">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3 text-left">
              <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-[0.24em]">
                <span className="material-symbols-outlined">event</span>
                Community Calendar
              </span>
              <h2 className="text-headline-lg text-headline-lg text-primary">Upcoming events and volunteer moments</h2>
              <p className="text-body-lg leading-relaxed text-on-surface-variant">
                Stay updated on workshops, fundraisers, and outreach events that move the mission forward.
              </p>
            </div>
            <Link
              href="/calendar"
              className="inline-flex items-center justify-center rounded-full border border-outline bg-surface px-6 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low"
            >
              View Full Calendar
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {calendarEvents.slice(0, 3).map((event) => (
              <article key={event.id} className="rounded-[1.75rem] border border-outline-variant bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{event.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-primary">{event.title}</h3>
                  </div>
                  <div className="rounded-2xl bg-surface-container-low px-4 py-3 text-right">
                    <p className="text-sm font-semibold text-on-surface">{new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
                    <p className="text-xs text-on-surface-variant">{event.time}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-on-surface-variant">{event.description}</p>
                <p className="mt-4 text-sm font-semibold text-on-surface">{event.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
