# webmonitor.github.io

Organization website for [WebMonitor](https://github.com/webmonitor), served by GitHub Pages at <https://webmonitor.github.io>.

Static single page: no build step, no dependencies. Edit `index.html` and push to `main` — GitHub Pages builds the site from the default branch root (`.nojekyll` disables Jekyll processing).

## What it covers

- The organization: self-hostable web-page monitoring with email alerts.
- `WebMonitor` — visual dashboard, XPath region monitoring, Selenium-based collection.
- `WebMonitor-Agent` — conversational monitor creation, HTTP and Playwright collection.
- Entry points: live demo, source, issue trackers, `mocksite`, local Docker commands.

## Local preview

```sh
python3 -m http.server 8080
# http://localhost:8080
```

Design: flat warm-paper palette (`#f5f3ef` background, `#111111` text, `#ded8cf` hairlines), Noto Serif SC, two-column lists separated by hairline rules.
