import { Equipment } from "@/assets/ts/base/equipment"
import { ApparelModification } from "@/assets/ts/apparel/apparelModifications"

type ApparelModificationSlot = {
  firstEnhancement: ApparelModification,
  secondEnhancement: ApparelModification,
}

type ApparelLocation = "HEAD" | "BODY" | "ARMS" | "LEGS"

export class Apparel extends Equipment {
  baseHealthPoint = 1
  baseDefense = 0.1
  baseResistance = 0.1
  rating: number

  location: ApparelLocation

  modifications: ApparelModificationSlot = {
    firstEnhancement: new ApparelModification(),
    secondEnhancement: new ApparelModification(),
  }

  constructor(rating: number) {
    super(rating)

    this.baseHealthPoint = rating * this.baseHealthPoint
    this.baseDefense = rating * this.baseDefense
    this.baseResistance = rating * this.baseResistance
    this.rating = rating
  }

  get healthPoint(): number {
    return this.baseHealthPoint * (1 + this.getModifierValue("healthPoint"))
  }
}