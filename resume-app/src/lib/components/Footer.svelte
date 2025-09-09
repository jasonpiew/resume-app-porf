<script lang="ts">
	export let name: string;
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-content">
		<p>© {year} {name}</p>
	</div>
</footer>

<style>
	.footer { margin-top: 64px; text-align: center; color: #7f8aa0; }
	/* .footer-content { display: flex; justify-content: right; align-items: center; } */
</style>


