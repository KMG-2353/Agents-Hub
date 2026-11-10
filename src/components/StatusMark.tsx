import type { Agent } from "@/agents";
import { statusLabel } from "@/lib/status";
import { cn } from "@/lib/utils";

type Status = Agent["status"];

/** A single lattice cell carries the state: solid, half, or outlined. */
export function StatusCell({ status, className }: { status: Status; className?: string }) {
	return (
		<svg viewBox="0 0 10 10" className={cn("size-2.5 shrink-0", className)} aria-hidden="true" focusable="false">
			{status === "live" && <rect width="10" height="10" fill="var(--live)" />}
			{status === "beta" && (
				<>
					<rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="var(--ink)" />
					<rect width="10" height="5" y="5" fill="var(--ink)" />
				</>
			)}
			{status === "wip" && (
				<rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="var(--muted)" strokeDasharray="2 1.5" />
			)}
		</svg>
	);
}

export function StatusMark({ status, className }: { status: Status; className?: string }) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-2 text-sm font-semibold",
				status === "live" && "text-live",
				status === "beta" && "text-ink",
				status === "wip" && "text-muted",
				className,
			)}
		>
			<StatusCell status={status} />
			{statusLabel[status]}
		</span>
	);
}
