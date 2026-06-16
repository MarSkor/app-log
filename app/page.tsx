import { AppCard } from "@/components/app-card";
import { getApps } from "@/lib/sanity/queries";
import { SanityLive } from "@/sanity/lib/live";

export default async function Home() {
  const apps = await getApps();

  return (
    <>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Apps I&apos;ve built
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A small collection of apps. More on the way — I build things that
            scratch my own itches.
          </p>
        </section>

        {/* App grid */}
        {apps.length > 0 ? (
          <section aria-label="Apps">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <AppCard key={app._id} app={app} />
              ))}
            </div>
          </section>
        ) : (
          <div className="rounded-xl border border-dashed border-border py-24 text-center text-muted-foreground">
            Apps coming soon.
          </div>
        )}
      </main>
      <SanityLive />
    </>
  );
}
