"use client";

import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import { fetchSiteContent } from "../lib/api";
import { cloneDefaultSiteContent } from "../lib/site-content";

export default function GalleryPage() {
  const [siteContent, setSiteContent] = useState(cloneDefaultSiteContent());
  const [activeTab, setActiveTab] = useState(siteContent.gallery.sections[0].id);

  const gallerySections = siteContent.gallery.sections;
  const currentSection = gallerySections.find((section) => section.id === activeTab) ?? gallerySections[0];

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
    if (!gallerySections.some((section) => section.id === activeTab)) {
      setActiveTab(gallerySections[0]?.id || "");
    }
  }, [activeTab, gallerySections]);

  return (
    <PageShell>
      <section className="bg-surface py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="space-y-6 rounded-[2rem] border border-outline-variant bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-on-secondary-fixed">
              Gallery
            </span>
            <h1 className="text-5xl font-semibold leading-tight text-primary">{siteContent.gallery.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
              {siteContent.gallery.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="flex flex-wrap gap-3">
            {gallerySections.map((section) => {
              const isActive = section.id === activeTab;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveTab(section.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${isActive ? "bg-primary text-on-primary" : "bg-white text-on-surface hover:bg-surface-container"}`}
                >
                  <span className="material-symbols-outlined text-base">collections</span>
                  {section.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[2rem] border border-outline-variant bg-white p-6 shadow-sm sm:p-8">
            <p className="text-on-surface-variant">{currentSection?.intro}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {(currentSection?.items || []).map((item) => (
                <article key={`${item.src}-${item.alt}`} className="group overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-low shadow-sm image-hover-zoom">
                  <div className="relative h-64 overflow-hidden bg-surface-container sm:h-72">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                      {item.caption ? (
                        <div className="rounded-2xl bg-black/45 p-4 backdrop-blur-sm">
                          <p className="text-sm leading-6 text-white/90" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden" }}>
                            {item.caption}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}