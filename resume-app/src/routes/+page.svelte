<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Section from '$lib/components/Section.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { resumeData } from '$lib/data/resume';
</script>


<main class="container">
	<Hero
		name={resumeData.name}
		title={resumeData.title}
		summary={resumeData.summary}
		links={resumeData.links}
		languageGreetings={resumeData.language ?? []}
		roles={resumeData.roles ?? []}
	/>
	<div class="skills-grid">
		<Skills heading="Development Skills" skills={resumeData.devSkills ?? []} />
		<Skills heading="Data Skills" skills={resumeData.dataSkills ?? []} />
	</div>
	<Projects projects={resumeData.projects ?? []} />
	{#each resumeData.sections as section}
		<Section title={section.title} items={section.items} />
	{/each}
	<Footer name={resumeData.name} />
</main>

<style>
	.container {
		max-width: 860px;
		margin: 0 auto;
		padding: 56px 20px 80px;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
		margin-top: 24px;
	}

	@media (min-width: 760px) {
		.skills-grid { grid-template-columns: 1fr 1fr; }
	}
</style>

