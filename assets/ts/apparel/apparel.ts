import { Equipment, EquipmentConfiguration } from "@/assets/ts/base/equipment"
import { ApparelModification } from "@/assets/ts/apparel/apparelModifications"
import { getRandomItem } from "@/assets/ts/utils"


export const apparelLocation = ["HEAD", "TORSO", "ARMS", "LEGS"]
export type TypeApparelLocation = typeof apparelLocation[number]

type ApparelModificationSlot = {
  firstEnhancement: ApparelModification,
  secondEnhancement: ApparelModification,
}

export type ApparelConfiguration = EquipmentConfiguration & {
  baseHealthPoint?: number
  baseDefence?: number
  baseArtsResistance?: number
  location?: TypeApparelLocation

  modifications?: ApparelModificationSlot
}

interface InterfaceApparel {
  baseHealthPoint: number
  baseDefence: number
  baseArtsResistance: number

  location: TypeApparelLocation

  modifications: ApparelModificationSlot

  get healthPoint(): number
  get defence(): number
  get artsResistance(): number

}


export class Apparel extends Equipment implements InterfaceApparel {
  baseHealthPoint = 1
  baseDefence = 0.1
  baseArtsResistance = 0.1
  rating: number

  location: TypeApparelLocation

  modifications: ApparelModificationSlot = {
    firstEnhancement: new ApparelModification(),
    secondEnhancement: new ApparelModification(),
  }

  constructor(rating: number, configuration?: ApparelConfiguration) {
    super(rating)

    this.baseHealthPoint = rating * this.baseHealthPoint
    this.baseDefence = rating * this.baseDefence
    this.baseArtsResistance = rating * this.baseArtsResistance
    this.location = getRandomItem(apparelLocation)
    this.rating = rating

    if (configuration) {
      this.manualConfiguration(configuration)
    }
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
