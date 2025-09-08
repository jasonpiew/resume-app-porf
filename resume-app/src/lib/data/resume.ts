export type Link = { label: string; href: string };
export type ExperienceItem = {
	role: string;
	company?: string;
	time?: string;
	desc?: string;
};

export type Section = {
	title: string;
	items: ExperienceItem[];
};

export type Project = {
	title: string;
	description: string;
	url: string;
	image?: string;
	technologies?: string[];
};


export type ResumeData = {
	name: string;
	title: string;
	summary: string;
	links: Link[];
	devSkills?: string[];
	dataSkills?: string[];
	projects?: Project[];
	sections: Section[];
	language?: string[];
	roles?: string[];
};

export const resumeData: ResumeData = {
	name: 'Jason Alexander',
	title: 'Data Enthusiast.',
	summary: 'with a passion for data. In the pursuit to always be learning and growing.',
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'Watches', href: 'mailto:you@example.com' }
	],
	dataSkills: ['SQL','Python','dbt','Airflow','Metabase','Postgres','mage.ai','DuckDB'],
	devSkills: ['Svelte','TypeScript','Node.js','CSS','Strapi','Docker','Git','Odoo','SAP'],
	projects: [
		{
			title: 'Mage ai End-to-End ETL Letterboxd Project',
			description: 'A comprehensive ETL project using Mage ai to extract, transform, and load data from Letterboxd, showcasing the ease of using Mage ai for data workflows. and visualized using PowerBI.	',
			url: 'https://www.linkedin.com/posts/jason-piew_etl-project-activity-7307578996664213505-K7tB',
			image: 'https://images.unsplash.com/photo-1743671140859-d5f8cde0c6ea?w=400&h=200&fit=crop&crop=faces',
			technologies: ['mage ai','Docker','Python','Postgresql','PowerBI']
		},
		{
			title: 'Data Pipeline Automation (masih ongoing ye not ril example)',
			description: 'Automated ETL pipeline using Python and Airflow to process daily sales data from multiple sources, with automated quality checks and alerting.',
			url: 'https://github.com/yourusername/data-pipeline',
			image: 'https://images.unsplash.com/photo-1750400519608-d70c17c99b8f?w=400&h=200&fit=crop&crop=faces',
			technologies: ['Python', 'Airflow', 'PostgreSQL', 'Docker', 'dbt']
		},
		{
			title: 'Customer Segmentation Tool (masih ongoing ye not ril example)',
			description: 'Machine learning application that segments customers based on purchasing behavior using clustering algorithms and provides actionable insights.',
			url: 'https://github.com/yourusername/customer-segmentation',
			image: 'https://images.unsplash.com/photo-1749821540948-9ba758eb3c64?w=400&h=200&fit=crop&crop=faces',
			technologies: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter', 'Flask']
		},
		{
			title: 'Real-time Stock Tracker (masih ongoing ye not ril example)',
			description: 'A responsive web application that tracks stock prices in real-time with interactive charts, portfolio management, and price alerts.',
			url: 'https://github.com/yourusername/stock-tracker',
			image: 'https://images.unsplash.com/photo-1713640774386-86b5f18972f3?w=400&h=200&fit=crop&crop=faces',
			technologies: ['Svelte', 'TypeScript', 'WebSocket', 'Chart.js', 'Node.js']
		}
	],
	sections: [
		// {
		// 	title: 'Experience',
		// 	items: [
		// 		{ role: 'Frontend Developer', company: 'Your Company', time: '2022 — Present', desc: 'Building performant, accessible UIs with Svelte and TypeScript.' }
		// 	]
		// },
		{
			title: 'Education',
			items: [
				{ role: 'B.Sc. in Computer Science', company: 'Universitas Internasional Batam', time: '2016 — 2020' }
			]
		}
	],
	language: [
		'Apa Kabar','Hello', '你好', 'Hola', 'नमस्ते', 'Bonjour', 'مرحبا', 'Olá', 'Привет', 'こんにちは', 'Hallo',
		'Ciao', '안녕하세요', 'Merhaba', 'Salam', 'Hej', 'Cześć', 'Γεια σας', 'Ahoj', 'Hei', 'Tere'
	]
,
	roles: ['Data Enthusiast','Book Lover (sometimes)','Developer','Watch Enthusiast']	
};


