import { ArrowUpRight } from "lucide-react";
import type { Agent } from "@/agents";
import { AgentGlyph } from "@/components/AgentGlyph";
import { StatusMark } from "@/components/StatusMark";
import { statusLabel } from "@/lib/status";

const rowLayout =
	"agent-row grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 gap-y-3 border-b border-line px-1 py-6 sm:gap-x-6 sm:px-3 lg:grid-cols-[2.875rem_minmax(14rem,1fr)_minmax(0,1.6fr)_8.5rem_6.5rem] lg:items-center lg:gap-x-8 lg:py-7";

export function AgentRow({ agent }: { agent: Agent }) {
	const body = (
		<>
			<AgentGlyph agent={agent} className="size-10 sm:size-[2.875rem]" />

			<div className="min-w-0">
				<h3 className="wide text-xl font-semibold leading-tight tracking-[-0.015em] sm:text-[1.375rem]">
					{agent.name}
				</h3>
				<p className="mt-1 text-sm text-muted">{agent.category}</p>
			</div>

			{agent.url ? (
				<span className="agent-open inline-flex h-10 items-center gap-1.5 justify-self-end rounded-[var(--radius)] border border-line-strong px-3.5 text-sm font-semibold lg:order-last">
					Open
					<ArrowUpRight className="size-4" strokeWidth={2.25} aria-hidden="true" />
				</span>
			) : (
				<span className="inline-flex h-10 items-center justify-self-end whitespace-nowrap px-1 text-sm text-muted lg:order-last">
					No link yet
				</span>
			)}

			<p className="col-span-3 max-w-[62ch] text-[0.975rem] leading-relaxed text-muted sm:col-start-2 sm:col-span-2 lg:col-span-1 lg:col-start-auto lg:text-base">
				{agent.description}
			</p>

			<StatusMark
				status={agent.status}
				className="col-span-3 sm:col-start-2 sm:col-span-2 lg:col-span-1 lg:col-start-auto"
			/>
		</>
	);

	return (
		<li>
			{agent.url ? (
				<a
					href={agent.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Open ${agent.name} (${statusLabel[agent.status]}, opens in a new tab)`}
					className={rowLayout}
				>
					{body}
				</a>
			) : (
				<div className={rowLayout}>{body}</div>
			)}
		</li>
	);
}
