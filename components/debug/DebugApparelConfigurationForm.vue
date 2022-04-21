<template>
  <form
    class="flex flex-col space-y-2"
    @submit.prevent="$emit('generateApparel', apparelConfiguration)"
  >
    <DebugEquipmentFormInput
      v-model="apparelConfiguration.rating"
      attribute-name="Rating"
    />
    <DebugEquipmentFormSelect
      v-model="apparelConfiguration.location"
      attribute-name="Location"
      :options="apparelLocation"
    />

    <DebugEquipmentFormInput
      v-model="apparelConfiguration.baseHealthPoint"
      attribute-name="Base Health Point"
    />
    <DebugEquipmentFormInput
      v-model="apparelConfiguration.baseDefence"
      attribute-name="Base Defence"
    />
    <DebugEquipmentFormInput
      v-model="apparelConfiguration.baseArtsResistance"
      attribute-name="Base Arts Resistance"
    />
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
