<template>
  <form
    class="flex flex-col space-y-2"
    @submit.prevent="$emit('generateApparel', apparelConfiguration)"
  >
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelRating">Rating</label>
      <input
        id="apparelRating"
        v-model="apparelConfiguration.rating"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelLocation">Location</label>
      <select
        id="apparelLocation"
        v-model="apparelConfiguration.location"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
        <option
          v-for="location in apparelLocation"
          :key="location"
        >
          {{ location }}
        </option>
      </select>
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelDefence">baseHealthPoint</label>
      <input
        id="apparelDefence"
        v-model="apparelConfiguration.baseHealthPoint"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apparelDefence">baseDefence</label>
      <input
        id="apparelDefence"
        v-model="apparelConfiguration.baseDefence"
        type="text"
        class="w-full p-1 border border-solid border-green-700 text-black text-right rounded-sm focus:outline-none"
      >
    </div>
    <div class="w-full flex flex-row items-center space-x-2">
      <label for="apprelRes">baseArtsResistance</label>
      <input
        id="apprelRes"
        v-model="apparelConfiguration.baseArtsResistance"
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
import { apparelLocation } from "@/assets/ts/apparel/apparel"

const emits = defineEmits(["generateApparel"])

const apparelConfiguration = ref({
  rating: 100,
  location: "HEAD",
  baseHealthPoint: "",
  baseDefence: "",
  baseArtsResistance: "",
})

</script>
