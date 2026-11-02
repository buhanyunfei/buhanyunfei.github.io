# Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task with checkpoints.

**Goal:** Replace the placeholder AcadHomepage content with a bilingual, research-first homepage for Xin Wang and add a source-linked internship target watchlist.

**Architecture:** Keep the existing Jekyll/GitHub Pages theme and Scholar workflow. Put the public page content in `_pages/about.md`, metadata/navigation in `_config.yml` and `_data/navigation.yml`, a small language toggle in `assets/js/language-toggle.js`, and visual overrides in `assets/css/main.scss`. Keep time-sensitive internship details in `docs/internship-targets.md`, outside the public page build.

**Tech Stack:** Jekyll 3.9/GitHub Pages, Liquid, Markdown, SCSS, vanilla JavaScript, Ruby Bundler.

---

### Task 1: Establish the content baseline

**Files:**
- Modify: `_config.yml`
- Modify: `_data/navigation.yml`
- Modify: `run_server.sh`

- [ ] **Step 1: Replace site metadata and author placeholders**

Set the title to `Xin Wang · 王鑫`, the description to the verified AI for Science positioning, the author bio to `PhD Student · AI for Science · Scientific Agents`, the location to `Hangzhou, China`, the public email to `buhangyunfei@gmail.com`, the GitHub handle to `buhanyunfei`, the OpenReview profile URL through a supported custom field if needed, and the Google Scholar URL to the verified profile. Remove the `YOUR_GOOGLE_SCHOLAR_ID` placeholder and the Lorem ipsum description.

- [ ] **Step 2: Define navigation anchors**

Replace template labels with `About`, `Research`, `Experience`, `Selected Work`, `Internship Targets`, and `Contact`, pointing to stable section IDs in `about.md`.

- [ ] **Step 3: Fix the local server command**

Change the misspelled `jekyll liveserve` in `run_server.sh` to `jekyll serve`.

- [ ] **Step 4: Commit the baseline metadata change**

Run `git add _config.yml _data/navigation.yml run_server.sh && git commit -m "chore: configure homepage metadata"`.

### Task 2: Implement the bilingual homepage content

**Files:**
- Modify: `_pages/about.md`

- [ ] **Step 1: Replace all template content with verified profile copy**

Write the hero, research focus cards, timeline, selected work, education/recognition, internship target summary, and contact sections from the approved design. Use only the confirmed facts: Westlake PhD 2025–present; Shanghai AI Lab 2024–2025; Roche 2023–2024; ECUST 2020–2024; THE-Tree Findings EMNLP 2026 Poster; R-GroundBench and PatentAgent arXiv records; MedQ-Bench and clinical medical information system as research work.

- [ ] **Step 2: Add bilingual content attributes**

Wrap each user-visible English/Chinese pair in `data-lang="en"` and `data-lang="zh"` blocks. Keep links and status labels identical across languages so the toggle never changes destination or publication status.

- [ ] **Step 3: Add accessible links and safe contact behavior**

Use descriptive link text, `rel="noopener"` for external targets, keyboard-visible focus, and email-only contact. Do not publish the resume phone number or an unverified acceptance claim.

- [ ] **Step 4: Commit the content change**

Run `git add _pages/about.md && git commit -m "feat: add bilingual research homepage content"`.

### Task 3: Add language switching and visual treatment

**Files:**
- Create: `assets/js/language-toggle.js`
- Modify: `assets/js/main.min.js` only if the theme requires an import (prefer a new script include instead)
- Modify: `_includes/scripts.html`
- Modify: `assets/css/main.scss`
- Create: `_sass/_xinwang.scss`

- [ ] **Step 1: Add a minimal language controller**

Create a DOMContentLoaded handler that toggles `body.lang-en`/`body.lang-zh`, updates `aria-pressed` on the two language buttons, stores `xinwang-language` in `localStorage`, defaults to English, and keeps the control keyboard accessible.

- [ ] **Step 2: Load the controller after existing theme scripts**

Add a script tag in `_includes/scripts.html` with `{{ '/assets/js/language-toggle.js' | relative_url }}`.

- [ ] **Step 3: Add the visual layer**

Import `_xinwang.scss` from `assets/css/main.scss`; define the ink/warm-white/teal/orange palette, grid texture, section numbering, timeline cards, research tags, project cards, buttons, responsive breakpoints, and reduced-motion media query. Keep selectors scoped to `.xinwang-page` to avoid theme regressions.

- [ ] **Step 4: Commit the interaction and style change**

Run `git add assets/css/main.scss _sass/_xinwang.scss assets/js/language-toggle.js _includes/scripts.html && git commit -m "feat: add bilingual homepage interaction and styles"`.

### Task 4: Add the internship target watchlist

**Files:**
- Create: `docs/internship-targets.md`

- [ ] **Step 1: Record current official programs and statuses**

Create a table with company/program, current status as of 2026-11-02, target role families, eligibility/notes, official application link, and homepage keyword mapping. Include ByteDance Seed, Tencent Hunyuan QY AI for Science, Xiaohongshu Ace, Alibaba research/daily internships and AliStar, Baidu AIDU/daily internships, Huawei internship plan, Meituan Beidou/daily internships, and DeepSeek’s official rolling job board with “no confirmed internship program” status.

- [ ] **Step 2: Add a reusable JD keyword map**

Document the terms to keep visible in the homepage: pretraining/SFT/RLHF/post-training, multimodal alignment, RAG, planning/tool use/memory/evaluation, data pipelines, distributed training/inference, GPU/heterogeneous computing, and AI for Science.

- [ ] **Step 3: Commit the watchlist**

Run `git add docs/internship-targets.md && git commit -m "docs: add internship target watchlist"`.

### Task 5: Build and review the site

**Files:**
- Modify: any file required by build diagnostics only

- [ ] **Step 1: Install/use the locked bundle and build**

Run `bundle exec jekyll build --trace` from the repository root. Expect an exit code of 0 and a generated `_site/index.html`.

- [ ] **Step 2: Scan for stale template content**

Run `rg -n "Lorem ipsum|Kaiming He|260000|YOUR_GOOGLE_SCHOLAR_ID|CVPR 2016" _pages _config.yml _data assets _includes` and expect no matches.

- [ ] **Step 3: Validate public-safety content**

Run `rg -n "195 5269 3282|accepted|录用|Best Paper" _pages/about.md`; the phone must have no match and any acceptance wording must be tied to the verified EMNLP 2026 Findings source without claiming a Best Paper win.

- [ ] **Step 4: Preview responsive behavior**

Serve with `bundle exec jekyll serve --host 127.0.0.1 --port 4000` and inspect the homepage at desktop and mobile widths. Verify the language buttons, all navigation anchors, external links, and focus outlines.

- [ ] **Step 5: Run the final diff review**

Run `git diff --check`, `git status --short`, and `git log --oneline -5`. Leave the local commits ready for review; do not push to GitHub until the user approves the rendered result.
