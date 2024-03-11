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

<div class="relative mb-10 flex items-center justify-between">
	<div>
		<p class="text-xl text-gray-500 dark:text-slate-100">{name} - {amount}</p>
		<p class="text-sm text-gray-500 dark:text-slate-100">Each generates ${cps} per second.</p>
	</div>
	<div>
		<button
			{disabled}
			class="ml-4 h-full w-20 rounded-md bg-purple-800 p-2 text-gray-100 drop-shadow-lg transition-all duration-300 ease-in-out hover:bg-violet-500 disabled:bg-gray-700 md:ml-16"
			on:click={buy}>{cost}</button
		>
	</div>
</div>
