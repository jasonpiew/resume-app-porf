<script lang="ts">
	export let title: string;
	export let items: { role: string; company?: string; time?: string; desc?: string }[] = [];
</script>

<section class="section">
	<h2>{title}</h2>
	{#if items?.length}
		<ul class="timeline">
			{#each items as item}
				<li>
					<div class="row">
						<strong>{item.role}</strong>
						{#if item.company}<span class="muted">{item.company}</span>{/if}
						{#if item.time}<span class="time">{item.time}</span>{/if}
					</div>
					{#if item.desc}
						<p class="desc">{item.desc}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.section { margin-top: 40px; }
	.section h2 { margin: 0 0 12px; font-size: 18px; color: #b7c1cf; letter-spacing: 0.4px; text-transform: uppercase; }
	.timeline { list-style: none; padding: 0; margin: 0; display: grid; gap: 18px; }
	.row { display: grid; grid-template-columns: 1fr auto auto; gap: 10px; align-items: baseline; }
	.row .muted { color: #93a1b3; }
	.time { color: #7f8aa0; font-size: 14px; }
	.desc { margin: 6px 0 0; color: #c6c9cf; }

	@media (max-width: 560px) {
		.row { grid-template-columns: 1fr; gap: 4px; }
		.time { justify-self: start; }
	}
</style>


