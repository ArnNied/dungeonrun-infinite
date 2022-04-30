<template>
  <button
    class="px-2 py-1 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
    :class="[textSize, width]"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  textSize: {
    type: String,
    default: "text-base"
  },
  width: {
    type: String,
    default: "w-full"
  }
})
const emits = defineEmits(["onClick"])
</script>
