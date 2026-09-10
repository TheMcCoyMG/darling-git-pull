import { createFileRoute } from "@tanstack/react-router";
import { site } from "../site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-09-10",
  mainEntity: {
    "@type": "Person",
    name: site.name,
    email: `mailto:${site.email}`,
    description:
      "Public profile of Rotimi Ogundele: the journey, the principles, and the work still ahead.",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rotimi Ogundele | A Better Future Starts With Us" },
      {
        name: "description",
        content:
          "The public profile of Rotimi Ogundele: the journey so far, the principles behind the work, and what happens next.",
      },
      { property: "og:title", content: "Rotimi Ogundele | A Better Future Starts With Us" },
      {
        property: "og:description",
        content:
          "A public record of service, conviction, and the work still ahead.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Rotimi Ogundele | A Better Future Starts With Us" },
      {
        name: "twitter:description",
        content: "A public record of service, conviction, and the work still ahead.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span>{site.name.toUpperCase()}</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="campaign-strip" aria-label="Community highlights">
          {Array.from({ length: site.stripItems }, (_, index) => (
            <div className="strip-card" key={index}>
              <img
                src={site.images.hero}
                alt={
                  index === 0
                    ? `${site.name} working with community members`
                    : ""
                }
                aria-hidden={index === 0 ? undefined : true}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </section>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" /> PUBLIC PROFILE
            </p>
            <h1>
              A better
              <br />
              future
              <br />
              <em>starts</em> with
              <br />
              us.
            </h1>
            <p className="intro">
              A public record of service, conviction, and the work still ahead.
            </p>
            <a className="hero-link" href="#about">
              Explore the journey <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-visual">
            <div className="logo-card">
              <img
                src={site.images.logo}
                alt={`${site.name} Solution logo`}
                width={400}
                height={267}
              />
            </div>
            <div className="hero-photo">
              <img
                src={site.images.hero}
                alt={`${site.name} speaking with community members`}
                loading="eager"
                decoding="async"
              />
            </div>
            <p className="caption">{site.tagline}</p>
          </div>
        </section>

        <section className="statement" id="about">
          <p className="eyebrow">
            <span aria-hidden="true" /> THE WORK
          </p>
          <h2>
            Leadership is not a title.
            <br />
            <em>It is a promise kept.</em>
          </h2>
        </section>

        <section className="journey" id="journey">
          <p className="eyebrow">
            <span aria-hidden="true" /> THE JOURNEY
          </p>
          <h2>
            How we got
            <br />
            <em>here.</em>
          </h2>
          <div className="timeline">
            {site.journey.map((entry) => (
              <article className="timeline-row" key={entry.title}>
                <p className="timeline-slot">{entry.slot}</p>
                <div className="timeline-body">
                  <h3>{entry.title}</h3>
                  <p>{entry.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principles" id="principles">
          <p className="eyebrow">
            <span aria-hidden="true" /> PRINCIPLES
          </p>
          <h2>
            What I won't
            <br />
            <em>compromise on.</em>
          </h2>
          <div className="principle-grid">
            {site.principles.map((principle) => (
              <article className="principle" key={principle.mark}>
                <p className="principle-mark" aria-hidden="true">
                  {principle.mark}
                </p>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="updates" id="updates">
          <p className="eyebrow">
            <span aria-hidden="true" /> UPDATES
          </p>
          <h2>
            What
            <br />
            <em>next.</em>
          </h2>
          <div className="update-list">
            {site.updates.map((update) => (
              <article className="update" key={update.title}>
                <time>{update.date}</time>
                <div>
                  <h3>{update.title}</h3>
                  <p>{update.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <span>{site.name.toUpperCase()}</span>
        <a href={`mailto:${site.email}`}>Start a conversation ↗</a>
      </footer>
    </>
  );
}
