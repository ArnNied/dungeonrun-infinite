<template>
  <div class="h-screen flex flex-col content-between p-12">
    <div class="flex flex-row mb-auto">
      <div class="w-1/2 flex flex-col justify-center">
        <h2 class="text-2xl text-center">
          {{ PLAYER.name }}
        </h2>
      </div>
      <div class="w-1/2 flex flex-col justify-center">
        <h2 class="text-2xl text-center">
          Enemy
        </h2>
      </div>
    </div>
    <div class="flex flex-row space-x-4">
      <CommonButton
        v-for="(weapon, slot) in PLAYER.weapons"
        :key="slot"
        width="w-1/4"
        class="flex flex-col"
      >
        <h3 class="capitalize text-lg">
          Fire {{ slot }}
          <span
            class="inline text-sm items-center"
            :class="[gradeColor[weapon.iGrade]]"
          >
            ({{ weapon.rating }})
          </span>
        </h3>
        <div class="flex flex-row justify-between space-x-4">
          <div class="w-1/3 flex flex-col-reverse">
            <h4
              class="text-sm border-t border-solid border-slate-400 text-slate-400"
            >
              TYPE
            </h4>
            <h4 class="text-sm">
              {{ weapon.damageType }}
            </h4>
          </div>
          <div class="w-1/3 flex flex-col-reverse">
            <h4
              class="text-sm border-t border-solid border-slate-400 text-slate-400"
            >
              DMG
            </h4>
            <h4 class="text-sm">
              {{ weapon.damage }}
            </h4>
          </div>
          <div class="w-1/3 flex flex-col-reverse">
            <h4
              class="text-sm border-t border-solid border-slate-400 text-slate-400"
            >
              SPEED
            </h4>
            <h4 class="text-sm">
              {{ weapon.speed }}
            </h4>
          </div>
        </div>
        <div class="flex flex-row justify-between space-x-4">
          <div class="w-1/3 flex flex-col-reverse">
            <h4
              class="text-sm border-t border-solid border-slate-400 text-slate-400"
            >
              HIT
            </h4>
            <h4 class="text-sm">
              {{ weapon.hitChance }}
            </h4>
          </div>
          <div class="w-1/3 flex flex-col-reverse">
            <h4
              class="text-sm border-t border-solid border-slate-400 text-slate-400"
            >
              CRIT
            </h4>
            <h4 class="text-sm">
              {{ weapon.critChance }}
            </h4>
          </div>
          <div class="w-1/3 flex flex-col-reverse">
            <h4
              class="text-sm border-t border-solid border-slate-400 text-slate-400"
            >
              MULTIPLIER
            </h4>
            <h4 class="text-sm">
              {{ weapon.critMultiplier }}
            </h4>
          </div>
        </div>
      </CommonButton>
      <CommonButton width="w-1/4">
        Offensive Skill
      </CommonButton>
      <CommonButton width="w-1/4">
        Defensive skill
      </CommonButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { PLAYER } from "@/assets/ts/player"

const gradeColor = ref([
  "text-red-400",
  "text-yellow-400",
  "text-green-400",
  "text-blue-400",
  "text-purple-400",
])

console.log(PLAYER)
</script>
