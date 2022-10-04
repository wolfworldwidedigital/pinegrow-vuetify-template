<script setup>
  const whatsNext = ref([
    {
      text: 'Explore components',
      href: 'https://vuetifyjs.com',
    },
    {
      text: 'Roadmap',
      href: 'https://vuetifyjs.com/introduction/roadmap/',
    },
    {
      text: 'Frequently Asked Questions',
      href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
    },
  ])
  const importantLinks = ref([
    {
      text: 'Chat',
      href: 'https://community.vuetifyjs.com',
    },
    {
      text: 'Made with Vuetify',
      href: 'https://madewithvuejs.com/vuetify',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/vuetifyjs',
    },
    {
      text: 'Articles',
      href: 'https://medium.com/vuetify',
    },
  ])
  const ecosystem = ref([
    {
      text: 'vuetify-loader',
      href: 'https://github.com/vuetifyjs/vuetify-loader',
    },
    {
      text: 'github',
      href: 'https://github.com/vuetifyjs/vuetify',
    },
    {
      text: 'awesome-vuetify',
      href: 'https://github.com/vuetifyjs/awesome-vuetify',
    },
  ])
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-icon size="50px" icon="vscode-icons-file-type-vue" class=""></v-icon>
        <v-icon class="" size="50px" icon="vscode-icons-file-type-vite"></v-icon>
        <v-icon class="" size="50px" icon="logos-vuetifyjs"></v-icon>
      </v-col>

      <v-col class="align-center d-flex flex-column mb-4">

        <v-img class=" my-3" contain src="https://docs.pinegrow.com/wp-content/themes/pg_doc2018/gfx/pg_logo_new.svg"
          width="500" />
        <h1 class="display-2 font-weight-bold mb-3 text-deep-orange-lighten-2">
          Welcome to Vue Designer
        </h1>

        <h4>Vite Preview</h4>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          What's next?
        </h2>

        <v-row justify="center">
          <a v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="subheading mx-3" target="_blank">
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          Important Links
        </h2>

        <v-row justify="center">
          <a v-for="(link, i) in importantLinks" :key="i" :href="link.href" class="subheading mx-3" target="_blank">
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>