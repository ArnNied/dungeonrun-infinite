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
  bodyAttrs: {
    class: "bg-slate-900 text-white"
  }
})
</script>
