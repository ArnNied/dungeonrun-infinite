import { Equipment } from "@/assets/ts/base/equipment"
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

export class Weapon extends Equipment {
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

  constructor(rating: number) {
    super(rating)

    this.baseDamage = rating * this.baseDamage
    this.damageType = rng(0.5) ? "PHYSICAL" : "ARTS"
  }

  get damage(): number {
    return Math.round(this.baseDamage * (1 + this.getModifierValue("damage")))
  }

  get speed() {
    return Number.parseFloat((this.baseSpeed * (1 - this.getModifierValue("speed"))).toFixed(3))
  }

  get hitChance() {
    return Number.parseFloat((this.baseHitChance * (1 + this.getModifierValue("hitChance"))).toFixed(3))
  }

  get critChance() {
    return Number.parseFloat((this.baseCritChance * (1 + this.getModifierValue("critChance"))).toFixed(3))
  }

  get critMultiplier() {
    return Number.parseFloat((this.baseCritMultiplier * (1 + this.getModifierValue("critMultiplier"))).toFixed(3))
  }
}
