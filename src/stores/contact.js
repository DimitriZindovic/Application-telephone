import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    contacts: [
      {
        name: "Pierre",
        number: "0601020304",
      },
      {
        name: "Paul",
        number: "0605060708",
      },
      {
        name: "Jacques",
        number: "0609101112",
      },
      {
        name: "Jean",
        number: "0613141516",
      },
      {
        name: "Philippe",
        number: "0617181920",
      },
      {
        name: "Jeanne",
        number: "0621222324",
      },
      {
        name: "Marie",
        number: "0625262728",
      },
      {
        name: "Anne",
        number: "0629303132",
      },
      {
        name: "Julie",
        number: "0633343536",
      },
    ],
  }),
  actions: {
    addContact(contact) {
      this.contacts.push(contact);
    },
  },
});
