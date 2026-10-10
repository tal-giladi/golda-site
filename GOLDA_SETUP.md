# Putting the site live on goldainteriors.com

About 20 minutes, plus up to a few hours for the domain change to spread.

## 1. Copy the repo to your GitHub account

1. Sign in to GitHub and open https://github.com/tal-giladi/golda-site
2. Click **Fork** → **Create fork**. Keep the name `golda-site`.

## 2. Turn on publishing

In your fork:

1. Open the **Actions** tab and click **I understand my workflows, go ahead and enable them**.
2. Go to **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Back in the **Actions** tab, click **Publish site** on the left → **Run workflow** → **Run workflow**.
4. Wait about 1 minute for the green check mark. The site is now at `https://YOUR-USERNAME.github.io/golda-site/`. Google ignores this preview copy, which is intended.

## 3. Point the domain at GitHub (in GoDaddy)

1. Sign in to GoDaddy → **My Products** → next to goldainteriors.com click **DNS** (or **Manage DNS**).
2. If GoDaddy says the domain is connected to your Websites + Marketing site, disconnect it first. Otherwise it won't let you change the records below.
3. Delete the existing **A** record whose name is `@`.
4. Add 4 **A** records, all with name `@`:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

5. Edit the **CNAME** record named `www` (or add one if it's missing) so it points to `YOUR-USERNAME.github.io`.
6. Leave every other record alone, especially **MX** and **TXT**, which handle email.

## 4. Connect the domain in GitHub

1. In your fork go to **Settings → Pages → Custom domain**, type `goldainteriors.com`, and click **Save**.
2. Wait for **DNS check successful**. This can take a few minutes to a few hours.
3. Tick **Enforce HTTPS** once it becomes available.
4. Go to **Actions → Publish site → Run workflow** once more so the site rebuilds with the real address.

Done. The site is live at https://goldainteriors.com

## 5. Recommended: protect the domain

GitHub profile picture → **Settings → Pages → Add a domain** → `goldainteriors.com`. GitHub shows one **TXT** record. Add it in GoDaddy DNS the same way as above, then click **Verify**. This stops anyone else's GitHub site from claiming the domain.

## 6. Cancel GoDaddy Websites + Marketing

Only after the new site is live. Cancel the website plan, **not the domain**. The domain renewal stays with GoDaddy.
