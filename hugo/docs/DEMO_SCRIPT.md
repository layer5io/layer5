# 8-minute demo for the Weekly Websites Meeting

1. **(1 min) The pain.** Show a recent Gatsby CI run duration and the `LITE_BUILD_PROFILE` workaround.
2. **(2 min) The speed.** `make bench` live → 1,210 pages, 17 collections. Read the numbers off the screen; don't quote the plan's targets.
3. **(2 min) The site.** `make serve`; edit a shortcode and watch it reload. Toggle dark mode (no flash on refresh). Press `/` for search (after `make index`). Filter integrations.
4. **(1 min) The safety net.** `make verify-urls` against the live sitemap: "zero URLs lost, or here is the list".
5. **(1 min) The converter.** `make migrate-dry` on the real repo: show the report, especially *unknown components*.
6. **(1 min) The ask.** Open `/migration/`, point at the 10 first issues, ask people to claim them.
