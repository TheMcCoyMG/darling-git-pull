# Import your GitHub site into this project

## What I found

Your repository (`github.com/TheMcCoyMG/TheMcCoyMG`) holds a one-page profile site for **Rotimi Ogundele**, built with Next.js:

```text
header   -> brand mark, nav links, red "Get in touch" button
strip    -> green band of repeating photos
hero     -> huge headline "A better future starts with us." + logo card + photo
statement-> cream panel: "Leadership is not a title. It is a promise kept."
footer   -> name + email link
```

The look is an editorial campaign style: near-black background, cream panels, a red
accent, Space Grotesk display type over DM Sans body, hard-edged cards with no rounded
corners. I will carry all of that over unchanged.

There is **no login, database, form, payment, or AI feature** in the source, so there is
nothing to rebuild on the backend and no data to export. The site is purely visual, which
makes this a clean import.

Two things in the repo are not part of the site itself:
- `README.md` is the GitHub profile bio for "McCoy" (X: @McCoy_MG, WhatsApp
  +234 813 499 7187) — a different identity from the site. I will not put it on the page.
- The nav links Journey, Principles and Updates currently point at sections that do not
  exist. You chose to build them, so every header link will land somewhere real.

## What I will build

The site becomes the home page of this project, at `/`, on the stack this project uses.
One long scrolling page with in-page navigation, exactly as your source works today:

```text
/#top         hero
/#about       statement panel
/#journey     NEW  - timeline of the work so far
/#principles  NEW  - the beliefs behind it
/#updates     NEW  - recent news / what's next
/#contact     footer with the email link
```

- The three new sections match the existing design language: same palette, same
  oversized Space Grotesk headings with a red accent word, same alternating black and
  cream panels, same small tracked-out labels above each block.
- Their wording is **clearly-marked placeholder text** — real-looking structure, but you
  replace the words. I will not invent facts about your life, roles, or dates, and I will
  not publish anything that reads as a claim about you.
- Everything else is reproduced faithfully: header, photo strip, hero, statement, footer,
  the mobile layout, hover colours, and the smooth scroll between sections.

## Your photos

Both pictures stay where they are now (Vercel's storage), as you chose. Nothing to
upload, and the page keeps working as it does today.

One thing to know: those files are 580KB and 907KB, which is too big and the wrong shape
for the card that appears when the link is shared on WhatsApp or X. Rather than tag a
file that gets the preview dropped, I will publish the title and description now and
leave the share image for a follow-up you can approve — either a purpose-made 1200x630
share card, or a small storage setup so a resized copy can live at its own web address.

## Search-engine and sharing setup

- A real page title (under 60 characters) and a description (under 160 characters),
  carried over from your source and cleaned up.
- One main heading, proper section and navigation markup, descriptive alt text on photos,
  and lazy loading for the strip images so the page loads quickly.
- Structured data describing the site as a public profile page for the person, so search
  engines read it correctly.
- Social tags (og:title, og:description, og:url) so link previews show the right words.

## Technical details

- `src/routes/index.tsx` — replace the placeholder with the full page: header, strip,
  hero, statement, Journey, Principles, Updates, footer. Section content lives in a small
  data module so text edits stay in one place.
- `src/routes/__root.tsx` — load Space Grotesk and DM Sans through a link tag in the head
  (the stylesheet cannot fetch fonts from the internet directly), plus sitewide defaults.
  The existing 404 and error screens stay.
- `src/styles.css` — add the palette as proper design tokens in oklch (ink `#080808`,
  paper `#f5f3ef`, red `#e4212b`, green `#006f47`, gold `#dcae35`) registered with the
  theme so the colours are reusable, then port the layout rules and the 800px breakpoint.
- `next/image` becomes plain responsive `<img>` markup with object-fit, since the picture
  component belongs to Next.js.
- No new packages, no database, no accounts to connect.
- A `roadmap.md` and a migration ledger at `.lovable/migrate-external-project/ledger.json`
  track each part of the source so nothing is quietly dropped.

## Before I call it done

- The build reports no errors.
- I load the page in a browser at desktop width and phone width, take screenshots, and
  confirm the layout matches your source.
- I click every header link and confirm each one lands on a real section.
- The browser console shows no errors.

## Worth confirming

Two details came from your repo rather than from you, so tell me if either is wrong:
the contact email `hello@rotimogundele.com` in the footer, and the exact wording of the
headline and statement. I will use them as-is until you say otherwise.
