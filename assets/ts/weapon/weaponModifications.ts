import { Modification, modificationDefaultRange } from "@/assets/ts/base/modification"
import { Config } from "@/assets/ts/base/base"

export type TWeaponModificationModifier = {
  damageModifier?: Config
  speedModifier?: Config
  hitChanceModifier?: Config
  critChanceModifier?: Config
  critMultiplierModifier?: Config
}

export class WeaponModificationBody extends Modification {
  damageModifier: number
  critChanceModifier: number
  critMultiplierModifier: number

  configuration: TWeaponModificationModifier = {
    damageModifier: new Config(modificationDefaultRange),
    critChanceModifier: new Config(modificationDefaultRange),
    critMultiplierModifier: new Config(modificationDefaultRange)
  }
}

export class WeaponModificationSight extends Modification {
  hitChanceModifier: number
  critChanceModifier: number

  configuration: TWeaponModificationModifier = {
    hitChanceModifier: new Config(modificationDefaultRange),
    critChanceModifier: new Config(modificationDefaultRange)
  }
}

export class WeaponModificationBarrel extends Modification {
  damageModifier: number
  critMultiplierModifier: number

  configuration: TWeaponModificationModifier = {
    damageModifier: new Config(modificationDefaultRange),
    critMultiplierModifier: new Config(modificationDefaultRange)
  }
}

export class WeaponModificationGrip extends Modification {
  speedModifier: number

  configuration: TWeaponModificationModifier = {
    speedModifier: new Config(modificationDefaultRange),
  }
}

export class WeaponModificationStock extends Modification {
  hitChanceModifier: number
  speedModifier: number

  configuration: TWeaponModificationModifier = {
    speedModifier: new Config(modificationDefaultRange),
    hitChanceModifier: new Config(modificationDefaultRange),
  }
}