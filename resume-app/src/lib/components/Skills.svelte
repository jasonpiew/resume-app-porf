<script lang="ts">
	export let skills: string[] = [];
	export let heading: string = 'Skills';
</script>

<section class="skills">
	<h2>{heading}</h2>
	{#if skills?.length}
		<ul>
			{#each skills as skill}
				<li>{skill}</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.skills { margin-top: 40px; }
	.skills h2 { margin: 0 0 12px; font-size: 18px; color: #b7c1cf; letter-spacing: 0.4px; text-transform: uppercase; }
	.skills ul { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-wrap: wrap; gap: 8px; }
	.skills li { padding: 6px 10px; border: 1px solid #2a364d; border-radius: 8px; background: #111624; color: #d7dbe1; }
</style>


