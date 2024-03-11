<script lang="ts">
	import '../app.pcss'

	let title = 'Hello'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<slot />
