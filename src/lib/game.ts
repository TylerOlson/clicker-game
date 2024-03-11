export class Building {
	readonly name: string = ''
	cps: number = 0
	baseCost: number = 0
	amount: number = 0

	constructor(name: string, cps: number, baseCost: number) {
		this.name = name
		this.cps = cps
		this.baseCost = baseCost
	}

	getCost(): number {
		return Math.round(this.baseCost * 1.15 ** this.amount * 100) / 100
	}
}

export class Game {
	private _money: number = 0
	private _clickAmount: number = 1
	private _buildings: Map<string, Building> = new Map<string, Building>()
	private _tickSpeed: number = 1000

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
			this._money += building.cps * building.amount
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
		this._buildings.set('<p> tag', new Building('<p> tag', 1, 1))
		this._buildings.set('<h5> tag', new Building('<h5> tag', 2, 20))
		this._buildings.set('<br> tag', new Building('<br> tag', 5, 50))

		console.log('Created a Game object')
	}
}
