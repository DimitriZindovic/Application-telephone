<script>
import { useRecentStore } from "../stores/recent";

export default {
  name: "RecentView",

  setup() {
    const recentStore = useRecentStore();
    return {
      recentStore,
    };
  },

  data() {
    return {
      addRecent: {
        info: "",
        date: "",
        time: "",
      },
    };
  },

  computed: {
    recents() {
      return this.recentStore.recents;
    },
  },
};
</script>
<template>
  <div id="container-recent">
    <div v-for="recent in recents" :key="recent.info">
      <p>{{ recent.info }}</p>
      <p>{{ recent.date }}</p>
      <p>{{ recent.time }}</p>
    </div>
  </div>
</template>

<style scoped>
#container-recent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding: 20px;
}

#container-recent div {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
  text-align: center;
  width: 200px;
  color: #333;
  transition: transform 0.3s;
}

#container-recent div:hover {
  transform: scale(1.05);
}

#container-recent p {
  margin: 10px 0;
  color: #666;
  font-size: 1.2em;
}
</style>
