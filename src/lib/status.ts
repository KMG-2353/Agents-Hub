import type { Agent } from "@/agents";

type Status = Agent["status"];

export const statusLabel: Record<Status, string> = {
	live: "Live",
	beta: "Beta",
	wip: "In progress",
};

export const statusMeaning: Record<Status, string> = {
	live: "Available and ready to use.",
	beta: "Usable, still being refined. Expect changes.",
	wip: "Being built. It may be incomplete or unavailable.",
};
