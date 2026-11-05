# Xin Wang personal homepage design

## Goal

Turn `buhanyunfei.github.io` from the untouched AcadHomepage template into a bilingual, research-first personal homepage for Xin Wang (王鑫). The page must serve academic collaborators and domestic AI-company research internship reviewers equally, while remaining deployable through the existing Jekyll/GitHub Pages setup.

## Audience and positioning

The primary audiences are (1) research collaborators, advisors, and reviewers and (2) research/algorithm internship recruiters. The positioning is:

> PhD student at Westlake University working on AI for Science, scientific agents, multimodal reasoning, and reliable evaluation.

The public page will use only verifiable facts from the supplied resume and public OpenReview/Tencent profile. It will omit the resume phone number and will not claim a submission is accepted unless a public source clearly says so. The Shanghai AI Lab timeline is user-confirmed as November 2024 through February 2026.

## Information architecture

1. **Hero / About** — name, bilingual title, one-sentence positioning, contact buttons, and an “Open to research internships and collaborations” status.
2. **Research Focus** — four groups: scientific discovery and evidence verification; scientific agents and retrieval; molecular/medical multimodal reasoning; agentic systems, RL, and evaluation.
3. **Experience** — Westlake University PhD (2025–present), Shanghai AI Laboratory (November 2024–February 2026), Roche AI-based drug-design internship (2023–2024), and community/open-source contributions.
4. **Selected Work** — THE-Tree, PatentAgent, R-GroundBench, MedQ-Bench, and the clinical medical intelligent information system. Each item carries an accurate status label such as Findings EMNLP 2026, arXiv, or submission.
5. **Education & Recognition** — Westlake PhD, ECUST undergraduate degree, CRAIC national first prize, and verified community memberships.
6. **Internship Targets** — a concise public block describing target role families; detailed, dated links live in `docs/internship-targets.md` so the homepage does not become stale.
7. **Contact / Links** — GitHub, OpenReview, Google Scholar, current personal page, and email.

## Visual and interaction design

The implementation keeps the Jekyll layout but adopts the reference site’s rhythm: narrow reading column, numbered sections, compact timeline cards, tag pills, and project cards. The palette is ink black, warm white, cyan/teal, and orange. CSS provides subtle grid texture, responsive cards, keyboard-visible focus states, and mobile stacking. A small vanilla JavaScript module toggles `[data-lang="zh"]` and `[data-lang="en"]` content without a framework. The default language is English with an explicit 中文/EN toggle.

## Content model and source policy

The homepage content is maintained in `_pages/about.md`, site metadata in `_config.yml`, navigation in `_data/navigation.yml`, and bilingual behavior in `assets/js` plus the existing theme styles. The internship watchlist records official links and a status (`开放`, `滚动`, `已结束/关注下一届`, or `未确认`) for Seed, Tencent Hunyuan QY AI for Science, Xiaohongshu Ace, Alibaba, Baidu, Huawei, Meituan, and DeepSeek. DeepSeek is explicitly marked as a rolling official job board without a confirmed student internship program. Third-party reposts are used only as discovery aids, never as the primary application link.

## Validation

- Build the site with the repository’s Jekyll/GitHub Pages dependency set.
- Run a content scan for leftover `Lorem ipsum`, template papers, fake citation counts, and placeholder Scholar IDs.
- Inspect the page at desktop and mobile widths and verify language switching, navigation anchors, external links, and accessible focus states.
- Confirm that no phone number or unverified publication acceptance claim is published.
- Leave GitHub push/deployment for a final user approval after the local result is reviewable.

## Out of scope

This pass does not rewrite the Overleaf resume source, submit internship applications, or publish files to GitHub. It does not add a live job scraper; the watchlist is a manually maintained, source-linked snapshot.
