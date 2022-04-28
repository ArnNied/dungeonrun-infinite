<template>
  <div class="w-full flex flex-col space-y-4">
    <div class="w-full flex flex-col">
      <div class="w-full flex">
        <h2 class="w-full text-2xl font-semibold text-center">
          Weapon
        </h2>
      </div>
      <div class="w-full flex flex-row">
        <div class="w-1/3 flex flex-col space-y-2">
          <DebugWeaponConfigurationForm
            @generate-weapon="generateWeapon"
          />
          <CommonButton @on-click="generateWeapon">
            Generate Random
          </CommonButton>
          <CommonButton>
            Equip Primary
          </CommonButton>
          <CommonButton>
            Equip Secondary
          </CommonButton>
        </div>
        <div class="w-2/3 flex flex-row">
          <DebugEquipmentAttributes
            :equipment="weapon"
            :base-attributes="baseWeaponAttribute"
            :attributes="weaponAttributes"
          />
          <DebugEquipmentModifications :equipment="weapon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue"
import { TWeaponConfiguration, Weapon } from "@/assets/ts/weapon/weapon"
import { sanitizeForm } from "@/assets/ts/utils"
import { createEquipment } from "@/assets/ts/factory"

const weapon: Ref<Weapon> = ref(createEquipment("WEAPON", 100) as Weapon)

const baseWeaponAttribute = [
  "rating",
  "grade",
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

function generateWeapon(configuration?: TWeaponConfiguration): void {
  let sanitized = sanitizeForm(configuration || {}) as TWeaponConfiguration
  weapon.value = createEquipment("WEAPON", sanitized?.rating, undefined, sanitized) as Weapon
}
</script>
