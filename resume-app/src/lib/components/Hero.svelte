<script lang="ts">
	import { onMount } from 'svelte';

	export let name: string;
	export let title: string;
	export let summary: string;
	export let links: { label: string; href: string }[] = [];

	// Animated content
	export let languageGreetings: string[] = [];
	export let roles: string[] = [];

	let langIndex = 0;
	let roleIndex = 0;
	let langTimer: ReturnType<typeof setInterval> | undefined;
	let roleTimer: ReturnType<typeof setInterval> | undefined;

	onMount(() => {
		if (languageGreetings?.length > 1) {
			langTimer = setInterval(() => {
				langIndex = (langIndex + 1) % languageGreetings.length;
			}, 1600);
		}
		if (roles?.length > 1) {
			roleTimer = setInterval(() => {
				roleIndex = (roleIndex + 1) % roles.length;
			}, 1800);
		}
		return () => {
			if (langTimer) clearInterval(langTimer);
			if (roleTimer) clearInterval(roleTimer);
		};
	});
</script>

<header class="hero left">
	<div aria-hidden="true" class="bg-backdrop"></div>
	<div class="hero-content">
		{#if languageGreetings?.length}
			<p class="greeting">
				<span class="greet-green">{languageGreetings[langIndex]}</span>
				<span> <span class="wave">👋</span></span>
			</p>
		{/if}
		<h1 class="name">{name}</h1>
		<p class="title">{title}</p>
		{#if roles?.length}
			<div class="about-row">
				<p class="roles">I'm a <span class="role-highlight">{roles[roleIndex]}</span></p>
				<p class="summary inline">{summary}</p>
			</div>
			<a class="btn" href="/resume.pdf" download>Download resume</a>
		{:else}
			<p class="summary">{summary}</p>
		{/if}
		{#if links?.length}
			<nav class="links">
				{#each links as link}
					<a rel="me" href={link.href} target="_blank">{link.label}</a>
				{/each}
			</nav>
		{/if}
	</div>
</header>

<style>
	.hero { text-align: center; position: relative; overflow: visible; min-height: 40vh; }
	.hero.left { text-align: left; }
	.hero-content { position: relative; z-index: 1; }
	.greeting { margin: 0 0 8px; color: #cfe7d9; }
	.greet-green { color: #86d19b; font-weight: 700; font-size: 4rem; }
	.wave { display: inline-block; transform-origin: 70% 70%; animation: wave 2s infinite; }
	
	.about-row { display: flex; gap: 12px; align-items: baseline; flex-wrap: wrap; font-size: 22px; }
	.name { font-size: 48px; font-weight: 900; margin: 0; letter-spacing: 0.5px; }
	.title { font-size: 20px; color: #93a1b3; margin: 8px 0 0; }
	.summary { margin-top: 16px; color: #c6c9cf; }
	.summary.inline { margin-top: 0; }
	.roles { margin: 8px 0 0; color: #c6c9cf; }
	.role-highlight { color: #86d19b; text-decoration: underline; }

	.links { margin-top: 20px; display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
	.links a { padding: 8px 12px; border: 1px solid #243044; border-radius: 999px; background: #121722; }
	.links a:hover { background: #1a2233; }
	.about-row { display: flex; gap: 12px; align-items: baseline; flex-wrap: wrap; }

	/* Removed in-hero shapes to avoid edge halo */

	.btn { display: inline-block; margin-top: 14px; padding: 10px 14px; border-radius: 8px; border: 1px solid #1f3a2b; background: #0f1d16; color: #cfe7d9; font-weight: 600; }
	.btn:hover { background: #14261d; }

	/* Full-viewport decorative backdrop */
	.bg-backdrop {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background:
			radial-gradient(60% 60% at 80% 10%, rgba(134, 209, 155, 0.30), rgba(134, 209, 155, 0) 65%),
			radial-gradient(55% 55% at 10% 90%, rgba(139, 183, 255, 0.18), rgba(139, 183, 255, 0) 65%);
		filter: blur(3px);
		mask-image: radial-gradient(120% 120% at 50% 40%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 65%, transparent 85%);
	}

	@media (max-width: 560px) {
		.name { font-size: 36px; }
	}

	@keyframes wave {
		0% { transform: rotate(0deg); }
		10% { transform: rotate(14deg); }
		20% { transform: rotate(-8deg); }
		30% { transform: rotate(14deg); }
		40% { transform: rotate(-4deg); }
		50% { transform: rotate(10deg); }
		60% { transform: rotate(0deg); }
		100% { transform: rotate(0deg); }
	}
</style>


