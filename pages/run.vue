<template>
	<div class="h-screen flex flex-col content-between p-12">
		<div class="flex flex-row mb-auto">
			<div class="w-1/2 flex flex-col items-center space-y-2">
				<h2 class="text-2xl text-center">
					{{ player.name || "Player" }}
				</h2>
				<div class="w-10/12 flex flex-col justify-center">
					<div class="flex flex-row items-center space-x-4">
						<h3 class="text-right">
							HP: {{ player.healthPoint }}/{{
								player.maxHealthPoint
							}}
						</h3>
						<CommonBar
							:value="player.healthPoint"
							:max="player.maxHealthPoint"
						/>
					</div>
					<div class="flex flex-row justify-center space-x-4">
						<h3>DEF: {{ player.defence }}</h3>
						<h3>RES: {{ player.artsResistance }}</h3>
					</div>
				</div>
				<div class="w-full flex flex-row">
					<div class="w-2/10 flex flex-col space-y-2">
						<div
							v-for="(apparel, slot) in player.apparels"
							:key="slot"
							class="w-20 h-20 flex items-center justify-center uppercase border border-solid border-green-500"
							:class="[gradeColor[apparel.iGrade]]"
						>
							{{ slot }}
						</div>
					</div>
          <div class="grow flex flex-col justify-center items-center">
            IMAGE
          </div>
				</div>
			</div>
			<div class="w-1/2 flex flex-col">
				<h2 class="text-2xl text-center">Enemy</h2>
			</div>
		</div>
		<div class="flex flex-row space-x-4">
			<CommonButton
				v-for="(weapon, slot) in player.weapons"
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
				<CommonBar :value="0.5" :max="1" />
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
			<CommonButton width="w-1/4" @on-click="player.healthPoint -= 10">
				Offensive Skill
			</CommonButton>
			<CommonButton width="w-1/4"> Defensive skill </CommonButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { PLAYER } from "@/assets/ts/entity"

const player = ref(PLAYER)
console.log(player.value)

player.value.combatInit()

const gradeColor = ref([
	"text-red-400",
	"text-yellow-400",
	"text-green-400",
	"text-blue-400",
	"text-purple-400",
])
performance
// console.log(PLAYER)
</script>

<style scoped></style>
