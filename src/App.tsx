import { useState } from "react";
import agents from "@/agents";
import { AgentCard } from "@/components/AgentCard";

const categories = [
	"All",
	...Array.from(new Set(agents.map((a) => a.category))),
];

export default function App() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filtered =
		activeCategory === "All"
			? agents
			: agents.filter((a) => a.category === activeCategory);

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
			<header className="mb-10 text-center w-full max-w-4xl">
				<h1 className="text-xl font-semibold tracking-tight">
					Intelligent Automation Agents Hub
				</h1>
				<p className="text-sm text-muted-foreground mt-1">AI Agents Hub</p>
			</header>

			<hr className="border-border mb-6 w-full max-w-4xl" />

			{categories.length > 2 && (
				<div className="flex gap-2 flex-wrap justify-center mb-6 w-full max-w-4xl">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className={`text-xs px-3 py-1 rounded border transition-colors ${
								activeCategory === cat
									? "border-foreground text-foreground"
									: "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
							}`}
						>
							{cat}
						</button>
					))}
				</div>
			)}

			{filtered.length === 0 ? (
				<p className="text-sm text-muted-foreground text-center py-16">
					No agents found.
				</p>
			) : (
				<div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
					{filtered.map((agent) => (
						<div key={agent.id} className="w-full sm:w-72 md:w-80">
							<AgentCard agent={agent} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
