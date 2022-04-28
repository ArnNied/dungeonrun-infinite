<template>
  <div
    class="w-full h-screen flex flex-row items-center justify-center"
  >
    <div class="w-1/2 flex flex-col items-center space-y-8">
      <h1 class="font-bold text-8xl text-white">
        DungeonRun
      </h1>
      <h1 class="font-bold text-6xl text-white">
        Infinite
      </h1>
    </div>
    <div class="w-1/2 flex justify-center">
      <div
        class="w-1/2 flex flex-col items-center justify-center space-y-4"
      >
        <NuxtLink
          to="/start"
          class="w-full p-4 border-2 border-solid border-green-700 text-2xl hover:bg-green-600 text-white text-center rounded-sm"
        >
          Start
        </NuxtLink>
        <NuxtLink
          to="/tutorial"
          class="w-full p-4 border-2 border-solid border-green-700 text-2xl hover:bg-green-600 text-white text-center rounded-sm"
        >
          Tutorial
        </NuxtLink>
        <NuxtLink
          to="/debug"
          class="w-full p-4 border-2 border-solid border-green-700 text-2xl hover:bg-green-600 text-white text-center rounded-sm"
        >
          Debug
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
