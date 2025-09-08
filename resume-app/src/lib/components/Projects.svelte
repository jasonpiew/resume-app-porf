<script lang="ts">
	import type { Project } from '$lib/data/resume';
	
	export let projects: Project[] = [];
</script>

<div class="projects-section">
	<h2 class="section-title">Projects</h2>
	<div class="projects-grid">
		{#each projects as project}
			<div class="project-card">
				{#if project.image}
					<div class="project-image">
						<img src={project.image} alt={project.title} />
					</div>
				{/if}
				<div class="project-content">
					<h3 class="project-title">
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							{project.title}
						</a>
					</h3>
					<p class="project-description">{project.description}</p>
					{#if project.technologies}
						<div class="project-tech">
							{#each project.technologies as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.projects-section {
		margin-top: 40px;
	}

	.section-title {
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px;
		color: #b7c1cf;
		letter-spacing: 0.4px;
		text-transform: uppercase;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 18px;
		margin-top: 12px;
	}

	@media (min-width: 760px) {
		.projects-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.project-card {
		background: #111624;
		border: 1px solid #2a364d;
		border-radius: 8px;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.project-card:hover {
		border-color: #86d19b;
		background: #121722;
	}

	.project-image {
		width: 100%;
		height: 160px;
		overflow: hidden;
		background: #0f1d16;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
		opacity: 0.8;
	}

	.project-card:hover .project-image img {
		transform: scale(1.02);
		opacity: 1;
	}

	.project-content {
		padding: 16px;
	}

	.project-title {
		margin: 0 0 8px 0;
		font-size: 16px;
		font-weight: 600;
	}

	.project-title a {
		color: #d7dbe1;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.project-title a:hover {
		color: #86d19b;
	}

	.project-description {
		margin: 0 0 12px 0;
		color: #c6c9cf;
		line-height: 1.5;
		font-size: 14px;
	}

	.project-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.tech-tag {
		background: #0f1d16;
		color: #86d19b;
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 12px;
		font-weight: 500;
		border: 1px solid #1f3a2b;
	}
</style>