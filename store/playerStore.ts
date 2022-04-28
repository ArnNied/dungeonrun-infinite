import { defineStore } from "pinia"

export const playerStore = defineStore("player", {
  state: () => ({
    player: "foo"
  })
})