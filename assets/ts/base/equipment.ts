import { Modification } from "../base/modifications"

export type ModificationSlot = {
    [slotName: string]: Modification
}

export type EquipmentConfiguration = {
  [slotName: string]: string | number
}

export class Equipment {
  rating: number
  modifications: ModificationSlot

  constructor(rating: number) {
    this.rating = rating
  }

  manualConfiguration(configuration: EquipmentConfiguration) {
    Object.entries(configuration).forEach(([key, value]) => {
      Object.defineProperty(this, key, {
        value: value,
        writable: true
      })
    })
  }

  initializeModifications() {
    Object.keys(this.modifications).forEach((property)=>{
      this.modifications[property as keyof ModificationSlot]?.initProps()
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

