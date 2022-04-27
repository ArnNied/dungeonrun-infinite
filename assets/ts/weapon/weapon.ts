import { Config, TInitialConfiguration } from "@/assets/ts/base/base"
import { Equipment } from "@/assets/ts/base/equipment"
import {
  WeaponModificationBody,
  WeaponModificationBarrel,
  WeaponModificationGrip,
  WeaponModificationSight,
  WeaponModificationStock,
} from "@/assets/ts/weapon/weaponModifications"

export const weaponDamageType = ["PHYSICAL", "ARTS"] as const
export type TWeaponDamageType = typeof weaponDamageType[number]

export type TWeaponModificationSlot = {
	body: WeaponModificationBody
	sight: WeaponModificationSight
	barrel: WeaponModificationBarrel
	grip: WeaponModificationGrip
	stock?: WeaponModificationStock
}

export type TWeaponConfiguration = {
	rating?: number
	damageType?: TWeaponDamageType
	baseDamage?: number
	baseSpeed?: number
	baseHitChance?: number
	baseCritChance?: number
	baseCritMultiplier?: number

	modifications?: TWeaponModificationSlot
}

export interface IWeapon {
	damageType: TWeaponDamageType
	baseDamage: number
	baseSpeed: number
	baseHitChance: number
	baseCritChance: number
	baseCritMultiplier: number

	modifications?: TWeaponModificationSlot

	get damage(): number
	get speed(): number
	get hitChance(): number
	get critChance(): number
	get critMultiplier(): number
}

export class Weapon extends Equipment implements IWeapon {
  damageType: TWeaponDamageType
  baseDamage: number
  baseSpeed: number
  baseHitChance: number
  baseCritChance: number
  baseCritMultiplier: number

  configuration: TInitialConfiguration = {
    baseDamage: new Config(0.8, true),
    baseSpeed: new Config(0.3),
    baseHitChance: new Config(0.85),
    baseCritChance: new Config(0.05),
    baseCritMultiplier: new Config(1.2),
    damageType: new Config([...weaponDamageType]),
  }

  modifications: TWeaponModificationSlot = {
    body: new WeaponModificationBody(),
    sight: new WeaponModificationSight(),
    barrel: new WeaponModificationBarrel(),
    grip: new WeaponModificationGrip(),
    stock: new WeaponModificationStock(),
  }

  get damage(): number {
    return Math.round(
      this.baseDamage * (1 + this.getModifierValue("damage"))
    )
  }

  get speed(): number {
    return Number.parseFloat(
      (this.baseSpeed * (1 - this.getModifierValue("speed"))).toFixed(3)
    )
  }

  get hitChance(): number {
    return Number.parseFloat(
      (
        this.baseHitChance *
				(1 + this.getModifierValue("hitChance"))
      ).toFixed(3)
    )
  }

  get critChance(): number {
    return Number.parseFloat(
      (
        this.baseCritChance *
				(1 + this.getModifierValue("critChance"))
      ).toFixed(3)
    )
  }

  get critMultiplier(): number {
    return Number.parseFloat(
      (
        this.baseCritMultiplier *
				(1 + this.getModifierValue("critMultiplier"))
      ).toFixed(3)
    )
  }
}
