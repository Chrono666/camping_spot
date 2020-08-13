<template>
  <v-app>
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Navigation/Footer.vue'
export default {
  components: {
    Footer,
  },
}
</script>
