# TODO for Tal

1. **Stock photos licensing.** Everything in `static/images/stock/` came from GoDaddy's built-in Getty library. That license covers use on GoDaddy only. The classic page, the Russian page, the about page (2 images) and the modern page (2 images) use them. Replace them with Golda's own photos, or properly licensed ones, before going live.
2. **Contact form.** A static site has no server to receive the form. Sign up for a form service (Formspree, Web3Forms, etc.) and put its URL in `formAction` in `hugo.toml`. Until then the form is hidden. WhatsApp, phone and email buttons work.
3. **Dropped from the old site:** the newsletter signup (GoDaddy-only, no backend), the welcome popup, the cookie banner (no tracking scripts now, so there's nothing to consent to), and an empty HTML widget on the blog page that only ran `alert(1)`.
4. **Fixed while migrating:** the WhatsApp link on the contact page and the popup's phone link had an extra 0 (`9720544...`). Punctuation in Hebrew headings that had been typed backwards to work around GoDaddy's RTL (`?מתכננים לשפץ בקרוב`, `!אשמח לתאם`) is fixed. Phone numbers are isolated as LTR. The Russian page and the English blog post render left-to-right.
5. **The URLs are the same as on GoDaddy** (Hebrew slugs + `/blog/f/...`), so Google rankings carry over. GoDaddy served them without a trailing slash; GitHub Pages redirects to the trailing-slash version.
6. **Hosting moved from DigitalOcean to GitHub Pages** (free; repo must be public on a free account). Deploy runs from `.github/workflows/pages.yml`.
7. Copyright year in the footer updates on every build.
