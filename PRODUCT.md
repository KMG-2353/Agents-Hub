# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Clients and other external visitors to KMG who want to see, and try, the intelligent-automation agents KMG has built. They arrive from a shared link, often without prior context, and need to understand what each agent does before opening it.

## Product Purpose

Agents Hub ("Intelligent Automation Agents Hub") is a single public front door to KMG's AI agents. Each agent is its own hosted app; the hub names it, explains it in one line, shows whether it is live, and links out to it. Success: a visitor grasps what the collection is within seconds, finds the agent relevant to them, and opens it.

## Positioning

A curated shelf of working agents built for insurance automation work (the first, Data Gen AI, turns existing insurance Excel templates into realistic, consistent test data), not a marketplace or a generic AI directory.

## Operating Context

- Agents live at their own URLs and open in a new tab; the hub hosts none of them.
- Agent records are maintained by hand in `src/agents.ts` (id, name, description, category, url, status: live | beta | wip).
- Expected size: 5–15 agents within the next year. Every agent should stay visible without heavy navigation.
- Deployed on Vercel as a static Vite + React + Tailwind v4 build.

## Capabilities and Constraints

- Per-agent data is limited to name, description, category, status and link. No owners, inputs/outputs or tags are planned.
- Light and dark themes with a user toggle must be supported (`src/hooks/useTheme.ts`).
- KMG branding (logo and the six-shade palette) is applied through tokens in `src/index.css`; the visual system must still accept a brand retune without a component rebuild.

## Brand Commitments

KMG (Key Management Group) identity: the KMG mark in the header, the six KMG shades (#d47f2e, #ec9e39, #e9bc5a, #6aa063, #5b86e2, #456aba) and KMG blue as the working accent. Product name: "Agents Hub" / "Intelligent Automation Agents Hub".

## Evidence on Hand

One live agent (Data Gen AI). No testimonials, client logos, usage numbers or benchmarks exist; do not invent them.

## Product Principles

1. Every agent is one click from the first screen.
2. Say what an agent does in plain language before asking anyone to open it.
3. Status is honest: live, beta and work-in-progress are visibly different.
4. The shelf must look complete with 1 agent and still calm with 15.
