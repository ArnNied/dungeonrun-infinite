<template>
  <div class="w-full flex flex-col space-y-4">
    <div class="w-full flex flex-col">
      <div class="w-full flex">
        <h2 class="w-full text-2xl font-semibold text-center">
          Apparel
        </h2>
      </div>
      <div class="w-full flex flex-row">
        <div class="w-1/3 flex flex-col space-y-2">
          <DebugApparelConfigurationForm
            @generate-apparel="generateApparel"
          />
          <CommonButton @on-click="generateApparel">
            Generate Random
          </CommonButton>
          <CommonButton>
            Equip
          </CommonButton>
        </div>
        <div class="w-2/3 flex flex-row">
          <DebugEquipmentAttributes
            :equipment="apparel"
            :base-attributes="baseApparelAttributes"
            :attributes="apparelAttributes"
          />
          <DebugEquipmentModifications :equipment="apparel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue"
import { Apparel, TApparelConfiguration } from "@/assets/ts/apparel/apparel"
import { sanitizeForm } from "@/assets/ts/utils"
import { createEquipment } from "@/assets/ts/factory"

const apparel: Ref<Apparel> = ref(createEquipment("APPAREL", 100) as Apparel)

const baseApparelAttributes = [
  "location",
  "rating",
  "grade",
  "baseHealthPoint",
  "baseDefence",
  "baseArtsResistance",
]

const apparelAttributes = ["healthPoint", "defence", "artsResistance"]

function generateApparel(configuration?: TApparelConfiguration): void {
  let sanitized = sanitizeForm(configuration || {}) as TApparelConfiguration
  apparel.value = createEquipment("APPAREL", sanitized?.rating, undefined, sanitized) as Apparel
}
</script>
