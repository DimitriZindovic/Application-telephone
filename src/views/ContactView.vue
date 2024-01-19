<script>
import CardContact from "@/components/CardContact.vue";
import { useContactStore } from "../stores/contact";
import { useRecentStore } from "../stores/recent";

export default {
  name: "ContactView",

  data() {
    return {
      addContact: {
        name: "",
        phone: "",
      },

      Recent: {
        info: "",
        date: "",
        time: "",
      },
    };
  },

  setup() {
    const recentStore = useRecentStore();
    const contactStore = useContactStore();
    return {
      recentStore,
      contactStore,
    };
  },

  computed: {
    recents() {
      return this.recentStore.recents;
    },
    contacts() {
      return this.contactStore.contacts;
    },
  },

  methods: {
    addContact() {
      this.contacts.push(this.addContact);
      this.addContact = {
        name: "",
        number: "",
      };
    },

    newCall(name) {
      this.Recent.info = name;
      this.Recent.date = new Date().toLocaleDateString();
      this.Recent.time = new Date().toLocaleTimeString();
      this.recents.push(this.Recent);
      this.Recent = {
        info: "",
        date: "",
        time: "",
      };
    },
  },

  components: { CardContact },
};
</script>
<template>
  <RouterLink to="/nouveau-contact">+</RouterLink>
  <div id="contact">
    <div id="container-cards" v-for="contact in contacts" :key="contact.name">
      <div class="card">
        <CardContact :contact="contact" />
        <button @click="newCall(contact.name)">Appeler</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
#contact {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding: 20px;
}

.card {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
  text-align: center;
  width: 100%;
  color: #333;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card button {
  background-color: #4a4a4a;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card button:hover {
  background-color: #333;
}
</style>
