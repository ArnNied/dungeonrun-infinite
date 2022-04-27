import { ApparelModification } from "@/assets/ts/apparel/apparelModifications"
import { Config, TInitialConfiguration } from "@/assets/ts/base/base"
import { Equipment } from "@/assets/ts/base/equipment"


export const apparelLocation = ["HEAD", "TORSO", "ARMS", "LEGS"] as const
export type TApparelLocation = typeof apparelLocation[number]

export type TApparelConfiguration = {
  rating?: number
  baseHealthPoint?: number
  baseDefence?: number
  baseArtsResistance?: number

  location?: TApparelLocation

  modifications?: TApparelModificationSlot
}

interface IApparel {
  baseHealthPoint: number
  baseDefence: number
  baseArtsResistance: number

  location: TApparelLocation

  modifications: TApparelModificationSlot

  get healthPoint(): number
  get defence(): number
  get artsResistance(): number

}

export type TApparelModificationSlot = {
  firstEnhancement: ApparelModification,
  secondEnhancement: ApparelModification,
}

export class Apparel extends Equipment implements IApparel {
  baseHealthPoint: number
  baseDefence: number
  baseArtsResistance: number

  location: TApparelLocation

  configuration: TInitialConfiguration = {
    baseHealthPoint: new Config(1, true),
    baseDefence: new Config(0.1, true),
    baseArtsResistance: new Config(0.1, true),
    location: new Config([...apparelLocation])
  }

  modifications: TApparelModificationSlot = {
    firstEnhancement: new ApparelModification(),
    secondEnhancement: new ApparelModification(),
  }

  get healthPoint(): number {
    return Math.round(this.baseHealthPoint * (1 + this.getModifierValue("healthPoint")))
  }

  get defence(): number {
    return Math.round(this.baseDefence * (1 + this.getModifierValue("defence")))
  }

  get artsResistance(): number {
    return Math.round(this.baseArtsResistance * (1 + this.getModifierValue("artsResistance")))
  }
}
