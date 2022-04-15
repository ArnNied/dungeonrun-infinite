import { Modification, ModificationConfig } from "@/assets/ts/base/modifications"

export class ApparelModification extends Modification {
  healthPointModifier: number
  defenceModifier: number
  artsResistanceModifier: number

  config: ModificationConfig = {
    healthPointModifier: {
      min: -0.1,
      max: 0.15,
    },
    defenceModifier: {
      min: -0.1,
      max: 0.15,
    },
    artsResistanceModifier: {
      min: -0.1,
      max: 0.15,
    },
  }
}
