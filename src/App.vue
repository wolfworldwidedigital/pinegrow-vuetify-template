<script setup>
  // https://github.com/vueuse/head
  // you can use this to manipulate the document head in any components,
  useHead({
    title: 'Pinegrow Vuetify Template',
    meta: [
      { name: 'description', content: 'Visually design your vite-powered vuetify apps' },
    ],
  })

</script>

<template>
  <v-app>
    <v-app-bar>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>