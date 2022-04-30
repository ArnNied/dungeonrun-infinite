<template>
  <div
    class="flex flex-row"
    :class="width"
  >
    <div
      ref="filled"
      :class="[padding, filledColor]"
    />
    <div
      ref="empty"
      :class="[padding, emptyColor]"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUpdated } from "vue"

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  width: {
    type: String,
    default: "grow",
  },
  padding: {
    type: String,
    default: "py-1",
  },
  filledColor: {
    type: String,
    default: "bg-green-500",
  },
  emptyColor: {
    type: String,
    default: "bg-white",
  },
})

const filled = ref()
const empty = ref()

function calculate() {
  if (props.value <= 0) {
    filled.value.style.width = "0%"
    empty.value.style.width = "100%"
  } else if (props.value >= props.max) {
    filled.value.style.width = "100%"
    empty.value.style.width = "0%"
  } else {
    filled.value.style.width = `${(props.value / props.max) * 100}%`
    empty.value.style.width = `${(1 - props.value / props.max) * 100}%`
  }
}

onMounted(calculate)
onUpdated(calculate)
</script>
