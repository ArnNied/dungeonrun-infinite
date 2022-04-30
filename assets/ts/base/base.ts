import { getRandomArbitrary, getRandomItem } from "@/assets/ts/utils"
import { TWeaponDamageType } from "@/assets/ts/weapon/weapon"

export type TFixedConfiguration = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [attributeName: string]: any
}

export type TMinMax = {
	min: number
	max: number
}

export type TInitialConfiguration = {
	[attributeName: string]: Config
}

export class BaseItem {
  configuration: TInitialConfiguration

  constructor(configuration?: TInitialConfiguration) {
    if (configuration) {
      this.patchInitialConfiguration(configuration)
    }
  }

  fixedConfiguration(configuration: TFixedConfiguration): void {
    Object.entries(configuration).forEach(([key, value]) => {
      Object.defineProperty(this, key, {
        value: value,
        writable: true,
        enumerable: true,
      })
    })
  }

  patchInitialConfiguration(configuration: TInitialConfiguration): void {
    Object.entries(configuration).forEach(([key, value]) => {
      Object.defineProperty(this.configuration, key, {
        value: value,
        writable: true,
        enumerable: true,
      })
    })
  }
}

export class Config {
  value: number | string | string[] | TMinMax
  multiplyByRating: boolean

  constructor(value: number | string | string[] | TMinMax, multiplyByRating = false) {
    this.value = value
    this.multiplyByRating = multiplyByRating
  }

  init(rating?: number): number | string {
    let value: number | string | string[] | TMinMax

    // value = this.value
    if (Array.isArray(this.value)) {
      value = getRandomItem(this.value)
    } else if (rating && this.multiplyByRating) {
      if (typeof this.value === "object") {
        value = rating * getRandomArbitrary(this.value.min, this.value.max)
      } else if (typeof this.value === "number") {
        value = rating * this.value
      } else {
        value = this.value
      }
    } else {
      if (typeof this.value === "object") {
        value = getRandomArbitrary(this.value.min, this.value.max)
      } else {
        value = this.value
      }
    }

    return value
  }
}

export class Damage {
  type: TWeaponDamageType
  value: number
  critical: boolean

  constructor(type: TWeaponDamageType, value: number, critical: boolean) {
    this.type = type
    this.value = value
    this.critical = critical
  }
}