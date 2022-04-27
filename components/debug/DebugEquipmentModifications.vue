<template>
  <div class="w-full flex flex-col items-center">
    <h3 class="text-lg text-center">
      Modifications
    </h3>
    <div class="w-full px-4 flex flex-col justify-center space-y-2">
      <div
        v-for="(modification, slot) in equipment.modifications"
        :key="slot"
        class="flex flex-col"
      >
        <div class="text-center flex flex-col">
          <h4>{{ slot.toUpperCase() }}</h4>
          <div class="flex flex-col">
            <div
              v-for="(attribute, key) in modification?.configuration"
              :key="key"
              class="flex flex-row justify-between"
            >
              <p>{{ key }} :</p>
              <p>
                {{
                  Object.getOwnPropertyDescriptor(
                    modification,
                    key
                  )?.value
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Weapon } from "@/assets/ts/weapon/weapon"
import { Apparel } from "@/assets/ts/apparel/apparel"


const props = defineProps({
  equipment: {
    type: [Weapon, Apparel],
    required: true,
  },
})

</script>
