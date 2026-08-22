import pages from "../../data/pages.json";

export async function fetchPageData(slug) {
  const page = pages[slug];
  if (!page) {
    throw new Error(`No page data found for slug: ${slug}`);
  }
  return page;
}

export async function fetchSiteSummary() {
  return Object.values(pages).map(({ slug, title, description }) => ({ slug, title, description }));
}

export const contactApiUrl = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
  : "http://localhost:4000/api/contact";

export const siteContentApiUrl = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/site-content`
  : "http://localhost:4000/api/site-content";

const siteContentUpdateEventName = "mmi-site-content-updated";

export function notifySiteContentUpdated() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(siteContentUpdateEventName));

  try {
    window.localStorage.setItem("mmi-site-content-updated-at", String(Date.now()));
  } catch {
    // Ignore storage failures in restricted environments.
  }
}

export async function fetchSiteContent() {
  const response = await fetch(siteContentApiUrl, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to load site content.");
  }

  return response.json();
}

export async function saveSiteContent(content) {
  const response = await fetch(siteContentApiUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Unable to save site content.");
  }

  notifySiteContentUpdated();

  return data;
}
