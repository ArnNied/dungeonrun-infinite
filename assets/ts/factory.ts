import { TInitialConfiguration } from "@/assets/ts/base/base"
import { Apparel, TApparelConfiguration } from "@/assets/ts/apparel/apparel"
import { Weapon, TWeaponConfiguration } from "@/assets/ts/weapon/weapon"
import { rng } from "@/assets/ts/utils"

export function createApparel(rating = 100): Apparel {
  return new Apparel(rating)
}

export function createWeapon(rating = 100): Weapon {
  return new Weapon(rating)
}

export function createEquipment(
  type: "WEAPON" | "APPAREL" | "RANDOM" = "RANDOM",
  rating = 100,
  patchInitial?: TInitialConfiguration,
  fixedConfiguration?: TApparelConfiguration | TWeaponConfiguration
) {
  let equipment: Weapon | Apparel
  if (type === "APPAREL") {
    equipment = createApparel(rating)
  } else if (type === "WEAPON") {
    equipment = createWeapon(rating)
  } else {
    equipment = rng(0.5) ? createApparel(rating) : createWeapon(rating)
  }

  if (patchInitial) {
    equipment.patchInitialConfiguration(patchInitial)
  }
  equipment.applyConfiguration()
  if (fixedConfiguration) {
    equipment.fixedConfiguration(fixedConfiguration)
  }

  equipment.initializeModifications()

  return equipment
}