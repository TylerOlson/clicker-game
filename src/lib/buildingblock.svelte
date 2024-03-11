<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let name = 'No name'
	export let amount = 0
	export let cps = 0
	export let cost = 0
	export let disabled = true

	const dispatch = createEventDispatcher()

	function buy() {
		dispatch('buy', name)
	}
</script>

<div class="my-5 flex">
	<div class="flex-1">
		<p class="text-xl">{name} - {amount}</p>
		<p>Each generates {cps} $ per second</p>
	</div>
	<div class="flex-1">
		<button
			{disabled}
			class="bg-blue-400 disabled:bg-gray-700 rounded-lg px-5 py-2 shadow-md"
			on:click={buy}>Buy {cost}</button
		>
	</div>
</div>
