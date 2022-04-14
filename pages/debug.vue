<template>
  <div class="h-full p-12">
    <div class="flex flex-col items-center justify-center">
      <div class="w-full flex flex-wrap space-y-4">
        <h2 class="w-full text-2xl font-semibold text-center">
          Weapon
        </h2>
        <div class="w-3/4 flex flex-row">
          <DebugWeaponAttributes :weapon="weapon" />
          <DebugWeaponModifications :weapon="weapon" />
        </div>
        <div class="w-1/4 flex flex-col space-y-2">
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
            @click="generateWeapon"
          >
            Generate
          </button>
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
          >
            Equip Slot 1
          </button>
          <button
            class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
          >
            Equip Slot 2
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Weapon } from "@/assets/ts/weapon/weapon"

import DebugWeaponAttributes from "@/components/debug/DebugWeaponAttributes.vue"
import DebugWeaponModifications from "@/components/debug/DebugWeaponModifications.vue"

useHead({
  title: "DungeonRun | Debug Weapon",
})

const weapon = ref(new Weapon(10))
weapon.value.initializeModifications()

function generateWeapon() {
  weapon.value = new Weapon(10)
  weapon.value.initializeModifications()
}
</script>
