<template>
  <div class="w-1/2 flex flex-col items-center">
    <h3 class="text-lg text-center">
      Modifications
    </h3>
    <div class="w-3/4 px-4 flex flex-col justify-center space-y-2">
      <div
        v-for="(modification, slot) in weapon.modifications"
        :key="slot"
        class="flex flex-col"
      >
        <div class="text-center flex flex-col">
          <h4>{{ slot.toUpperCase() }}</h4>
          <div class="flex flex-col">
            <div
              v-for="(attribute, key) in modification?.config"
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

const props = defineProps({
  weapon: {
    type: Weapon,
    required: true,
  }
})

</script>
