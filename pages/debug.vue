<template>
  <div class="h-full p-12">
    <div class="flex flex-col items-center justify-center space-y-12">
      <div class="w-full flex flex-wrap space-y-4">
        <h2 class="w-full text-2xl font-semibold text-center">
          Weapon
        </h2>
        <div class="w-3/4 flex flex-row">
          <DebugEquipmentAttributes
            :equipment="weapon"
            :base-attributes="baseWeaponAttribute"
            :attributes="weaponAttributes"
          />
          <DebugEquipmentModifications :equipment="weapon" />
        </div>
        <div class="w-1/4 flex flex-col space-y-2">
          <DebugWeaponConfigurationForm @generate-weapon="generateWeapon" />
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
            @click="generateWeapon()"
          >
            Generate
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
      </div>
      <div class="w-full flex flex-wrap space-y-4">
        <h2 class="w-full text-2xl font-semibold text-center">
          Apparel
        </h2>
        <div class="w-3/4 flex flex-row">
          <DebugEquipmentAttributes
            :equipment="apparel"
            :base-attributes="baseApparelAttributes"
            :attributes="apparelAttributes"
          />
          <DebugEquipmentModifications :equipment="apparel" />
        </div>
        <div class="w-1/4 flex flex-col space-y-2">
          <DebugApparelConfigurationForm
            @generate-apparel="generateApparel"
          />
          <button
            type="submit"
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
            @click="generateApparel()"
          >
            Generate Random
          </button>
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
          >
            Equip
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Weapon, WeaponConfiguration } from "@/assets/ts/weapon/weapon"
import { Apparel, ApparelConfiguration } from "@/assets/ts/apparel/apparel"


useHead({
  title: "DungeonRun | Debug Weapon",
})

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

const baseApparelAttributes = [
  "location",
  "rating",
  "baseHealthPoint",
  "baseDefence",
  "baseArtsResistance",
]

const apparelAttributes = ["healthPoint", "defence", "artsResistance"]

const weapon = ref(new Weapon(100))
weapon.value.initializeModifications()

const apparel = ref(new Apparel(100))
apparel.value.initializeModifications()

function sanitizeForm(configuration: WeaponConfiguration | ApparelConfiguration): WeaponConfiguration | ApparelConfiguration{
  const sanitized = {}

  Object.entries(configuration).forEach(([key, value]) => {
    if (value || value === 0) {
      Object.defineProperty(sanitized, key, {
        value: value,
        writable: true,
        enumerable: true,
      })
    }
  })

  return sanitized
}

function generateWeapon(configuration?: WeaponConfiguration) {
  if (configuration) {
    let sanitized = sanitizeForm(configuration)
    weapon.value = new Weapon(sanitized.rating as number || 100, sanitized as WeaponConfiguration)
  } else {
    weapon.value = new Weapon(100)
  }
  weapon.value.initializeModifications()
}

function generateApparel(configuration?: ApparelConfiguration) {
  if (configuration) {
    let sanitized = sanitizeForm(configuration)
    apparel.value = new Apparel(sanitized.rating as number || 100, sanitized as ApparelConfiguration)
  } else {
    apparel.value = new Apparel(100)
  }
  apparel.value.initializeModifications()
}
</script>
