<script setup>
import { computed } from "vue"

const props = defineProps({
  attributeName: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  }}
)
const emits = defineEmits(["update:modelValue"])

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(modelValue) {
    emits("update:modelValue", modelValue)
  }
})
</script>

<template>
  <div class="w-full flex flex-row space-x-2">
    <label
      :for="attributeName"
      class="w-1/2"
    >{{ attributeName }}</label>
    <input
      :id="attributeName"
      v-model="modelValue"
      type="text"
      :placeholder="attributeName"
      class="w-1/2 px-1 py-px border border-solid border-green-700 text-black rounded-sm focus:outline-none"
    >
  </div>
</template>