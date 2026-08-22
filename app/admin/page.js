"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PageShell from "../components/PageShell";
import { fetchSiteContent, saveSiteContent } from "../lib/api";
import { cloneDefaultSiteContent } from "../lib/site-content";

const ADMIN_EMAIL = "mindfulmemoriesinitiative@gmail.com";
const ADMIN_PASSWORD = "Mindful4EVA!";

function createGallerySection() {
  return {
    id: `section-${Date.now()}`,
    label: "New Section",
    intro: "",
    items: [
      {
        src: "",
        alt: "",
        caption: ""
      }
    ]
  };
}

function createGalleryItem() {
  return {
    src: "",
    alt: "",
    caption: ""
  };
}

function createCalendarEvent() {
  return {
    id: `event-${Date.now()}`,
    title: "New Event",
    date: new Date().toISOString().slice(0, 10),
    time: "4:00 PM",
    location: "",
    description: "",
    category: "Workshop"
  };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(typeof reader.result === "string" ? reader.result : "");
    };

    reader.onerror = () => reject(new Error("Unable to read the selected image."));
    reader.readAsDataURL(file);
  });
}

export default function AdminPage() {
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [siteContent, setSiteContent] = useState(cloneDefaultSiteContent());
  const [activeTab, setActiveTab] = useState("gallery");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (window.sessionStorage.getItem("mmi-admin-auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      window.sessionStorage.setItem("mmi-admin-auth", "true");
    } else {
      window.sessionStorage.removeItem("mmi-admin-auth");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    let isMounted = true;
    setLoading(true);

    fetchSiteContent()
      .then((content) => {
        if (isMounted) {
          setSiteContent(content);
        }
      })
      .catch(() => {
        if (isMounted) {
          setSiteContent(cloneDefaultSiteContent());
          setStatus({ type: "error", message: "Loaded starter content because the site content service was unavailable." });
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated]);

  const sortedCalendarEvents = useMemo(() => {
    return [...siteContent.calendar.events].sort((left, right) => {
      const leftTime = new Date(`${left.date}T${left.time || "00:00"}`).getTime();
      const rightTime = new Date(`${right.date}T${right.time || "00:00"}`).getTime();
      return leftTime - rightTime;
    });
  }, [siteContent]);

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setStatus({ type: "success", message: "Admin login successful." });
      return;
    }

    setStatus({ type: "error", message: "Invalid admin credentials." });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setStatus({ type: "success", message: "You have been logged out." });
  };

  const updateGallerySection = (sectionIndex, field, value) => {
    setSiteContent((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        sections: current.gallery.sections.map((section, index) => (index === sectionIndex ? { ...section, [field]: value } : section))
      }
    }));
  };

  const updateGalleryItem = (sectionIndex, itemIndex, field, value) => {
    setSiteContent((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        sections: current.gallery.sections.map((section, index) => {
          if (index !== sectionIndex) {
            return section;
          }

          return {
            ...section,
            items: section.items.map((item, currentIndex) => (currentIndex === itemIndex ? { ...item, [field]: value } : item))
          };
        })
      }
    }));
  };

  const handleGalleryImageUpload = async (sectionIndex, itemIndex, file) => {
    if (!file) {
      return;
    }

    const dataUrl = await fileToDataUrl(file);
    updateGalleryItem(sectionIndex, itemIndex, "src", dataUrl);
  };

  const clearGalleryImage = (sectionIndex, itemIndex) => {
    updateGalleryItem(sectionIndex, itemIndex, "src", "");
  };

  const addGallerySection = () => {
    setSiteContent((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        sections: [...current.gallery.sections, createGallerySection()]
      }
    }));
  };

  const removeGallerySection = (sectionIndex) => {
    setSiteContent((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        sections: current.gallery.sections.filter((_, index) => index !== sectionIndex)
      }
    }));
  };

  const addGalleryItem = (sectionIndex) => {
    setSiteContent((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        sections: current.gallery.sections.map((section, index) => {
          if (index !== sectionIndex) {
            return section;
          }

          return { ...section, items: [...section.items, createGalleryItem()] };
        })
      }
    }));
  };

  const removeGalleryItem = (sectionIndex, itemIndex) => {
    setSiteContent((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        sections: current.gallery.sections.map((section, index) => {
          if (index !== sectionIndex) {
            return section;
          }

          return {
            ...section,
            items: section.items.filter((_, currentIndex) => currentIndex !== itemIndex)
          };
        })
      }
    }));
  };

  const updateCalendarEvent = (eventIndex, field, value) => {
    setSiteContent((current) => ({
      ...current,
      calendar: {
        ...current.calendar,
        events: current.calendar.events.map((event, index) => (index === eventIndex ? { ...event, [field]: value } : event))
      }
    }));
  };

  const addCalendarEvent = () => {
    setSiteContent((current) => ({
      ...current,
      calendar: {
        ...current.calendar,
        events: [...current.calendar.events, createCalendarEvent()]
      }
    }));
  };

  const removeCalendarEvent = (eventIndex) => {
    setSiteContent((current) => ({
      ...current,
      calendar: {
        ...current.calendar,
        events: current.calendar.events.filter((_, index) => index !== eventIndex)
      }
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);

    try {
      const savedContent = await saveSiteContent(siteContent);
      if (savedContent?.content) {
        setSiteContent(savedContent.content);
      }
      setStatus({ type: "success", message: "Content saved successfully." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSaving(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <PageShell>
        <section className="bg-surface py-[5.5rem]">
          <div className="mx-auto max-w-2xl px-gutter">
            <div className="overflow-hidden rounded-[2rem] border border-outline-variant bg-white shadow-sm">
              <div className="bg-gradient-to-r from-primary/10 via-secondary-fixed/25 to-surface-container-low px-6 py-6 sm:px-8 sm:py-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Admin Login</p>
                    <h1 className="mt-3 text-4xl font-semibold text-primary">Manage Gallery and Calendar</h1>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-on-surface-variant">
                      Upload images, update events, and publish changes to the public site from one place.
                    </p>
                  </div>
                  <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-outline bg-white px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Back to Website
                  </Link>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
                <label className="space-y-2 text-sm text-on-surface-variant">
                  <span>Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </label>

                <label className="space-y-2 text-sm text-on-surface-variant">
                  <span>Password</span>
                  <div className="flex items-stretch overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-low focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-on-surface outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="inline-flex items-center justify-center border-l border-outline-variant px-4 text-secondary transition hover:bg-white"
                    >
                      <span className="material-symbols-outlined text-base">{showPassword ? "visibility_off" : "visibility"}</span>
                    </button>
                  </div>
                </label>

                {status ? (
                  <div className={`rounded-3xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900"}`}>
                    {status.message}
                  </div>
                ) : null}

                <button type="submit" className="mt-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-container">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="bg-surface py-[4.5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-outline-variant bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Admin Control Panel</p>
              <h1 className="mt-3 text-4xl font-semibold text-primary">Edit Gallery and Calendar Content</h1>
              <p className="mt-2 text-sm text-on-surface-variant">Changes save to the shared site content file and appear on the public website.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-outline bg-surface px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low">
                <span className="material-symbols-outlined text-base">home</span>
                Back to Website
              </Link>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving || loading}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-container disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-outline-variant bg-white px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low"
              >
                Log Out
              </button>
            </div>
          </div>

          {status ? (
            <div className={`mt-4 rounded-3xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900"}`}>
              {status.message}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("gallery")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === "gallery" ? "bg-primary text-on-primary" : "bg-white text-on-surface hover:bg-surface-container"}`}
            >
              <span className="material-symbols-outlined text-base">photo_library</span>
              Gallery
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("calendar")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === "calendar" ? "bg-primary text-on-primary" : "bg-white text-on-surface hover:bg-surface-container"}`}
            >
              <span className="material-symbols-outlined text-base">calendar_month</span>
              Calendar
            </button>
          </div>

          {loading ? <p className="mt-6 text-sm text-on-surface-variant">Loading current content...</p> : null}

          {activeTab === "gallery" ? (
            <section className="mt-6 space-y-6">
              <div className="rounded-[2rem] border border-outline-variant bg-white p-6 shadow-sm sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-on-surface-variant">
                    <span>Gallery Title</span>
                    <input
                      value={siteContent.gallery.title}
                      onChange={(event) => setSiteContent((current) => ({ ...current, gallery: { ...current.gallery, title: event.target.value } }))}
                      className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-on-surface-variant">
                    <span>Gallery Intro</span>
                    <textarea
                      rows="4"
                      value={siteContent.gallery.intro}
                      onChange={(event) => setSiteContent((current) => ({ ...current, gallery: { ...current.gallery, intro: event.target.value } }))}
                      className="w-full rounded-[1.5rem] border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-primary">Sections</h2>
                  <button type="button" onClick={addGallerySection} className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-on-secondary transition hover:bg-secondary-fixed-dim hover:text-on-secondary">
                    <span className="material-symbols-outlined text-base">add</span>
                    Add Section
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  {siteContent.gallery.sections.map((section, sectionIndex) => (
                    <article key={section.id} className="overflow-hidden rounded-[1.75rem] border border-outline-variant bg-surface-container-low shadow-sm">
                      <div className="bg-gradient-to-r from-primary/10 via-white to-secondary-fixed/20 px-5 py-4 sm:px-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <h3 className="text-xl font-semibold text-primary">Section {sectionIndex + 1}</h3>
                            <p className="mt-1 text-sm text-on-surface-variant">Each section can contain multiple image cards and text.</p>
                          </div>
                          <button type="button" onClick={() => removeGallerySection(sectionIndex)} className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-white">
                            <span className="material-symbols-outlined text-base">delete</span>
                            Delete Section
                          </button>
                        </div>
                      </div>

                      <div className="grid gap-4 px-5 py-5 sm:px-6 md:grid-cols-2">
                        <label className="space-y-2 text-sm text-on-surface-variant">
                          <span>Section ID</span>
                          <input
                            value={section.id}
                            onChange={(event) => updateGallerySection(sectionIndex, "id", event.target.value)}
                            className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </label>
                        <label className="space-y-2 text-sm text-on-surface-variant">
                          <span>Section Label</span>
                          <input
                            value={section.label}
                            onChange={(event) => updateGallerySection(sectionIndex, "label", event.target.value)}
                            className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </label>
                        <label className="space-y-2 text-sm text-on-surface-variant md:col-span-2">
                          <span>Section Intro</span>
                          <textarea
                            rows="3"
                            value={section.intro}
                            onChange={(event) => updateGallerySection(sectionIndex, "intro", event.target.value)}
                            className="w-full rounded-[1.5rem] border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </label>
                      </div>

                      <div className="mt-1 flex items-center justify-between gap-3 px-5 sm:px-6">
                        <h4 className="text-lg font-semibold text-on-surface">Images</h4>
                        <button type="button" onClick={() => addGalleryItem(sectionIndex)} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low">
                          <span className="material-symbols-outlined text-base">add_photo_alternate</span>
                          Add Image
                        </button>
                      </div>

                      <div className="space-y-4 px-5 py-5 sm:px-6">
                        {section.items.map((item, itemIndex) => (
                          <div key={`${section.id}-${itemIndex}`} className="grid gap-4 rounded-[1.5rem] border border-outline-variant bg-white p-4 shadow-sm lg:grid-cols-[240px_1fr] lg:p-5">
                            <div className="space-y-3 rounded-[1.25rem] border border-dashed border-outline-variant bg-surface-container-low p-4">
                              <div className="overflow-hidden rounded-[1rem] bg-white">
                                {item.src ? (
                                  <img
                                    src={item.src}
                                    alt={item.alt || `Gallery image ${itemIndex + 1}`}
                                    className="h-44 w-full object-cover"
                                  />
                                ) : (
                                  <div className="flex h-44 items-center justify-center px-4 text-center text-sm text-on-surface-variant">
                                    Upload an image to see a live preview here.
                                  </div>
                                )}
                              </div>
                              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-container">
                                <span className="material-symbols-outlined text-base">upload</span>
                                Upload image
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="sr-only"
                                  onChange={(event) => handleGalleryImageUpload(sectionIndex, itemIndex, event.target.files?.[0])}
                                />
                              </label>
                              <button type="button" onClick={() => clearGalleryImage(sectionIndex, itemIndex)} className="w-full rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-white">
                                Clear image
                              </button>
                              <label className="space-y-2 text-sm text-on-surface-variant">
                                <span>Or paste an image URL</span>
                                <input
                                  value={item.src}
                                  onChange={(event) => updateGalleryItem(sectionIndex, itemIndex, "src", event.target.value)}
                                  className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </label>
                            </div>

                            <div className="space-y-4">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Image {itemIndex + 1}</p>
                                <button type="button" onClick={() => removeGalleryItem(sectionIndex, itemIndex)} className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-surface-container-low">
                                  <span className="material-symbols-outlined text-base">delete</span>
                                  Delete Image
                                </button>
                              </div>
                              <div className="grid gap-4 md:grid-cols-2">
                                <label className="space-y-2 text-sm text-on-surface-variant md:col-span-2">
                                  <span>Alt Text</span>
                                  <input
                                    value={item.alt}
                                    onChange={(event) => updateGalleryItem(sectionIndex, itemIndex, "alt", event.target.value)}
                                    className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                  />
                                </label>
                                <label className="space-y-2 text-sm text-on-surface-variant md:col-span-2">
                                  <span>Caption</span>
                                  <input
                                    value={item.caption}
                                    onChange={(event) => updateGalleryItem(sectionIndex, itemIndex, "caption", event.target.value)}
                                    className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {activeTab === "calendar" ? (
            <section className="mt-6 space-y-6">
              <div className="rounded-[2rem] border border-outline-variant bg-white p-6 shadow-sm sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-on-surface-variant">
                    <span>Calendar Title</span>
                    <input
                      value={siteContent.calendar.title}
                      onChange={(event) => setSiteContent((current) => ({ ...current, calendar: { ...current.calendar, title: event.target.value } }))}
                      className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-on-surface-variant">
                    <span>Calendar Intro</span>
                    <textarea
                      rows="4"
                      value={siteContent.calendar.intro}
                      onChange={(event) => setSiteContent((current) => ({ ...current, calendar: { ...current.calendar, intro: event.target.value } }))}
                      className="w-full rounded-[1.5rem] border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-primary">Events</h2>
                  <button type="button" onClick={addCalendarEvent} className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-on-secondary transition hover:bg-secondary-fixed-dim hover:text-on-secondary">
                    <span className="material-symbols-outlined text-base">event</span>
                    Add Event
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {sortedCalendarEvents.map((event, eventIndex) => {
                    const currentIndex = siteContent.calendar.events.findIndex((item) => item.id === event.id);

                    return (
                      <article key={event.id} className="overflow-hidden rounded-[1.75rem] border border-outline-variant bg-surface-container-low shadow-sm">
                        <div className="grid gap-4 px-5 py-5 lg:grid-cols-[180px_1fr] lg:px-6">
                          <div className="rounded-[1.5rem] bg-gradient-to-br from-secondary-fixed/40 via-white to-primary/10 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Event {eventIndex + 1}</p>
                            <div className="mt-4 rounded-[1.25rem] bg-white p-4 shadow-sm">
                              <p className="text-3xl font-semibold text-primary">{event.date.slice(5)}</p>
                              <p className="mt-1 text-sm text-on-surface-variant">{event.date}</p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="rounded-full bg-secondary-fixed px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-on-secondary-fixed">
                                {event.category || "Event"}
                              </span>
                              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                                {event.time || "Any time"}
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <h3 className="text-lg font-semibold text-primary">{event.title || "Untitled Event"}</h3>
                              <button type="button" onClick={() => removeCalendarEvent(currentIndex)} className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-white">
                                <span className="material-symbols-outlined text-base">delete</span>
                                Delete Event
                              </button>
                            </div>

                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                              <label className="space-y-2 text-sm text-on-surface-variant">
                                <span>Title</span>
                                <input
                                  value={event.title}
                                  onChange={(changeEvent) => updateCalendarEvent(currentIndex, "title", changeEvent.target.value)}
                                  className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </label>
                              <label className="space-y-2 text-sm text-on-surface-variant">
                                <span>Category</span>
                                <input
                                  value={event.category}
                                  onChange={(changeEvent) => updateCalendarEvent(currentIndex, "category", changeEvent.target.value)}
                                  className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </label>
                              <label className="space-y-2 text-sm text-on-surface-variant">
                                <span>Date</span>
                                <input
                                  type="date"
                                  value={event.date}
                                  onChange={(changeEvent) => updateCalendarEvent(currentIndex, "date", changeEvent.target.value)}
                                  className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </label>
                              <label className="space-y-2 text-sm text-on-surface-variant">
                                <span>Time</span>
                                <input
                                  value={event.time}
                                  onChange={(changeEvent) => updateCalendarEvent(currentIndex, "time", changeEvent.target.value)}
                                  className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </label>
                              <label className="space-y-2 text-sm text-on-surface-variant">
                                <span>Location</span>
                                <input
                                  value={event.location}
                                  onChange={(changeEvent) => updateCalendarEvent(currentIndex, "location", changeEvent.target.value)}
                                  className="w-full rounded-3xl border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </label>
                              <label className="space-y-2 text-sm text-on-surface-variant md:col-span-2">
                                <span>Description</span>
                                <textarea
                                  rows="3"
                                  value={event.description}
                                  onChange={(changeEvent) => updateCalendarEvent(currentIndex, "description", changeEvent.target.value)}
                                  className="w-full rounded-[1.5rem] border border-outline-variant bg-white px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}