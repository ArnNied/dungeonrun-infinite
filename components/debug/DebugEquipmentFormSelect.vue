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
  },
  options: {
    type: Array,
    required: true
  }
})
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
  <div class="w-full flex flex-row items-center space-x-2">
    <label
      :for="attributeName"
      class="w-1/2"
    >{{ attributeName }}</label>
    <select
      :id="attributeName"
      v-model="modelValue"
      class="w-1/2 p-1 border border-solid border-green-700 text-black rounded-sm focus:outline-none"
    >
      <option
        v-for="option in options"
        :key="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>