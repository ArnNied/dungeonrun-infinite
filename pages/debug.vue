<template>
  <div class="flex flex-col h-full p-12 space-y-12">
    <div class="flex flex-row justify-center">
      <button
        class="px-2 py-4 text-xl border-b border-solid"
        :class="[selectedEquipment === 'weapon' ? 'border-green-700' : 'border-white']"
        @click="selectedEquipment = 'weapon'"
      >
        Weapon
      </button>
      <button
        class="px-2 py-4 text-xl border-b border-solid"
        :class="[selectedEquipment === 'apparel' ? 'border-green-700' : 'border-white']"
        @click="selectedEquipment = 'apparel'"
      >
        Apparel
      </button>
    </div>
    <div class="flex flex-col items-center justify-center space-y-12">
      <DebugApparel v-if="selectedEquipment === 'apparel'" />
      <DebugWeapon v-if="selectedEquipment === 'weapon'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

useHead({
  title: "DungeonRun | Debug Weapon",
})

const selectedEquipment = ref("apparel")
</script>
