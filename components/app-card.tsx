"use client";

import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { urlFor } from "@/lib/sanity/client";
import type { SanityApp } from "@/lib/sanity/queries";
import { cn } from "@/lib/utils";

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.37.21.8.24 1.2.06l12.55-7.25-2.88-2.88-10.87 10.07zM.5 1.48C.19 1.88 0 2.43 0 3.1v17.8c0 .67.19 1.22.51 1.62l.08.08 9.98-9.98v-.23L.58 1.4l-.08.08zM20.23 9.6l-2.64-1.53-3.18 3.18 3.18 3.18 2.66-1.54c.76-.44.76-1.85-.02-2.29zM4.38.18L16.93 7.43 14.05 10.31 3.18.24C3.58.06 4.01.1 4.38.18z" />
    </svg>
  );
}

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.809 0h6.381v1.906H8.81zm-1.272 2.097l4.51-2.607 3.18 5.508-4.51 2.607zM2.984 7.576l3.18-5.508 4.51 2.607-3.18 5.508zm-2.984 4.424h6.381v1.906H0zm0 3.812h24v1.906H0zm0 3.812h24v1.906H0zM19.41 0l3.18 5.508-4.51 2.607-3.18-5.508zm-2.297 7.576l4.51-2.607 3.18 5.508-4.51 2.607z" />
    </svg>
  );
}

type StoreButtonProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "ghost";
};

function StoreButton({ href, icon, label, variant = "default" }: StoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "default"
          ? "border border-border bg-background text-foreground hover:bg-muted"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      )}
    >
      {icon}
      {label}
    </a>
  );
}

export function AppCard({ app }: { app: SanityApp }) {
  const iconUrl = app.icon?.asset?._ref
    ? urlFor(app.icon).width(128).height(128).fit("crop").url()
    : null;

  const hasStoreLinks = app.playstoreUrl || app.appstoreUrl;

  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-card p-6",
        "transition-all duration-200 hover:shadow-md hover:border-muted-foreground/30"
      )}
    >
      {/* Icon + Tags */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted">
          {iconUrl ? (
            <Image
              src={iconUrl}
              alt={`${app.name} icon`}
              fill
              className="object-cover"
              sizes="64px"
            />
          ) : (
            <div className="h-full w-full bg-muted" />
          )}
        </div>

        {app.tags && app.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-end">
            {app.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Name & Description */}
      <h3 className="mb-1.5 text-base font-semibold tracking-tight text-foreground">
        {app.name}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {app.description}
      </p>

      {/* Store links */}
      {(hasStoreLinks || app.landingPageUrl) && (
        <div className="flex flex-wrap items-center gap-2">
          {app.playstoreUrl && (
            <StoreButton
              href={app.playstoreUrl}
              icon={<PlayStoreIcon className="h-3.5 w-3.5" />}
              label="Google Play"
            />
          )}
          {app.appstoreUrl && (
            <StoreButton
              href={app.appstoreUrl}
              icon={<AppStoreIcon className="h-3.5 w-3.5" />}
              label="App Store"
            />
          )}

          {/* Landing page — only rendered when the field is set */}
          {app.landingPageUrl && (
            <StoreButton
              href={app.landingPageUrl}
              icon={<Globe className="h-3.5 w-3.5" />}
              label="Website"
              variant={hasStoreLinks ? "ghost" : "default"}
            />
          )}
        </div>
      )}
    </article>
  );
}
