<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CommonFooter />
  </div>
</template>

<script setup>
useHead({
  title: "DungeonRun: Infinite",
  bodyAttrs: {
    class: "bg-slate-900 text-white"
  }
})
</script>
