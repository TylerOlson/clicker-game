export class Building {
	name: string = ''
	mps: number = 0

	constructor(name: string = 'nil', mps: number = -1) {
		this.name = name
		this.mps = mps
	}
}

export class Game {
	money: number = 0
	clickAmount: number = 1
	buildings: Building[] = []
	buildingAmount: Map<string, number> = new Map<string, number>()
	tickSpeed: number = 1000

	buyBuilding(name: string) {
		if (this.buildingAmount.has(name)) {
			this.buildingAmount.set(name, this.buildingAmount.get(name)! + 1) // ! means ignore undefined
		}
	}

	addBuilding(name: string, mps: number) {
		if (this.buildingAmount.has(name)) {
			this.buyBuilding(name)
		} else {
			const b = new Building(name, mps)

			this.buildings.push(b)
			this.buildingAmount.set(name, 1)
		}
	}

	getBuilding(name: string) {
		const building = this.buildings.find((i) => i.name === name)

		if (building === undefined) {
			return new Building()
		}

		return building
	}

	gameLoop(): void {
		if (Array.isArray(this.buildings)) {
			this.buildings.forEach((building: Building) => {
				this.money += building.mps * this.buildingAmount.get(building.name)!
				console.log('hello inside')
			})
		}
	}

	click() {
		this.money += this.clickAmount
	}

	constructor() {
		this.addBuilding('Farm', 1)
	}
}
