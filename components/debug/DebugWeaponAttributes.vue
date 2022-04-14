<template>
  <div class="w-1/2 flex flex-col items-center space-y-2">
    <DebugWeaponAttributesSegment
      segment-name="Base Stats"
      :weapon="weapon"
      :attributes="baseWeaponAttribute"
    />
    <DebugWeaponAttributesSegment
      segment-name="Final Stats"
      :weapon="weapon"
      :attributes="weaponAttribute"
    />
  </div>
</template>

<script lang="ts" setup>
import { Weapon } from "@/assets/ts/weapon/weapon"

import DebugWeaponAttributesSegment from "@/components/debug/DebugWeaponAttributesSegment.vue"


const props = defineProps({
  weapon: {
    type: Weapon,
    required: true,
  }
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

const weaponAttribute = [
  "rating",
  "damageType",
  "damage",
  "speed",
  "hitChance",
  "critChance",
  "critMultiplier",
]
</script>
