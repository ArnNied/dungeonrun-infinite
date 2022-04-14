import { defineStore } from "pinia"

class Player {
  health_point = 100
  max_health_point = 100
}

export const playerStore = defineStore("player", {
  state: () => ({
    player: new Player()
  })
})