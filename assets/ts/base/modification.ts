import { BaseItem } from "@/assets/ts/base/base"


export const modificationGrade = [
  "POOR",
  "BAD",
  "NORMAL",
  "GOOD",
  "EPIC",
] as const

export const modificationDefaultRange = { min: -0.1, max: 0.15 } as const

export type TModificationGrade = typeof modificationGrade[number]

export class Modification extends BaseItem {
  initialized = false
  grade: TModificationGrade = "NORMAL"
  //  0.1 - 0.05 | 0.05 - 0 | 0 - 0.05 | 0.05 - 0.1 | 0.1 - 0.15
  // gradeCategorization:

  applyConfiguration(): void {
    if (!this.initialized) {
      Object.entries(this.configuration).forEach(([key, value]) => {
        Object.defineProperty(this, key, {
          value: value.init(),
          writable: true,
          enumerable: true,
        })
      })
      // TODO: Set grade
    }
    this.initialized = true
  }
}
