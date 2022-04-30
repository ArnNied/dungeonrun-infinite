import { Apparel } from "@/assets/ts/apparel/apparel"
import { Weapon } from "@/assets/ts/weapon/weapon"
import { createEquipment } from "@/assets/ts/factory"
import { Damage } from "@/assets/ts/base/base"

export type TEntityWeaponSlot = {
	primary: Weapon
	secondary: Weapon
}

export type TEntityApparelSlot = {
	head: Apparel
	torso: Apparel
	arms: Apparel
	legs: Apparel
}

export interface IEntity {
  name: string

  weapons: TEntityWeaponSlot
  apparels: TEntityApparelSlot

  get maxHealthPoint(): number
}

export class Entity implements IEntity {
  name: string
  healthPoint: number

  weapons: TEntityWeaponSlot
  apparels: TEntityApparelSlot

  constructor(name: string, rating: number) {
    this.name = name

    this.weapons = {
      primary: createEquipment("WEAPON", rating) as Weapon,
      secondary: createEquipment("WEAPON", rating) as Weapon,
    }
    this.apparels = {
      head: createEquipment("APPAREL", rating) as Apparel,
      torso: createEquipment("APPAREL", rating) as Apparel,
      arms: createEquipment("APPAREL", rating) as Apparel,
      legs: createEquipment("APPAREL", rating) as Apparel,
    }
  }

  get rating(): number {
    let sum = 0
    const weapons: Weapon[] = Object.values(this.weapons)
    const apparels: Apparel[]  = Object.values(this.apparels)

    weapons.forEach((value: Weapon) => {
      sum += value.rating
    })
    apparels.forEach((value: Apparel) => {
      sum += value.rating
    })

    return Math.round(sum / (weapons.length + apparels.length))
  }

  get maxHealthPoint(): number {
    let maxHealthPoint = 0
    Object.values(this.apparels).forEach(value => {
      maxHealthPoint += value.healthPoint
    })
    return maxHealthPoint
  }

  get defence(): number {
    let defence = 0
    Object.values(this.apparels).forEach(value => {
      defence += value.defence
    })
    return defence
  }

  get artsResistance(): number {
    let artsResistance = 0
    Object.values(this.apparels).forEach(value => {
      artsResistance += value.artsResistance
    })
    return artsResistance
  }

  combatInit() {
    this.healthPoint = this.maxHealthPoint
  }

  receiveAttack(damage: Damage) {
    if (damage.type === "ARTS") {
      this.healthPoint -= damage.value - this.artsResistance
    } else if (damage.type === "PHYSICAL") {
      this.healthPoint -= damage.value - this.defence
    }
  }
}

export let PLAYER: Entity

export function setPlayer(instantiated: Entity) {
  PLAYER = instantiated
}