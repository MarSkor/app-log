import { Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

// ── Edit these to match your actual contact details ──────────────────────────
const CONTACT = {
  email: "",
  github: "https://github.com/MarSkor", // set to "" to hide
  x: "https://x.com/martinedev_", // set to "" to hide           // set to "" to hide
};
// ─────────────────────────────────────────────────────────────────────────────

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-muted-foreground transition-colors"
        >
          martinelog.dev
        </a>

        {/* Contact links + theme toggle */}
        <nav className="flex items-center gap-1" aria-label="Contact links">
          {CONTACT.github && (
            <IconLink href={CONTACT.github} label="GitHub">
              <GitHubIcon className="h-4 w-4" />
            </IconLink>
          )}
          {CONTACT.x && (
            <IconLink href={CONTACT.x} label="X">
              <XIcon className="h-4 w-4" />
            </IconLink>
          )}
          {CONTACT.email && (
            <IconLink href={`mailto:${CONTACT.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </IconLink>
          )}

          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full",
        "text-muted-foreground transition-colors hover:text-foreground hover:bg-muted",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
    >
      {children}
    </a>
  );
}
