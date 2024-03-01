<script lang="ts">
	import { Game } from '$lib/game'
	import BuildingBlock from '$lib/buildingblock.svelte'

	let game = new Game()

	function click() {
		game.click()
		game = game // trigger reactivity
	}

	function buy(event: CustomEvent<string>) {
		game.buyBuilding(event.detail)
		console.log('added', event.detail)
		game = game
	}

	setInterval(() => {
		game.gameLoop()
		game = game
		console.log('hello')
	}, game.tickSpeed)
</script>

<p>Balance: {game.money}</p>
<button on:click={click}>Click!</button>
{#each game.buildings as building}
	<BuildingBlock
		name={building.name}
		amount={game.buildingAmount.get(building.name)}
		mps={game.getBuilding(building.name).mps}
		on:buy={buy}
	/>
{/each}
