<template>
  <form
    class="flex flex-col space-y-2"
    @submit.prevent="$emit('generateWeapon', weaponConfiguration)"
  >
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelRating">Rating</label>
      <input
        id="apparelRating"
        v-model="weaponConfiguration.rating"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelLocation">damageType</label>
      <select
        id="apparelLocation"
        v-model="weaponConfiguration.damageType"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
        <option
          v-for="damageType in weaponDamageType"
          :key="damageType"
        >
          {{ damageType }}
        </option>
      </select>
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelDefence">baseDamage</label>
      <input
        id="apparelDefence"
        v-model="weaponConfiguration.baseDamage"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelDefence">baseSpeed</label>
      <input
        id="apparelDefence"
        v-model="weaponConfiguration.baseSpeed"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apprelRes">baseHitChance</label>
      <input
        id="apprelRes"
        v-model="weaponConfiguration.baseHitChance"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apprelRes">baseCritChance</label>
      <input
        id="apprelRes"
        v-model="weaponConfiguration.baseCritChance"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apprelRes">baseCritMultiplier</label>
      <input
        id="apprelRes"
        v-model="weaponConfiguration.baseCritMultiplier"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <button
      type="submit"
      class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
    >
      Generate w/ Configuration
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { weaponDamageType } from "@/assets/ts/weapon/weapon"

const emits = defineEmits(["generateWeapon"])

const weaponConfiguration = ref({
  rating: 100,
  damageType: "PHYSICAL",
  baseDamage: "",
  baseSpeed: "",
  baseHitChance: "",
  baseCritChance:  "",
  baseCritMultiplier: "",
})

</script>
