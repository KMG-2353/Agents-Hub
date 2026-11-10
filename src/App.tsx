import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import agents from "@/agents";
import { AgentRow } from "@/components/AgentRow";
import { Lattice, LatticeMark } from "@/components/Lattice";
import { StatusCell } from "@/components/StatusMark";
import { statusLabel, statusMeaning } from "@/lib/status";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(agents.map((a) => a.category)))];
const liveCount = agents.filter((a) => a.status === "live").length;
const statuses = ["live", "beta", "wip"] as const;

function plural(n: number, word: string) {
	return `${n} ${word}${n === 1 ? "" : "s"}`;
}

export default function App() {
	const { theme, toggle } = useTheme();
	const [activeCategory, setActiveCategory] = useState(ALL);

	const filtered =
		activeCategory === ALL ? agents : agents.filter((a) => a.category === activeCategory);
	const nextTheme = theme === "dark" ? "light" : "dark";

	return (
		<div className="min-h-screen bg-bg text-ink">
			<header className="field">
				<div className="mx-auto flex max-w-[80rem] sm:min-h-[min(62svh,36rem)] flex-col px-5 sm:px-10 lg:px-16">
					<div className="flex h-20 items-center justify-between">
						<a href="/" className="flex items-center gap-3 rounded-sm">
							<LatticeMark className="size-6" />
							<span className="wide text-[0.95rem] font-semibold tracking-[-0.01em]">
								Intelligent Automation
							</span>
						</a>
						<button
							type="button"
							onClick={toggle}
							aria-label={`Switch to ${nextTheme} theme`}
							title={`Switch to ${nextTheme} theme`}
							className="grid size-10 place-items-center rounded-[var(--radius)] border border-brand-ink/30 text-brand-ink hover:bg-brand-ink/12 active:bg-brand-ink/20"
						>
							{theme === "dark" ? (
								<Sun className="size-[1.125rem]" strokeWidth={2} aria-hidden="true" />
							) : (
								<Moon className="size-[1.125rem]" strokeWidth={2} aria-hidden="true" />
							)}
						</button>
					</div>

					<div className="grid flex-1 items-end gap-10 pb-10 pt-14 sm:pb-16 sm:pt-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-12">
						<div className="max-w-[40rem]">
							<h1 className="display text-[clamp(3.25rem,8.5vw,6rem)]">Agents Hub</h1>
							<p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-brand-muted sm:text-xl">
								Intelligent automation agents for insurance work. Each one opens as its own app.
							</p>
							<div className="mt-8 flex items-end justify-between gap-6">
								<p className="flex items-center gap-3 text-sm font-medium tabular-nums text-brand-ink">
									<span>{plural(agents.length, "agent")}</span>
									<span aria-hidden="true" className="h-3 w-px bg-brand-ink/40" />
									<span>{liveCount} live</span>
								</p>
								<Lattice className="w-24 shrink-0 md:hidden" />
							</div>
						</div>
						<Lattice className="ml-auto hidden w-full max-w-[26rem] md:-mb-4 md:block" />
					</div>
				</div>
			</header>

			<main className="mx-auto max-w-[80rem] px-5 sm:px-10 lg:px-16">
				<section aria-labelledby="agents-heading" className="pt-14 sm:pt-20">
					<div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5 border-b-2 border-line-strong pb-5">
						<h2
							id="agents-heading"
							className="wide text-3xl font-semibold tracking-[-0.025em] sm:text-4xl"
						>
							Agents
						</h2>

						{categories.length > 2 && (
							<div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
								{categories.map((cat) => {
									const active = activeCategory === cat;
									return (
										<button
											key={cat}
											type="button"
											aria-pressed={active}
											onClick={() => setActiveCategory(cat)}
											className={cn(
												"h-9 rounded-[var(--radius)] border px-3.5 text-sm font-medium",
												active
													? "border-line-strong bg-ink text-bg"
													: "border-line text-muted hover:border-line-strong hover:text-ink",
											)}
										>
											{cat}
										</button>
									);
								})}
							</div>
						)}
					</div>

					<div
						aria-hidden="true"
						className="hidden grid-cols-[2.875rem_minmax(14rem,1fr)_minmax(0,1.6fr)_8.5rem_6.5rem] gap-x-8 border-b border-line px-3 py-3 text-xs font-medium text-muted lg:grid"
					>
						<span />
						<span>Agent</span>
						<span>What it does</span>
						<span>Status</span>
						<span />
					</div>

					{filtered.length === 0 ? (
						<p className="border-b border-line py-16 text-center text-muted">
							No agents in this category yet.
						</p>
					) : (
						<ul className="schedule">
							{filtered.map((agent) => (
								<AgentRow key={agent.id} agent={agent} />
							))}
						</ul>
					)}
				</section>

				<section aria-labelledby="status-heading" className="py-20 sm:py-28">
					<div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
						<div>
							<h2
								id="status-heading"
								className="wide text-2xl font-semibold tracking-[-0.02em] sm:text-[1.75rem]"
							>
								Reading the status
							</h2>
							<p className="mt-4 max-w-[30rem] leading-relaxed text-muted">
								Every agent runs as its own app and opens in a new tab. The status tells you how ready
								it is.
							</p>
						</div>
						<dl className="grid border-t border-line sm:grid-cols-3">
							{statuses.map((s) => (
								<div
									key={s}
									className="border-b border-line py-6 sm:border-b-0 sm:py-7 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
								>
									<dt className="flex items-center gap-2.5 font-semibold">
										<StatusCell status={s} />
										{statusLabel[s]}
									</dt>
									<dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">
										{statusMeaning[s]}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</section>
			</main>

			<footer className="border-t border-line">
				<div className="mx-auto flex max-w-[80rem] flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:px-10 lg:px-16">
					<span className="flex items-center gap-2.5 text-ink">
						<LatticeMark className="size-4" />
						<span className="wide font-semibold">Agents Hub</span>
					</span>
					<span className="tabular-nums">© {new Date().getFullYear()} Intelligent Automation</span>
				</div>
			</footer>
		</div>
	);
}
