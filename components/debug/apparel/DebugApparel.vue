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
          <CommonButton
            label="GenerateRandom"
            @on-click="generateApparel"
          />
          <CommonButton label="Equip" />
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
import { ref } from "vue"
import { Apparel, ApparelConfiguration } from "@/assets/ts/apparel/apparel"
import { sanitizeForm } from "@/assets/ts/utils"

const apparel = ref(new Apparel(100))
apparel.value.initializeModifications()

const baseApparelAttributes = [
  "location",
  "rating",
  "baseHealthPoint",
  "baseDefence",
  "baseArtsResistance",
]

const apparelAttributes = ["healthPoint", "defence", "artsResistance"]

function generateApparel(configuration?: ApparelConfiguration) {
  if (configuration) {
    let sanitized = sanitizeForm(configuration) as ApparelConfiguration
    apparel.value = new Apparel(
      (sanitized.rating as number) || 100,
      sanitized
    )
  } else {
    apparel.value = new Apparel(100)
  }
  apparel.value.initializeModifications()
}
</script>
