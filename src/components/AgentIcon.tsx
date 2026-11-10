import type { Agent } from "@/agents";
import { AgentGlyph } from "@/components/AgentGlyph";
import { cn } from "@/lib/utils";

/**
 * The agent's mark: its icon in a hairline square cell, the same unit as the
 * hero lattice. A live agent lights the cell's corner in the brand colour.
 * Agents without an icon fall back to their generated lattice glyph.
 */
export function AgentIcon({ agent, className }: { agent: Agent; className?: string }) {
	const Icon = agent.icon;
	if (!Icon) return <AgentGlyph agent={agent} className={className} />;

	return (
		<span className={cn("agent-icon relative grid place-items-center border border-line", className)} aria-hidden="true">
			<Icon className="size-5 text-ink" strokeWidth={1.75} />
			{agent.status === "live" && <span className="absolute -right-px -top-px size-2 bg-live" />}
		</span>
	);
}
