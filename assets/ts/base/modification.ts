import { BaseItem, TMinMax } from "@/assets/ts/base/base"


export const itemGrade = [
  "AWFUL",
  "POOR",
  "NORMAL",
  "FINE",
  "PRIME",
] as const

export const modificationDefaultRange: TMinMax = { min: -0.1, max: 0.15 } as const

export type TItemGrade = typeof itemGrade[number]

export class Modification extends BaseItem {
  initialized = false
  grade: TItemGrade = "NORMAL"
  iGrade: number

  applyConfiguration(): void {
    if (!this.initialized) {
      Object.entries(this.configuration).forEach(([key, value]) => {
        Object.defineProperty(this, key, {
          value: value.init(),
          writable: true,
          enumerable: true,
        })
      })
      this.calculateGrade()
    }
    this.initialized = true
  }

  calculateGrade(): TItemGrade {
    const step: number = 1 / itemGrade.length
    let totalRange = 0
    let quality = 0

    Object.entries(this.configuration).forEach(([key, value]) => {
      const initialized: number = Object.getOwnPropertyDescriptor(this, key)?.value
      if (typeof value.value === "object" && !Array.isArray(value.value)) {
        totalRange += value.value.max - value.value.min
        quality += initialized - value.value.min
      }
    })

    this.iGrade = Math.floor(quality / totalRange / step)
    this.grade = itemGrade[this.iGrade]
    // console.log(this.iGrade)
    // console.log(step, totalRange, quality, quality / totalRange, itemGrade[this.iGrade])

    return this.grade
  }
}

