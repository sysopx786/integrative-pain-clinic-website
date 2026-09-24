# Integrative Pain Clinic Website

Public source repository and production files for the Integrative Pain Clinic website in West Chester, Pennsylvania.

## Current status

| Item | Status |
|---|---|
| Repository visibility | **Public** |
| Website hosting | **Live on GitHub Pages** |
| Deployment source | **GitHub Actions** |
| Production folder | [`dist/`](./dist/) |
| Default branch | `main` |
| Automatic deployment | Runs whenever `main` changes |

## Main links

| Resource | Address | Status |
|---|---|---|
| Live website | [sysopx786.github.io/integrative-pain-clinic-website](https://sysopx786.github.io/integrative-pain-clinic-website/) | Live |
| Public GitHub repository | [github.com/sysopx786/integrative-pain-clinic-website](https://github.com/sysopx786/integrative-pain-clinic-website) | Public |
| Production website files | [`dist/`](./dist/) | Published by the deployment workflow |
| GitHub Actions | [Deployment history](https://github.com/sysopx786/integrative-pain-clinic-website/actions) | Shows current and previous deployments |
| GitHub Pages settings | [Repository Pages settings](https://github.com/sysopx786/integrative-pain-clinic-website/settings/pages) | Enabled with **GitHub Actions** as the source |

## Published website pages

| Page | Live address |
|---|---|
| Home | [Open page](https://sysopx786.github.io/integrative-pain-clinic-website/) |
| Patient Resources | [Open page](https://sysopx786.github.io/integrative-pain-clinic-website/patient-resources.html) |
| Privacy Policy | [Open page](https://sysopx786.github.io/integrative-pain-clinic-website/privacy.html) |
| Terms of Use | [Open page](https://sysopx786.github.io/integrative-pain-clinic-website/terms.html) |
| Cookie Policy | [Open page](https://sysopx786.github.io/integrative-pain-clinic-website/cookies.html) |
| Accessibility | [Open page](https://sysopx786.github.io/integrative-pain-clinic-website/accessibility.html) |
| Sitemap | [sitemap.xml](https://sysopx786.github.io/integrative-pain-clinic-website/sitemap.xml) |
| Robots file | [robots.txt](https://sysopx786.github.io/integrative-pain-clinic-website/robots.txt) |

## Deployment

The workflow at [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) publishes the contents of `dist/` to GitHub Pages whenever a change is pushed to `main`.

The production folder includes `.nojekyll`, relative internal paths for the repository subdirectory, and canonical, Open Graph, sitemap, and robots references using the public GitHub Pages address.

## Latest GitHub changes

- Changed the repository from private to public.
- Enabled GitHub Pages with GitHub Actions as the publishing source.
- Added and successfully ran the automatic Pages deployment workflow.
- Published the website from `dist/`.
- Confirmed the live homepage returns HTTP 200.
- Removed the obsolete preview reference.

Last verified: September 24, 2026.
