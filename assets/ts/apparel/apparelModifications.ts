import { Modification, ModificationConfig } from "@/assets/ts/base/modifications"

export class ApparelModification extends Modification {
  config: ModificationConfig = {
    healthModifier: {
      min: -0.1,
      max: 0.15,
    },
    defModifier: {
      min: -0.1,
      max: 0.15,
    },
    resModifier: {
      min: -0.1,
      max: 0.15,
    },
  }
}
