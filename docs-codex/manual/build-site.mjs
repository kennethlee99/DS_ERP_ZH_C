import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const manualRoot = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.join(manualRoot, 'site');
const sourceRoots = ['en', 'zh-CN'];

const navConfig = [
  {
    label: 'English',
    home: 'en/00-start-here.md',
    groups: [
      ['Start', ['en/00-start-here.md', 'en/00-glossary.md', 'en/00-open-decisions.md']],
      ['Workflows', 'en/01-workflows'],
      ['Roles', 'en/03-by-role'],
      ['Production', 'en/10-production'],
      ['Engineering', 'en/20-engineering'],
      ['Quality', 'en/30-quality'],
      ['SMARTQC', 'en/35-smartqc'],
      ['Administration', 'en/40-administration'],
    ],
  },
  {
    label: '中文',
    home: 'zh-CN/00-start-here.md',
    groups: [
      ['开始', ['zh-CN/00-start-here.md', 'zh-CN/00-glossary.md', 'zh-CN/00-open-decisions.md']],
      ['工作流程', 'zh-CN/01-workflows'],
      ['角色', 'zh-CN/03-by-role'],
      ['生产', 'zh-CN/10-production'],
      ['工程', 'zh-CN/20-engineering'],
      ['质量', 'zh-CN/30-quality'],
      ['SMARTQC', 'zh-CN/35-smartqc'],
      ['管理', 'zh-CN/40-administration'],
    ],
  },
];

const css = `
:root {
  --bg: #f7f8f8;
  --surface: #ffffff;
  --surface-2: #eef2f1;
  --text: #1b2422;
  --muted: #68736f;
  --line: #d9dfdd;
  --accent: #0f766e;
  --accent-2: #b45309;
  --code-bg: #202725;
  --code-text: #edf7f4;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: var(--text);
  background: var(--bg);
  font: 16px/1.6 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

a {
  color: var(--accent);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.layout {
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid var(--line);
  background: var(--surface);
  padding: 24px 18px;
}

.brand {
  display: block;
  color: var(--text);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 18px;
  text-decoration: none;
}

.language-jump {
  display: grid;
  gap: 8px;
  margin-bottom: 22px;
}

.language-jump a {
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
  padding: 8px 10px;
  text-decoration: none;
}

.language-jump a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.nav-section {
  border-top: 1px solid var(--line);
  margin: 0;
  padding: 14px 0;
}

.nav-section > summary,
.nav-group > summary {
  cursor: pointer;
  list-style: none;
}

.nav-section > summary::-webkit-details-marker,
.nav-group > summary::-webkit-details-marker {
  display: none;
}

.nav-section > summary {
  color: var(--muted);
  display: flex;
  font-size: 13px;
  font-weight: 700;
  justify-content: space-between;
  letter-spacing: 0;
  padding: 2px 0;
  text-transform: none;
}

.nav-section > summary::after,
.nav-group > summary::after {
  content: "+";
  color: var(--muted);
  font-weight: 700;
}

.nav-section[open] > summary::after,
.nav-group[open] > summary::after {
  content: "-";
}

.nav-group {
  margin: 9px 0 0;
}

.nav-group > summary {
  color: var(--muted);
  display: flex;
  font-size: 12px;
  font-weight: 700;
  justify-content: space-between;
  padding: 6px 0;
  text-transform: uppercase;
}

.nav-links {
  padding: 2px 0 8px;
}

.nav-section a {
  border-radius: 6px;
  color: var(--text);
  display: block;
  font-size: 14px;
  line-height: 1.35;
  padding: 6px 8px;
  text-decoration: none;
}

.nav-section a:hover {
  background: var(--surface-2);
}

.nav-section a.active {
  background: #dceeea;
  color: #084c45;
  font-weight: 700;
}

.content {
  min-width: 0;
  padding: 34px clamp(20px, 5vw, 72px) 80px;
}

.article {
  max-width: 1040px;
}

h1,
h2,
h3,
h4 {
  line-height: 1.25;
  margin: 1.4em 0 0.45em;
}

h1 {
  font-size: clamp(30px, 4vw, 44px);
  margin-top: 0;
}

h2 {
  border-top: 1px solid var(--line);
  font-size: 26px;
  padding-top: 26px;
}

h3 {
  font-size: 20px;
}

p,
ul,
ol,
blockquote,
pre,
table {
  margin: 0 0 18px;
}

ul,
ol {
  padding-left: 26px;
}

li + li {
  margin-top: 4px;
}

blockquote {
  border-left: 4px solid var(--accent);
  color: var(--muted);
  padding: 4px 0 4px 14px;
}

table {
  border-collapse: collapse;
  display: block;
  overflow-x: auto;
  width: 100%;
}

th,
td {
  border: 1px solid var(--line);
  min-width: 140px;
  padding: 9px 11px;
  text-align: left;
  vertical-align: top;
}

th {
  background: var(--surface-2);
  font-weight: 700;
}

code {
  background: #e8eeec;
  border-radius: 5px;
  font-family: Consolas, "Liberation Mono", monospace;
  font-size: 0.92em;
  padding: 0.14em 0.32em;
}

pre {
  background: var(--code-bg);
  border-radius: 8px;
  color: var(--code-text);
  overflow-x: auto;
  padding: 16px;
}

pre code {
  background: transparent;
  color: inherit;
  padding: 0;
}

img {
  border: 1px solid var(--line);
  border-radius: 8px;
  display: block;
  height: auto;
  max-width: 100%;
}

hr {
  border: 0;
  border-top: 1px solid var(--line);
  margin: 28px 0;
}

@media (max-width: 860px) {
  .layout {
    display: block;
  }

  .sidebar {
    height: auto;
    max-height: 44vh;
    position: relative;
  }

  .content {
    padding: 24px 18px 56px;
  }
}
`;

function toWebPath(value) {
  return value.split(path.sep).join('/');
}

function normalizeWebPath(value) {
  return value.replace(/\\/g, '/');
}

function htmlRelFromMarkdown(markdownRel) {
  return markdownRel.replace(/\.md$/i, '.html');
}

function isExternalUrl(url) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function splitUrlSuffix(url) {
  const hashAt = url.indexOf('#');
  if (hashAt === -1) {
    return [url, ''];
  }

  return [url.slice(0, hashAt), url.slice(hashAt)];
}

function transformMarkdownLink(url, sourceRel) {
  if (!url || url.startsWith('#') || isExternalUrl(url)) {
    return url;
  }

  const [cleanUrl, suffix] = splitUrlSuffix(url);
  if (!cleanUrl.toLowerCase().endsWith('.md')) {
    return url;
  }

  const sourceDir = path.posix.dirname(normalizeWebPath(sourceRel));
  const targetMarkdown = path.posix.normalize(path.posix.join(sourceDir, cleanUrl));
  const targetHtml = htmlRelFromMarkdown(targetMarkdown);
  const sourceHtmlDir = path.posix.dirname(htmlRelFromMarkdown(normalizeWebPath(sourceRel)));
  let relative = path.posix.relative(sourceHtmlDir, targetHtml);

  if (!relative) {
    relative = path.posix.basename(targetHtml);
  }

  return `${relative}${suffix}`;
}

function stripMarkdown(value) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_#]/g, '')
    .trim();
}

function renderInline(value, sourceRel) {
  const codeTokens = [];
  let text = String(value).replace(/`([^`]+)`/g, (_, code) => {
    const token = `\u0000CODE${codeTokens.length}\u0000`;
    codeTokens.push(`<code>${escapeHtml(code)}</code>`);
    return token;
  });

  text = escapeHtml(text);

  text = text.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g, (_, alt, url, title) => {
    const titlePart = title ? ` title="${escapeAttribute(title)}"` : '';
    return `<img src="${escapeAttribute(url)}" alt="${escapeAttribute(alt)}"${titlePart}>`;
  });

  text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => {
    const href = transformMarkdownLink(url, sourceRel);
    return `<a href="${escapeAttribute(href)}">${label}</a>`;
  });

  text = text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');

  codeTokens.forEach((html, index) => {
    text = text.replace(`\u0000CODE${index}\u0000`, html);
  });

  return text;
}

function looksLikeTableSeparator(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line) {
  let trimmed = line.trim();
  if (trimmed.startsWith('|')) {
    trimmed = trimmed.slice(1);
  }
  if (trimmed.endsWith('|')) {
    trimmed = trimmed.slice(0, -1);
  }
  return trimmed.split('|').map((cell) => cell.trim());
}

function isBlockStart(lines, index) {
  const line = lines[index] ?? '';
  const next = lines[index + 1] ?? '';
  return /^\s*$/.test(line)
    || /^```/.test(line)
    || /^#{1,6}\s+/.test(line)
    || /^>\s?/.test(line)
    || /^\s*[-*+]\s+/.test(line)
    || /^\s*\d+\.\s+/.test(line)
    || /^---+\s*$/.test(line)
    || (line.includes('|') && looksLikeTableSeparator(next));
}

function renderMarkdown(markdown, sourceRel) {
  const lines = markdown.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').split('\n');
  const output = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index];

    if (/^\s*$/.test(line)) {
      index += 1;
      continue;
    }

    if (/^```/.test(line)) {
      const language = line.replace(/^```/, '').trim();
      const code = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index])) {
        code.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      const className = language ? ` class="language-${escapeAttribute(language)}"` : '';
      output.push(`<pre><code${className}>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      output.push(`<h${level}>${renderInline(heading[2].trim(), sourceRel)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^---+\s*$/.test(line)) {
      output.push('<hr>');
      index += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ''));
        index += 1;
      }
      output.push(`<blockquote>${renderMarkdown(quote.join('\n'), sourceRel)}</blockquote>`);
      continue;
    }

    if (line.includes('|') && looksLikeTableSeparator(lines[index + 1] ?? '')) {
      const headers = splitTableRow(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].includes('|') && !/^\s*$/.test(lines[index])) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      const headHtml = headers.map((cell) => `<th>${renderInline(cell, sourceRel)}</th>`).join('');
      const bodyHtml = rows
        .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell, sourceRel)}</td>`).join('')}</tr>`)
        .join('\n');
      output.push(`<table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`);
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*[-*+]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*+]\s+/, ''));
        index += 1;
      }
      output.push(`<ul>${items.map((item) => `<li>${renderInline(item, sourceRel)}</li>`).join('')}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ''));
        index += 1;
      }
      output.push(`<ol>${items.map((item) => `<li>${renderInline(item, sourceRel)}</li>`).join('')}</ol>`);
      continue;
    }

    const paragraph = [];
    while (index < lines.length && !isBlockStart(lines, index)) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    output.push(`<p>${renderInline(paragraph.join(' '), sourceRel)}</p>`);
  }

  return output.join('\n');
}

async function walkFiles(root, visitor) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      await walkFiles(absolute, visitor);
    } else {
      await visitor(absolute);
    }
  }
}

async function collectMarkdownFiles() {
  const files = ['index.md'];
  for (const sourceRoot of sourceRoots) {
    await walkFiles(path.join(manualRoot, sourceRoot), async (absolute) => {
      if (absolute.toLowerCase().endsWith('.md')) {
        files.push(toWebPath(path.relative(manualRoot, absolute)));
      }
    });
  }
  return files.sort((a, b) => a.localeCompare(b, 'en'));
}

async function collectAssetFiles() {
  const files = [];
  const copyRoots = ['assets', ...sourceRoots];

  for (const copyRoot of copyRoots) {
    const absoluteRoot = path.join(manualRoot, copyRoot);
    await walkFiles(absoluteRoot, async (absolute) => {
      if (!absolute.toLowerCase().endsWith('.md')) {
        files.push(toWebPath(path.relative(manualRoot, absolute)));
      }
    });
  }

  return files;
}

function titleFromMarkdown(markdown, fallback) {
  const match = markdown.replace(/^\uFEFF/, '').match(/^#\s+(.+)$/m);
  if (!match) {
    return fallback;
  }
  return stripMarkdown(match[1]);
}

function filesForGroup(allFiles, selector) {
  if (Array.isArray(selector)) {
    return selector.filter((file) => allFiles.includes(file));
  }

  return allFiles.filter((file) => file.startsWith(`${selector}/`));
}

function hrefFromCurrent(currentHtmlRel, targetMarkdownRel) {
  const targetHtml = htmlRelFromMarkdown(targetMarkdownRel);
  return path.posix.relative(path.posix.dirname(currentHtmlRel), targetHtml) || path.posix.basename(targetHtml);
}

function navGroupContainsCurrent(files, currentHtmlRel) {
  return files.some((markdownRel) => htmlRelFromMarkdown(markdownRel) === currentHtmlRel);
}

function renderNav(allFiles, titleByRel, currentHtmlRel) {
  return navConfig.map((language) => {
    const languageFiles = language.groups.flatMap(([, selector]) => filesForGroup(allFiles, selector));
    const languageOpen = currentHtmlRel === 'index.html' || navGroupContainsCurrent(languageFiles, currentHtmlRel);
    const homeHref = hrefFromCurrent(currentHtmlRel, language.home);
    const groups = language.groups.map(([label, selector]) => {
      const links = filesForGroup(allFiles, selector);
      if (!links.length) {
        return '';
      }

      const groupOpen = navGroupContainsCurrent(links, currentHtmlRel);
      const items = links.map((markdownRel) => {
        const htmlRel = htmlRelFromMarkdown(markdownRel);
        const href = hrefFromCurrent(currentHtmlRel, markdownRel);
        const active = htmlRel === currentHtmlRel ? ' class="active"' : '';
        return `<a${active} href="${escapeAttribute(href)}">${escapeHtml(titleByRel.get(markdownRel) ?? markdownRel)}</a>`;
      }).join('\n');

      return `<details class="nav-group"${groupOpen ? ' open' : ''}>
        <summary>${escapeHtml(label)}</summary>
        <div class="nav-links">
${items}
        </div>
      </details>`;
    }).join('\n');

    return `<details class="nav-section"${languageOpen ? ' open' : ''}>
      <summary>${escapeHtml(language.label)}</summary>
      <a href="${escapeAttribute(homeHref)}">${escapeHtml(language.label === '中文' ? '中文手册' : 'English Manual')}</a>
${groups}
    </details>`;
  }).join('\n');
}

function renderPage({ markdownRel, markdown, title, nav }) {
  const htmlRel = htmlRelFromMarkdown(markdownRel);
  const depth = htmlRel.split('/').length - 1;
  const cssHref = `${'../'.repeat(depth)}assets/site.css`;
  const lang = markdownRel.startsWith('zh-CN/') ? 'zh-CN' : 'en';
  const body = renderMarkdown(markdown, markdownRel);

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} - DS_ERP User Manual</title>
  <link rel="stylesheet" href="${cssHref}">
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <a class="brand" href="${'../'.repeat(depth)}index.html">DS_ERP User Manual</a>
      <div class="language-jump">
        <a href="${escapeAttribute(hrefFromCurrent(htmlRel, 'en/00-start-here.md'))}">English Manual</a>
        <a href="${escapeAttribute(hrefFromCurrent(htmlRel, 'zh-CN/00-start-here.md'))}">中文手册</a>
      </div>
      <nav aria-label="Manual pages">
${nav}
      </nav>
    </aside>
    <main class="content">
      <article class="article">
${body}
      </article>
    </main>
  </div>
</body>
</html>
`;
}

async function copyFilePreservingRelativePath(rel) {
  const source = path.join(manualRoot, rel);
  const target = path.join(siteRoot, rel);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(source, target);
}

async function main() {
  const resolvedManualRoot = path.resolve(manualRoot);
  const resolvedSiteRoot = path.resolve(siteRoot);
  if (!resolvedSiteRoot.startsWith(`${resolvedManualRoot}${path.sep}`)) {
    throw new Error(`Refusing to write outside manual root: ${resolvedSiteRoot}`);
  }

  const markdownFiles = await collectMarkdownFiles();
  const markdownByRel = new Map();
  const titleByRel = new Map();

  for (const markdownRel of markdownFiles) {
    const markdown = await fs.readFile(path.join(manualRoot, markdownRel), 'utf8');
    markdownByRel.set(markdownRel, markdown);
    titleByRel.set(markdownRel, titleFromMarkdown(markdown, markdownRel));
  }

  await fs.mkdir(siteRoot, { recursive: true });
  await fs.mkdir(path.join(siteRoot, 'assets'), { recursive: true });
  await fs.writeFile(path.join(siteRoot, 'assets', 'site.css'), css.trimStart(), 'utf8');

  for (const markdownRel of markdownFiles) {
    const htmlRel = htmlRelFromMarkdown(markdownRel);
    const target = path.join(siteRoot, htmlRel);
    const title = titleByRel.get(markdownRel) ?? markdownRel;
    const nav = renderNav(markdownFiles, titleByRel, htmlRel);
    const html = renderPage({
      markdownRel,
      markdown: markdownByRel.get(markdownRel),
      title,
      nav,
    });

    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, html, 'utf8');
  }

  for (const assetRel of await collectAssetFiles()) {
    await copyFilePreservingRelativePath(assetRel);
  }

  console.log(`Generated ${markdownFiles.length} pages at ${siteRoot}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
