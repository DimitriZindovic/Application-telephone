import { defineStore } from "pinia";

export const useRecentStore = defineStore("recent", {
  state: () => ({
    recents: [
      {
        info: "0601020304",
        date: "01/01/2021",
        time: "12:00",
      },
      {
        info: "Noah",
        date: "01/01/2021",
        time: "12:00",
      },
      {
        info: "Antoine",
        date: "01/01/2021",
        time: "12:00",
      },
    ],
  }),
  actions: {
    addRecent(recent) {
      this.recents.push(recent);
    },
  },
});
