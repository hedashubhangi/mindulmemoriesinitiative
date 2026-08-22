"use client";

import { useEffect, useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import { fetchSiteContent } from "../lib/api";
import { cloneDefaultSiteContent } from "../lib/site-content";

function toMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function parseEventDate(event) {
  return new Date(`${event.date}T${event.time || "00:00"}`);
}

function compactTitle(title, maxLength = 28) {
  if (!title || title.length <= maxLength) {
    return title;
  }

  return `${title.slice(0, maxLength - 1)}…`;
}

function getMonthMatrix(viewDate, events) {
  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const monthEnd = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const firstDay = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  const eventMap = new Map();

  events.forEach((event) => {
    const list = eventMap.get(event.date) || [];
    list.push(event);
    eventMap.set(event.date, list);
  });

  const cells = [];
  for (let index = 0; index < totalCells; index += 1) {
    const dayNumber = index - firstDay + 1;
    const isCurrentMonthDay = dayNumber > 0 && dayNumber <= daysInMonth;
    const cellDate = isCurrentMonthDay ? new Date(viewDate.getFullYear(), viewDate.getMonth(), dayNumber) : null;
    const dateKey = cellDate ? cellDate.toISOString().slice(0, 10) : null;

    cells.push({
      dayNumber: isCurrentMonthDay ? dayNumber : null,
      dateKey,
      events: dateKey ? eventMap.get(dateKey) || [] : []
    });
  }

  return cells;
}

export default function CalendarPage() {
  const [siteContent, setSiteContent] = useState(cloneDefaultSiteContent());
  const [viewDate, setViewDate] = useState(() => new Date());

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

  const events = useMemo(() => {
    return [...siteContent.calendar.events].sort((left, right) => parseEventDate(left) - parseEventDate(right));
  }, [siteContent]);

  const monthLabel = viewDate.toLocaleString("en-US", { month: "long", year: "numeric" });
  const matrix = getMonthMatrix(viewDate, events);
  const visibleMonthKey = toMonthKey(viewDate);
  const monthEvents = events.filter((event) => event.date.startsWith(visibleMonthKey));

  return (
    <PageShell>
      <section className="bg-surface py-[5.5rem]">
        <div className="mx-auto max-w-[1200px] px-gutter grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-on-secondary-fixed">
              <span className="material-symbols-outlined text-base">calendar_month</span>
              Community Schedule
            </span>
            <h1 className="text-5xl font-semibold leading-tight text-primary">{siteContent.calendar.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
              {siteContent.calendar.intro}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-secondary/10 blur-3xl" />
            <img
              src="/chipotle4.png"
              alt="Community calendar preview"
              className="relative z-10 w-full rounded-[2rem] border border-outline-variant shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[5rem]">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-gutter lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-outline-variant bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setViewDate((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))}
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
                Previous
              </button>
              <h2 className="text-2xl font-semibold text-primary">{monthLabel}</h2>
              <button
                type="button"
                onClick={() => setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))}
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
              >
                Next
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="px-1 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-7 gap-2">
              {matrix.map((cell, index) => (
                <div key={`${cell.dateKey || "blank"}-${index}`} className="min-h-[150px] rounded-[1.5rem] border border-outline-variant bg-surface-container-low p-3 overflow-hidden">
                  {cell.dayNumber ? (
                    <>
                      <p className="text-sm font-semibold text-on-surface">{cell.dayNumber}</p>
                      <div className="mt-2 space-y-2">
                        {cell.events.slice(0, 2).map((event) => (
                          <div key={event.id} className="rounded-2xl bg-primary/10 px-2 py-1 text-left text-[10px] font-semibold leading-4 text-primary">
                            <span title={event.title} style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden" }}>
                              {compactTitle(event.title, 16)}
                            </span>
                          </div>
                        ))}
                        {cell.events.length > 2 ? (
                          <p className="text-[11px] font-semibold text-on-surface-variant">+{cell.events.length - 2} more</p>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-outline-variant bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-primary">Events this month</h2>
              <p className="mt-2 text-sm text-on-surface-variant">A quick look at what&apos;s happening in {monthLabel}.</p>
              <div className="mt-5 space-y-4">
                {monthEvents.length > 0 ? monthEvents.map((event) => (
                  <article key={event.id} className="rounded-[1.5rem] border border-outline-variant bg-surface-container-low p-4 shadow-sm">
                    <div className="grid gap-4 sm:grid-cols-[110px_1fr]">
                      <div className="rounded-[1.25rem] bg-white p-4 text-center shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{event.category}</p>
                        <p className="mt-3 text-2xl font-semibold text-primary">{new Date(event.date).toLocaleDateString("en-US", { day: "numeric" })}</p>
                        <p className="text-xs text-on-surface-variant">{new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</p>
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="break-words text-lg font-semibold text-primary">{event.title}</h3>
                            <p className="mt-1 text-sm font-semibold text-on-surface-variant">{event.time} · {event.location}</p>
                          </div>
                          <p className="rounded-2xl bg-white px-3 py-2 text-right text-sm font-semibold text-on-surface shadow-sm">
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </p>
                        </div>
                        <p
                          className="mt-3 text-sm leading-6 text-on-surface-variant"
                          style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden" }}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </article>
                )) : (
                  <p className="rounded-[1.5rem] bg-surface-container-low px-4 py-5 text-sm text-on-surface-variant">No events are scheduled for this month yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}