<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Asil Kamepalli Personal Portfolio

## Purpose

This repository is the professional portfolio website of Asil Kamepalli.

The site must position Asil primarily as a Senior Data Engineer / Cloud Data Engineer. It should remain consistent with the final approved resume, LinkedIn profile, and the public-safe docs in `docs/`.

## Technical Stack

- Next.js 16 App Router with source under `src/app`
- React 19
- TypeScript
- Tailwind CSS 4 via `@tailwindcss/postcss`
- Framer Motion
- next-themes

Before editing Next.js routing, metadata, styling, or rendering behavior, read the relevant local guide in `node_modules/next/dist/docs/`.

## Professional Positioning

Name: Asil Kamepalli

Primary title: Senior Data Engineer

Related positioning:
- Cloud Data Engineer
- Data Engineering
- Cloud Data Platforms
- Batch and Streaming Pipelines
- Lakehouse Architecture
- ETL/ELT
- CDC
- Dimensional Modeling
- Data Quality
- Data Governance
- DataOps
- AI/ML Data Infrastructure

Core technologies:
- Python
- SQL
- PySpark
- Apache Spark
- Databricks
- Snowflake
- Apache Airflow
- dbt
- Apache Kafka
- AWS
- Azure
- Delta Lake
- Apache Iceberg

## Source of Truth

Use these files for public portfolio content:

- `docs/professional-profile.md`
- `docs/linkedin-profile.md`
- `docs/experience.md`
- `docs/projects.md`
- `docs/certifications.md`
- `src/data/profile.ts`

Professional claims, dates, employers, clients, metrics, certifications, and education must remain consistent with the approved final resume and public-safe docs.

Do not invent:
- employers
- dates
- certifications
- project metrics
- clients
- production technologies
- achievements

If information is missing, ask before inventing it or mark it as TODO in docs.

## Content Privacy

Do not commit private resume source documents, phone numbers, addresses, or private-only contact details solely to give agents context. Keep repository docs public-safe.

The site may display a professional email only when the owner has intentionally placed it in `src/data/profile.ts` or another tracked public content file.

## Website Goals

The website should include:

- Premium landing/home page
- Professional About section
- Technical Skills section
- Professional Experience timeline
- Projects / Engineering Highlights
- Certifications
- Education
- GitHub link
- LinkedIn link
- Resume download when a public-safe PDF is available
- Contact section
- Technical writing / LinkedIn posts if appropriate

## Design Direction

The site should feel like a premium Senior Data Engineer / Cloud Data Engineer portfolio.

Avoid:
- Generic student portfolio appearance
- Excessive animations
- Huge lists of technology logos
- Skill percentage bars
- "Aspiring Data Engineer"
- Generic motivational quotes
- Excessive gradients and visual clutter

Prefer:
- Clean modern typography
- Strong information hierarchy
- Architecture-inspired visual elements
- Professional dark/light visual system
- Responsive mobile design
- Fast performance
- Accessibility
- Recruiter-friendly navigation

## Implementation Guidance

- Keep content centralized in typed data files where practical.
- Preserve the current `src/` App Router structure unless there is a clear reason to change it.
- Use semantic HTML for portfolio sections and navigation.
- Keep animations subtle and respect performance.
- Run `npm run lint` before handing off code changes when feasible.
