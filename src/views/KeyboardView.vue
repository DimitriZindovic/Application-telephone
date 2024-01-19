<script>
import { useRecentStore } from "../stores/recent";
import { useContactStore } from "../stores/contact";

export default {
  name: "ClavierView",

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
  data() {
    return {
      Recent: {
        info: "",
        date: "",
        time: "",
      },
      callerName: "", // Ajout de la propriété pour stocker le nom du caller
    };
  },

  methods: {
    newCall() {
      this.Recent.date = new Date().toLocaleDateString();
      this.Recent.time = new Date().toLocaleTimeString();
      this.recents.push(this.Recent);
      this.Recent = {
        info: "",
        date: "",
        time: "",
      };
      this.callerName = "";
    },

    addNumber(number) {
      this.Recent.info += number;
      this.callerName = this.findCallerName(this.Recent.info);
    },

    removeNumber() {
      this.Recent.info = this.Recent.info.slice(0, -1);
      this.callerName = this.findCallerName(this.Recent.info);
    },

    findCallerName(phoneNumber) {
      const contact = this.contacts.find(
        (contact) => contact.number === phoneNumber
      );
      return contact ? contact.name : null;
    },
  },
};
</script>

<template>
  <p id="number">{{ callerName || Recent.info }}</p>

  <div>
    <div class="keyboards">
      <div class="row-number">
        <button @click="addNumber(1)">1</button>
        <button @click="addNumber(2)">2</button>
        <button @click="addNumber(3)">3</button>
      </div>
      <div class="row-number">
        <button @click="addNumber(4)">4</button>
        <button @click="addNumber(5)">5</button>
        <button @click="addNumber(6)">6</button>
      </div>
      <div class="row-number">
        <button @click="addNumber(7)">7</button>
        <button @click="addNumber(8)">8</button>
        <button @click="addNumber(9)">9</button>
      </div>
      <div class="row-number">
        <button>*</button>
        <button @click="addNumber(0)">0</button>
        <button>#</button>
      </div>
    </div>
  </div>

  <div id="call">
    <button @click="newCall()">Appeler</button>
    <button @click="removeNumber">Supprimer</button>
  </div>
</template>
<style scoped>
.keyboards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row-number {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#number {
  font-size: 30px;
  text-align: center;
}

#call {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#call button {
  margin: 10px;
}

.row-number > button {
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  border: none;
  font-size: 20px;
  font-weight: 700;
}
</style>
