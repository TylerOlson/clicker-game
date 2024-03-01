<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let name = 'No name'
	export let amount = 0
	export let mps = 0

	const dispatch = createEventDispatcher()

	function buy() {
		dispatch('buy', name)
	}
</script>

<div>
	<p>{name} - {amount}</p>
	<p>Generating {mps} x {amount} $ per second</p>
	<button on:click={buy}>Buy</button>
</div>
