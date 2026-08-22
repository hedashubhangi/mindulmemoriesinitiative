import { InstagramIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-secondary text-on-secondary py-section-padding">
      <div className="mx-auto max-w-[1200px] px-gutter">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-headline-md text-headline-md">Mindful Memories Initiative</p>
            <p className="mt-3 max-w-xl text-sm text-on-secondary/90">
              Connecting hearts, preserving legacies, and supporting families through memory-focused dementia care.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-on-secondary/90">
            <a href="mailto:mindfulmemoriesinitiative@gmail.com" className="hover:text-on-secondary">mindfulmemoriesinitiative@gmail.com</a>
            <a
              href="https://www.instagram.com/mindfulmemoriesinitiative/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-full border border-on-secondary/40 p-2 hover:text-on-secondary"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients" target="_blank" rel="noreferrer" className="hover:text-on-secondary">Donate</a>
          </div>
        </div>
        <div className="mt-10 border-t border-on-secondary/20 pt-6 text-sm text-on-secondary/90 flex flex-col gap-3 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Mindful Memories Initiative. All rights reserved.</p>
          <a href="https://hedashubhangi.com" target="_blank" rel="noreferrer" className="underline hover:text-on-secondary">
            Website Developed by Shubhangi Heda.
          </a>
        </div>
      </div>
    </footer>
  );
}
