import { Equipment } from "@/assets/ts/base/equipment"
import { ApparelModification } from "@/assets/ts/apparel/apparelModifications"

type ApparelModificationSlot = {
  firstEnhancement: ApparelModification,
  secondEnhancement: ApparelModification,
}

interface InterfaceApparel {
  baseHealthPoint: number
  baseDefence: number
  baseArtsResistance: number

  modifications: ApparelModificationSlot

  get healthPoint(): number
  get defence(): number
  get artsResistance(): number

}

const apparelLocation = ["HEAD", "TORSO", "ARMS", "LEGS"] as const
type TypeApparelLocation = typeof apparelLocation[number]

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

  constructor(rating: number) {
    super(rating)

    this.baseHealthPoint = rating * this.baseHealthPoint
    this.baseDefence = rating * this.baseDefence
    this.baseArtsResistance = rating * this.baseArtsResistance
    this.location = apparelLocation[Math.floor(Math.random() * apparelLocation.length)]
    this.rating = rating
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
