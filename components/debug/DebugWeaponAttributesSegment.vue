<template>
  <div class="w-3/4 flex flex-col items-center">
    <h3 class="text-lg text-center">
      {{ segmentName }}
    </h3>
    <div class="w-full px-4 flex flex-col justify-center">
      <div
        v-for="attribute in attributes"
        :key="(attribute as string)"
        class="flex flex-row justify-between"
      >
        <p>{{ attribute }} :</p>
        <p>{{ weapon[attribute as string] }}</p>
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
  },
  segmentName: {
    type: String,
    required: true,
  },
  attributes: {
    type: Array,
    required: true,
  }
})
</script>