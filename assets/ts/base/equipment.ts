import { BaseItem, TFixedConfiguration, TInitialConfiguration } from "@/assets/ts/base/base"
import { Modification, itemGrade } from "@/assets/ts/base/modification"

export type TModificationSlot = {
  [slotName: string]: Modification
}

export class Equipment extends BaseItem {
  rating: number
  modifications: TModificationSlot

  constructor(rating: number, configuration?: TInitialConfiguration) {
    super(configuration)

    this.rating = rating
  }

  get iGrade(): number {
    let sumIGrade = 0

    const modifications = Object.values(this.modifications)
    modifications.forEach(value => {
      const modIGrade = Object.getOwnPropertyDescriptor(value, "iGrade")?.value
      sumIGrade += modIGrade
    })

    const iGrade: number = Math.round(sumIGrade / (modifications.length * (itemGrade.length - 1)) * (itemGrade.length - 1))

    return iGrade
  }

  get grade(): string {
    return itemGrade[this.iGrade]
  }

  applyConfiguration(): void {
    Object.entries(this.configuration).forEach(([key, value]) => {
      Object.defineProperty(this, key, {
        value: value.init(this.rating),
        writable: true,
        enumerable: true
      })
    })
  }

  fixedConfiguration(configuration: TFixedConfiguration): void {
    Object.entries(configuration).forEach(([key, value]) => {
      Object.defineProperty(this, key, {
        value: value,
        writable: true,
        enumerable: true
      })
    })
  }

  initializeModifications(): void {
    Object.values(this.modifications).forEach(value => {
      value.applyConfiguration()
    })
  }

  // Get modifier value with the name `name` from all equipment modification
  getListModifierValue(name: string): Array<{name: string, value: number}> {

    const arr: Array<{name: string, value: number}> = []

    for(const key in this.modifications) {
      const mod = Object.getOwnPropertyDescriptor(this.modifications, key)?.value
      const modifierValue = Object.getOwnPropertyDescriptor(mod, `${name}Modifier`)?.value ? Object.getOwnPropertyDescriptor(mod, `${name}Modifier`)?.value : 0
      // continue
      arr.push({
        name: `modification_${key}`,
        value: modifierValue,
      })
    }
    return arr
  }

  // Sum all modifier value taken from `getListModifierValue()`
  getModifierValue(name: string): number {
    let totalModifiers = 0

    const modificationWithCorrectModifier = this.getListModifierValue(name)

    modificationWithCorrectModifier.forEach(modification => {
      totalModifiers += modification.value
    })

    return totalModifiers
  }
}

