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
    <CommonButton type="submit">
      Generate w/ Configuration
    </CommonButton>
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
