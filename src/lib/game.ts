import { get, type Writable, writable } from 'svelte/store'

export class Building {
	mps: number = 0
	name: string = ''

	constructor(newName: string) {
		this.name = newName
	}

	setMPS(newMPS: number) {
		this.mps = newMPS
	}
}

export class Game {
	money: Writable<number> = writable(0)
	clickAmount: number = 1
	buildings: Building[] = []
	buildingAmount: Writable<Map<string, number>> = writable(new Map<string, number>())
	tickSpeed: number = 1000

	addBuilding(name: string) {
		const b = new Building(name)

		this.buildings.push(b)
		const bm: Map<string, number> = get(this.buildingAmount)
		if (bm.has(name)) {
			bm.set(name, bm.get(name)! + 1)
		} else {
			bm.set(name, 1)
		}
		this.buildingAmount.set(bm)
	}

	gameLoop(): void {
		if (Array.isArray(this.buildings)) {
			this.buildings.forEach((building: Building) => {
				this.money.update((m) => m + building.mps * get(this.buildingAmount).get(building.name)!)
			})
		}
	}

	click() {
		this.money.update((m) => m + this.clickAmount)
	}
}
