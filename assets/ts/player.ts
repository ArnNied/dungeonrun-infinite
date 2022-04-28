import { Apparel } from "@/assets/ts/apparel/apparel"
import { Weapon } from "@/assets/ts/weapon/weapon"
import { createEquipment } from "@/assets/ts/factory"

export type TPlayerWeaponSlot = {
	primary: Weapon
	secondary: Weapon
}

export type TPlayerApparelSlot = {
	head: Apparel
	torso: Apparel
	arms: Apparel
	legs: Apparel
}

export class Player {
  name: string

  weapons: TPlayerWeaponSlot = {
    primary: createEquipment("WEAPON", 10) as Weapon,
    secondary: createEquipment("WEAPON", 10) as Weapon,
  }

  apparels: TPlayerApparelSlot = {
    head: createEquipment("APPAREL", 10) as Apparel,
    torso: createEquipment("APPAREL", 10) as Apparel,
    arms: createEquipment("APPAREL", 10) as Apparel,
    legs: createEquipment("APPAREL", 10) as Apparel,
  }

  constructor(name: string) {
    this.name = name
  }
}

export let PLAYER: Player

export function setPlayer(instantiated: Player) {
  PLAYER = instantiated
}