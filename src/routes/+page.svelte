<script lang="ts">
	import { Game } from '$lib/game'
	import BuildingBlock from '$lib/buildingblock.svelte'
	import { building } from '$app/environment'

	let game = new Game()

	function click() {
		game.click()
		game = game // trigger reactivity
	}

	function buy(event: CustomEvent<string>) {
		game.buyBuilding(event.detail)
		game = game
	}

	setInterval(() => {
		game.gameLoop()
		game = game
	}, game.getTickSpeed())
</script>

<div class="flex flex-col justify-evenly p-16 md:flex-row md:px-0">
	<div class="">
		<h1 class="text-4xl text-gray-500 dark:text-slate-100">&lt;HTML/&gt; clicker.</h1>

		<p class="mt-2 text-gray-500 dark:text-slate-100">Balance: ${game.getMoney()}</p>
		<button
			class="relative left-1/2 my-16 size-28 -translate-x-1/2 rounded-[4em] bg-emerald-400 text-gray-100 drop-shadow-xl transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-red-600 active:bg-red-800 md:my-32"
			on:click={click}
		>
			Click!
		</button>
	</div>
	<div class="">
		{#each [...game.getBuildings().values()] as building}
			<BuildingBlock
				name={building.name}
				amount={building.amount}
				cps={building.cps}
				cost={building.getCost()}
				disabled={game.getMoney() < building.getCost()}
				on:buy={buy}
			/>
		{/each}
	</div>
</div>
