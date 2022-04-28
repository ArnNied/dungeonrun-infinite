<template>
  <form
    class="flex flex-col space-y-2"
    @submit.prevent="$emit('generateWeapon', weaponConfiguration)"
  >
    <DebugEquipmentFormInput
      v-model="weaponConfiguration.rating"
      attribute-name="Rating"
    />
    <DebugEquipmentFormSelect
      v-model="weaponConfiguration.damageType"
      attribute-name="Damage Type"
      :options="weaponDamageType"
    />

    <DebugEquipmentFormInput
      v-model="weaponConfiguration.baseDamage"
      attribute-name="Base Damage"
    />
    <DebugEquipmentFormInput
      v-model="weaponConfiguration.baseSpeed"
      attribute-name="Base Speed"
    />
    <DebugEquipmentFormInput
      v-model="weaponConfiguration.baseHitChance"
      attribute-name="Base Hit Chance"
    />
    <DebugEquipmentFormInput
      v-model="weaponConfiguration.baseCritChance"
      attribute-name="Base Crit Chance"
    />
    <DebugEquipmentFormInput
      v-model="weaponConfiguration.baseCritMultiplier"
      attribute-name="Base Crit Multiplier"
    />
    <CommonButton type="submit">
      Generate w/ Configuration
    </CommonButton>
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
  baseCritChance: "",
  baseCritMultiplier: "",
})
</script>
