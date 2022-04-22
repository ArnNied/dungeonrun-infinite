<template>
  <div class="w-full flex flex-col space-y-4">
    <div class="w-full flex flex-col">
      <div class="w-full flex">
        <h2 class="w-full text-2xl font-semibold text-center">
          Weapon
        </h2>
      </div>
      <div class="w-full flex flex-row">
        <div class="w-1/3 flex flex-col space-y-2">
          <DebugWeaponConfigurationForm
            @generate-weapon="generateWeapon"
          />
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
            @click="generateWeapon()"
          >
            Generate Random
          </button>
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
          >
            Equip Primary
          </button>
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
          >
            Equip Secondary
          </button>
        </div>
        <div class="w-2/3 flex flex-row">
          <DebugEquipmentAttributes
            :equipment="weapon"
            :base-attributes="baseWeaponAttribute"
            :attributes="weaponAttributes"
          />
          <DebugEquipmentModifications :equipment="weapon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Weapon, WeaponConfiguration } from "@/assets/ts/weapon/weapon"
import { sanitizeForm } from "@/assets/ts/utils"

const weapon = ref(new Weapon(100))
weapon.value.initializeModifications()

const baseWeaponAttribute = [
  "rating",
  "damageType",
  "baseDamage",
  "baseSpeed",
  "baseHitChance",
  "baseCritChance",
  "baseCritMultiplier",
]

const weaponAttributes = [
  "damage",
  "speed",
  "hitChance",
  "critChance",
  "critMultiplier",
]

function generateWeapon(configuration?: WeaponConfiguration) {
  if (configuration) {
    let sanitized = sanitizeForm(configuration) as WeaponConfiguration
    weapon.value = new Weapon(
      (sanitized.rating as number) || 100,
			sanitized as WeaponConfiguration
    )
  } else {
    weapon.value = new Weapon(100)
  }
  weapon.value.initializeModifications()
}
</script>
