import { Accessibility, CodeXml, FileSpreadsheet, ListChecks, type LucideIcon } from "lucide-react";

export interface Agent {
	id: string;
	name: string;
	description: string;
	category: string;
	/** Where the agent is hosted. Leave out until it is deployed; the row then shows no Open action. */
	url?: string;
	status: "live" | "beta" | "wip";
	/** A Lucide icon for the agent's tile. Without one, the row shows the generated lattice glyph. */
	icon?: LucideIcon;
}

const agents: Agent[] = [
	{
		id: "data-gen-ai",
		icon: FileSpreadsheet,
		name: "Data Gen AI",
		description:
			"A practical AI assistant that turns existing insurance Excel templates into realistic, consistent test data.",
		category: "Test data",
		url: "https://data-gen-ai-1.onrender.com/",
		status: "live",
	},
	{
		id: "pom-agent",
		icon: CodeXml,
		name: "POM Agent",
		description:
			"Inspects a web page in a headless browser and exports a Python Playwright Page Object Model built only from selectors it observed and validated.",
		category: "Test automation",
		status: "beta",
	},
	{
		id: "testcase-gen",
		icon: ListChecks,
		name: "Testcase Gen",
		description:
			"Generates test cases from insurance requirement documents (happy path, negative, boundary, equivalence partition and end-to-end), each cited to its requirement ID and exported to Excel.",
		category: "Test design",
		status: "beta",
	},
	{
		id: "wcg-agent",
		icon: Accessibility,
		name: "Accessibility Agent",
		description:
			"Tests web pages against WCAG 2.2 Level AA and gives a verdict for each success criterion (pass, fail, not applicable or needs review), with evidence behind every finding.",
		category: "Accessibility",
		status: "wip",
	},
];

export default agents;
