<template>
  <div class="w-1/2 flex flex-col items-center space-y-2">
    <DebugEquipmentAttributesSegment
      segment-name="Base Stats"
      :equipment="equipment"
      :attributes="baseAttributes"
    />
    <DebugEquipmentAttributesSegment
      segment-name="Final Stats"
      :equipment="equipment"
      :attributes="attributes"
    />
  </div>
</template>

<script lang="ts" setup>
import { Weapon } from "@/assets/ts/weapon/weapon"
import { Apparel } from "@/assets/ts/apparel/apparel"


import DebugEquipmentAttributesSegment from "@/components/debug/DebugEquipmentAttributesSegment.vue"


const props = defineProps({
  equipment: {
    type: [Weapon, Apparel],
    required: true,
  },
  baseAttributes: {
    type: Array,
    required: true,
  },
  attributes: {
    type: Array,
    required: true,
  }
})


</script>
