import type { Agent } from "@/agents";

const N = 4;

function hash(text: string) {
	let h = 2166136261;
	for (let i = 0; i < text.length; i++) {
		h ^= text.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

/**
 * Each agent's mark, generated from its id in the same lattice grammar as the
 * hero: a stepped run of filled cells per row, never longer than the row above.
 * Live agents light their leading cell in the brand colour.
 */
export function AgentGlyph({ agent, className }: { agent: Agent; className?: string }) {
	const h = hash(agent.id);
	// Three rows drawn from the hash, sorted into a descending staircase under a full top row.
	const lower = [0, 1, 2].map((i) => ((h >>> (i * 5)) % N) + 1).sort((a, b) => b - a);
	const runs = [N, ...lower];
	const lead = { r: N - 1, c: runs[N - 1] - 1 };

	return (
		<svg viewBox="0 0 46 46" className={className} aria-hidden="true" focusable="false">
			{runs.flatMap((run, r) =>
				Array.from({ length: N }, (_, c) => {
					const on = c < run;
					const isLead = agent.status === "live" && r === lead.r && c === lead.c;
					return (
						<rect
							key={`${r}-${c}`}
							x={c * 12 + 0.5}
							y={r * 12 + 0.5}
							width={9}
							height={9}
							fill={on ? (isLead ? "var(--live)" : "var(--ink)") : "none"}
							stroke={on ? "none" : "var(--line)"}
							strokeWidth={1}
						/>
					);
				}),
			)}
		</svg>
	);
}
