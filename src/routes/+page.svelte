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

<div class="flex center flex-col m-16">
	<h1 class="text-4xl text-gray-500">HTML clicker</h1>

	<p>Balance: {game.getMoney()}</p>
	<button class="bg-green-700 rounded-md px-5 py-2" on:click={click}>Click!</button>
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
