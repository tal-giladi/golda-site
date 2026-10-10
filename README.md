# Golda Interiors website

Static site built with [Hugo](https://gohugo.io). Every push to `main` is published automatically to GitHub Pages (see `.github/workflows/pages.yml`).

## Editing a page

Pages live in `content/`, one file per page:

| File | Page |
|---|---|
| `content/_index.md` | Home |
| `content/portfolio.md` | פורטפוליו |
| `content/about.md` | קצת עליי |
| `content/contact.md` | צור קשר |
| `content/modern.md`, `classic.md`, `haredi.md`, `russian.md` | Style galleries |
| `content/blog/*.md` | Blog posts |

On GitHub: open the file → pencil icon → edit → **Commit changes**. The site updates within a couple of minutes.

The block at the top between `---` lines is page info (title, Google description, address). The rest is the page text:

```
#### כותרת קטנה
פסקה רגילה. **מודגש**.

- רשימה
- עם נקודות
```

## Adding images

Upload to `static/images/` (GitHub → open the folder → **Add file → Upload files**). Then use it as `/images/name.jpg`:

```
![תיאור התמונה](/images/name.jpg)
```

Keep file names in English without spaces, e.g. `kitchen-2026-1.jpg`.

## Building blocks

```
{{< gallery >}}
/images/a.jpg | כיתוב (לא חובה)
/images/b.jpg
{{< /gallery >}}

{{< split image="/images/a.jpg" alt="תיאור" >}}
#### כותרת
טקסט ליד התמונה. side="left" מחליף צד.
{{< /split >}}

{{< button link="/צור-קשר/" >}}לתיאום פגישה{{< /button >}}

{{< cards >}}
/images/a.jpg | כיתוב | /קישור/
{{< /cards >}}

{{< contact title="צרו קשר" >}}טקסט{{< /contact >}}
```

## New page

Copy an existing file in `content/`, rename it, and change `title` and `url` at the top. To show it in the menu, add it under `[[menus.main]]` or `[[menus.footer]]` in `hugo.toml`.

## New blog post

Copy `content/blog/safe-room.md`, change `title`, `date` and `image`, and remove `url` (the address is then made from the file name). Remove `lang: en` / `dir: ltr` for a Hebrew post.

## Phone, email, social links

In `hugo.toml` under `[params]`.

## Preview on your computer (optional)

Install Hugo, then in this folder:

```
hugo server
```

and open http://localhost:1313
