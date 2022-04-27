import { Config } from "@/assets/ts/base/base"
import { Modification, modificationDefaultRange } from "@/assets/ts/base/modification"


export type TApparelModificationModifier = {
  healthPointModifier: Config
  defenceModifier: Config
  artsResistanceModifier: Config
}
export class ApparelModification extends Modification {
  healthPointModifier: number
  defenceModifier: number
  artsResistanceModifier: number

  configuration: TApparelModificationModifier = {
    healthPointModifier: new Config(modificationDefaultRange),
    defenceModifier: new Config(modificationDefaultRange),
    artsResistanceModifier: new Config(modificationDefaultRange),
  }
}
