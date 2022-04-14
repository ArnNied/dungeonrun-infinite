import { Modification } from "@/assets/ts/base/modifications"

export type WeaponModificationModifier = {
  damageModifier?: {
    min: number,
    max: number,
  },
  speedModifier?: {
    min: number,
    max: number,
  }
  hitChanceModifier?: {
    min: number,
    max: number,
  }
  critChanceModifier?: {
    min: number,
    max: number,
  },
  critMultiplierModifier?: {
    min: number,
    max: number,
  },
}

export class WeaponModificationBody extends Modification {
  damageModifier: number
  critChanceModifier: number
  critMultiplierModifier: number

  config: WeaponModificationModifier = {
    damageModifier: {
      min: -0.1,
      max: 0.15,
    },
    critChanceModifier: {
      min: -0.1,
      max: 0.15,
    },
    critMultiplierModifier: {
      min: -0.1,
      max: 0.15,
    }
  }
}

export class WeaponModificationSight extends Modification {
  hitChanceModifier: number
  critChanceModifier: number

  config: WeaponModificationModifier = {
    hitChanceModifier: {
      min: -0.1,
      max: 0.15,
    },
    critChanceModifier: {
      min: -0.1,
      max: 0.15,
    }
  }
}

export class WeaponModificationBarrel extends Modification {
  damageModifier: number
  critMultiplierModifier: number

  config: WeaponModificationModifier = {
    damageModifier: {
      min: -0.1,
      max: 0.15,
    },
    critMultiplierModifier: {
      min: -0.1,
      max: 0.15,
    }
  }
}

export class WeaponModificationGrip extends Modification {
  speedModifier: number

  config: WeaponModificationModifier = {
    speedModifier: {
      min: -0.1,
      max: 0.15,
    },
  }
}

export class WeaponModificationStock extends Modification {
  hitChanceModifier: number
  speedModifier: number

  config: WeaponModificationModifier = {
    speedModifier: {
      min: -0.1,
      max: 0.15,
    },
    hitChanceModifier: {
      min: -0.1,
      max: 0.15,
    },
  }
}