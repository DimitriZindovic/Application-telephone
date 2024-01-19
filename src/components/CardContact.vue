<script>
export default {
  name: "CardContact",
  props: ["contact"],
};
</script>

<template>
  <div class="card-contact">
    <h3>{{ contact.name }}</h3>
    <h4>{{ contact.number }}</h4>
  </div>
</template>

<style scoped></style>
