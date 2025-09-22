export type Link = { label: string; href: string; icon?: string };
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
	name: 'Jason Alexander 🍜',
	title: 'Data Enthusiast.',
	summary: 'Passionate about data, with a focus on ensuring quality, reliability, and meaningful insights. Always eager to keep learning and growing, both professionally and personally. Outside of work, I enjoy cinema, books, and watches.',
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jason-piew/' },
		{ label: 'GitHub', href: 'https://github.com/jasonpiew' },
		{ label: 'Watches', href: 'https://www.instagram.com/iwantoldwatches/' },
		{ label: 'Letterboxd', href: 'https://letterboxd.com/jasonpiew/' }
	],
	dataSkills: ['SQL','Python','dbt','Airflow','Metabase','Postgres','AirByte','mage.ai','DuckDB','Bigquery','Tableau','PowerBI','Looker'],
	devSkills: ['Docker','Git','Odoo','SAP','Svelte','TypeScript','Node.js','Strapi','Supabase','HTML','CSS','REST API'],
	projects: [	

		{
			title: 'SQL to NoSQL Query Converter',
			description: 'A online converter that converts SQL queries to NoSQL queries. Alongside tutorial and reference to both SQL and NoSQL query syntax.',
			url: 'https://lnkd.in/p/g7VB-ND3',
			image: 'https://images.unsplash.com/photo-1757583013110-f1f821d9b398?w=400&h=200&fit=crop&crop=faces',
			technologies: ['SQL','MongoDB','Svelte','JavaScript']
		},
		

		{
			title: 'AWS MyAnimeList ETL Data Project',
			description: 'A cloud-based ETL pipeline that extracts anime data from MyAnimeList API, transforms it using AWS Glue, and loads it into a s3 bucket, and query using AWS Athena.',
			url: 'https://www.linkedin.com/posts/jason-piew_aws-etl-data-activity-7373924877457805313-Pdrp',
			image: 'https://images.unsplash.com/photo-1757005550121-2da021b075f2?w=400&h=200&fit=crop&crop=faces',
			technologies: ['AWS','Lambda','Glue','S3','Athena','CloudFormation','API','Python']
		},

		{
			title: 'Mage ai End-to-End ETL Letterboxd Project',
			description: 'A comprehensive ETL project using Mage ai to extract, transform, and load data from Letterboxd, showcasing the ease of using Mage ai for data workflows. and visualized using PowerBI.	',
			url: 'https://www.linkedin.com/posts/jason-piew_etl-project-activity-7307578996664213505-K7tB',
			image: 'https://images.unsplash.com/photo-1743671140859-d5f8cde0c6ea?w=400&h=200&fit=crop&crop=faces',
			technologies: ['mage ai','Docker','Python','Postgresql','PowerBI']
		},
		{
			title: 'Mixue Branches Rating in Indonesia ETL Project',
			description: 'An ETL project that collects and analyzes customer ratings of Mixue branches across Indonesia, providing insights into customer satisfaction and branch performance.',
			url: 'https://www.linkedin.com/posts/jason-piew_dataanalytics-tableau-data-activity-7013431806418984961-I7O7',
			image: 'https://images.unsplash.com/photo-1554755229-ca4470e07232?w=400&h=200&fit=crop&crop=faces',
			technologies: ['Python','BigQuery', 'Google Cloud Function', 'Tableau']
		},
		{
			title: 'Spotify Wrapped Analysis',
			description: 'An analysis of Spotify Wrapped data using Python, Metabase, and PostgreSQL.',
			url: 'https://www.linkedin.com/posts/jason-piew_spotifywrapped2022-sql-metabase-activity-7004292140050644992-qhVZ',
			image: 'https://images.unsplash.com/photo-1749821540948-9ba758eb3c64?w=400&h=200&fit=crop&crop=faces',
			technologies: ['Python', 'Metabase', 'PostgreSQL']
		},
		{
			title: 'SQL Test DataLemur study case',
			description: 'A study case project focused on SQL data analysis using DataLemur platform.',
			url: 'https://www.linkedin.com/posts/jason-piew_sql-data-analytics-activity-6998128954935033856-1WCb',
			image: 'https://images.unsplash.com/photo-1713640774386-86b5f18972f3?w=400&h=200&fit=crop&crop=faces',
			technologies: ['SQL']
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
	roles: ['Data Enthusiast','Die Hard Ramen Lover','Book Lover (sometimes)','Developer','Watch Enthusiast','Writer (sometimes)','Cinema Enjoyer']	
};


