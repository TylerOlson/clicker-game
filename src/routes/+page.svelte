<script lang="ts">
	import { Game } from '$lib/game'

	let game = new Game()
	let gameMoney = 0

	game.money.subscribe((value) => {
		gameMoney = value
	})
	function click() {
		game.click()
	}
</script>

<p>Balance: {gameMoney}</p>
<button on:click={click}>Click!</button>
