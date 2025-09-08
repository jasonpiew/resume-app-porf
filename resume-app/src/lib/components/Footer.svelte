<script lang="ts">
	export let name: string;
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<p>© {year} {name}</p>
</footer>

<style>
	.footer { margin-top: 64px; text-align: center; color: #7f8aa0; }
</style>


