<script>
import { useContactStore } from "../stores/contact";

export default {
  name: "ContactView",
  setup() {
    const contactStore = useContactStore();
    return {
      contactStore,
    };
  },
  computed: {
    contacts() {
      return this.contactStore.contacts;
    },
  },
  data() {
    return {
      addContact: {
        name: "",
        number: "",
      },
    };
  },
  methods: {
    newContact() {
      this.contacts.push(this.addContact);
      this.addContact = {
        name: "",
        number: "",
      };
    },
  },
};
</script>
<template>
  <h1>Nouveau contact</h1>
  <form @submit.prevent="newContact()">
    <input type="text" id="name" placeholder="name" v-model="addContact.name" />
    <p class="error" v-if="addContact.name.length == 0">
      pas de nom de contact
    </p>
    <input
      type="text"
      id="number"
      placeholder="numero"
      v-model="addContact.number"
    />
    <p class="error" v-if="addContact.number.length != 10">
      numero de telephone non valable
    </p>
    <input type="submit" value="Add Contact" />
  </form>
</template>
<style scoped>
.error {
  color: red;
}

input {
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form input {
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000;
}

form input[type="submit"] {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}
</style>
