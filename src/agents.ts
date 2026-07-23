export interface Agent {
	id: string;
	name: string;
	description: string;
	category: string;
	url: string;
	status: "live" | "beta" | "wip";
}

const agents: Agent[] = [
	{
		id: "data-gen-ai",
		name: "Data Gen AI",
		description:
			"A practical AI assistant that turns existing insurance Excel templates into realistic, consistent test data.",
		category: "Link",
		url: "https://data-gen-ai-1.onrender.com/",
		status: "live",
	},
];

export default agents;
