// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "autoCAD",
		name: "AutoCAD",
		description: "我就一画图的，偶尔算算系数，处理点数据",
		icon: "skill-icons/autocad-light",
		category: "frontend",
		level: "advanced",
		experience: { years: 7, months: 6 },
		projects: ["very"],
		color: "#F7DF1E",
	},
	{
		id: "aegisub",
		name: "Aegisub",
		description: "偶尔给自己喜欢的电影做点特效，有兴趣的时候搞点B'z的MV",
		icon: "logos/aws-codestar",
		category: "frontend",
		level: "beginner",
		experience: { years: 1, months: 2 },
		projects: [
			"Gintama The-Final、The-semi-Final SP1+SP2",
			"The Matrix 4",
			"映画 今日は俺だ！...",
		],
		color: "#3178C6",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#007ACC",
	},

	{
		id: "docker",
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 2 },
		color: "#2496ED",
	},
	{
		id: "mocha",
		name: "Mocha Pro",
		description:
			"Boris FX Mocha Pro,Powerful planar tracking software for VFX and post-production.",
		icon: "logos/aws-ecs",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["Assist in creating sub with Aegisub"],
		color: "#31A8FF",
	},

	{
		id: "photoshop",
		name: "Photoshop",
		description: "Professional image editing and design software.",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "intermediate",
		experience: { years: 5, months: 2 },
		projects: ["ui-design", "image-processing"],
		color: "#31A8FF",
	},

	// Other Skills
	{
		id: "moses",
		name: "Moses",
		description: "海上作业模拟与浮体设计软件",
		icon: "logos:aws-msk",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["Learning"],
		color: "#E10098",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
