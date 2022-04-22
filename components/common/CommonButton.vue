<template>
  <button
    class="w-full p-2 border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
    @click="$emit('onClick')"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
const emits = defineEmits(["onClick"])
</script>
