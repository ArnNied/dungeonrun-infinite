import { Equipment, EquipmentConfiguration } from "@/assets/ts/base/equipment"
import {
  WeaponModificationBody,
  WeaponModificationSight,
  WeaponModificationBarrel,
  WeaponModificationGrip,
  WeaponModificationStock,
} from "@/assets/ts/weapon/weaponModifications"

import { rng } from "@/assets/ts/utils"

export type WeaponModificationSlot = {
	body: WeaponModificationBody
	sight: WeaponModificationSight
	barrel: WeaponModificationBarrel
	grip: WeaponModificationGrip
	stock?: WeaponModificationStock
}

type WeaponConfiguration = EquipmentConfiguration & {
  damageType: "PHYSICAL" | "ARTS"
  baseDamage: number
  baseSpeed: number
  baseHitChance: number
  baseCritChance: number
  baseCritMultiplier: number

  modifications?: WeaponModificationSlot
}

interface InterfaceApparel {
  damageType: "PHYSICAL" | "ARTS"
  baseDamage: number
  baseSpeed: number
  baseHitChance: number
  baseCritChance: number
  baseCritMultiplier: number

  modifications?: WeaponModificationSlot

  get damage(): number
  get speed(): number
  get hitChance(): number
  get critChance(): number
  get critMultiplier(): number
}
export class Weapon extends Equipment implements InterfaceApparel {
  damageType: "PHYSICAL" | "ARTS"
  baseDamage = 0.3
  baseSpeed = 0.3
  baseHitChance = 0.85
  baseCritChance = 0.05
  baseCritMultiplier = 1.2

  modifications: WeaponModificationSlot = {
    body: new WeaponModificationBody(),
    sight: new WeaponModificationSight(),
    barrel: new WeaponModificationBarrel(),
    grip: new WeaponModificationGrip(),
    stock: new WeaponModificationStock(),
  }

  constructor(rating: number, configuration?: WeaponConfiguration) {
    super(rating)

    this.baseDamage = rating * this.baseDamage
    this.damageType = rng(0.5) ? "PHYSICAL" : "ARTS"

    if (configuration) {
      this.manualConfiguration(configuration)
    }
  }

  get damage(): number {
    return Math.round(this.baseDamage * (1 + this.getModifierValue("damage")))
  }

  get speed(): number {
    return Number.parseFloat((this.baseSpeed * (1 - this.getModifierValue("speed"))).toFixed(3))
  }

  get hitChance(): number {
    return Number.parseFloat((this.baseHitChance * (1 + this.getModifierValue("hitChance"))).toFixed(3))
  }

  get critChance(): number {
    return Number.parseFloat((this.baseCritChance * (1 + this.getModifierValue("critChance"))).toFixed(3))
  }

  get critMultiplier(): number {
    return Number.parseFloat((this.baseCritMultiplier * (1 + this.getModifierValue("critMultiplier"))).toFixed(3))
  }
}
