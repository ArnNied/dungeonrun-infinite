import { getRandomArbitrary } from "@/assets/ts/utils"

export type ModificationConfig = {
    [key: string]: {
        min: number,
        max: number,
    }
}

export class Modification {
  config: ModificationConfig
  initialized = false
  grade: "POOR" | "BAD" | "NORMAL" | "GOOD" | "EPIC" = "NORMAL"
  //  0.1 - 0.05 | 0.05 - 0 | 0 - 0.05 | 0.05 - 0.1 | 0.1 - 0.15
  // gradeCategorization:

  initProps() {
    if(!this.initialized) {
      Object.keys(this.config).forEach((property) => {
        const modifierValue = getRandomArbitrary(this.config[property].min, this.config[property].max)
        Object.defineProperty(this, property, {
          value: Number.parseFloat(modifierValue.toFixed(3)),
          writable: true,
        })
      })
      // TODO: Set grade

    }
    this.initialized = true
  }
}