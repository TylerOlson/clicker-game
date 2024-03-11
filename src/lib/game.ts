export class Building {
	readonly name: string = ''
	private _growthRate: number = 1
	cps: number = 0
	baseCost: number = 0
	amount: number = 0

	constructor(name: string, growthRate: number, cps: number, baseCost: number) {
		this.name = name
		this._growthRate = growthRate
		this.cps = cps
		this.baseCost = baseCost
	}

	getCost(): number {
		return Math.round(this.baseCost * this._growthRate ** this.amount * 100) / 100
	}
}

export class Game {
	private _money: number = 0
	private _clickAmount: number = 10
	private _buildings: Map<string, Building> = new Map<string, Building>()
	private _tickSpeed: number = 100

	buyBuilding(name: string) {
		if (this._buildings.has(name)) {
			let b = this._buildings.get(name)!
			if (this._money >= b.getCost()) {
				this._money -= b.getCost()
				b.amount++
			}
		}
	}

	gameLoop(): void {
		for (let building of this._buildings.values()) {
			this._money += (building.cps * building.amount) / 10
		}
	}

	click() {
		this._money += this._clickAmount
	}

	getMoney(): number {
		return Math.round(this._money * 100) / 100
	}

	getBuildings(): Map<string, Building> {
		return this._buildings
	}

	getTickSpeed(): number {
		return this._tickSpeed
	}

	constructor() {
		// possibly move this all to JSON?
		this._buildings.set('<p> tag', new Building('<p> tag', 1.07, 0.1, 15))
		this._buildings.set('<h5> tag', new Building('<h5> tag', 1.09, 1, 100))
		this._buildings.set('<br> tag', new Building('<br> tag', 1.13, 8, 500))
		this._buildings.set('<ul> tag', new Building('<ul> tag', 1.17, 20, 900))
		this._buildings.set('<button> tag', new Building('<button> tag', 1.2, 70, 7500))

		console.log('Created a Game object')
	}
}
