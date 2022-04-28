<template>
  <div class="w-full h-screen flex flex-row justify-center items-center space-x-2">
    <input
      v-model="playerName"
      type="text"
      placeholder="Player Name"
      class="px-1 py-px text-black"
    >
    <NuxtLink
      to="/run"
      class="px-1 py-px border-2 border-solid border-green-700 hover:bg-green-600 text-white text-center rounded-sm"
      @click="startGame"
    >
      start
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Player, setPlayer } from "@/assets/ts/player"

const playerName = ref("")

function startGame() {
  setPlayer(new Player(playerName.value))
}
</script>
