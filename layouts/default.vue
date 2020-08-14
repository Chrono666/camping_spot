<template>
  <v-app>
    <Header />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Navigation/Footer.vue'
import Header from '~/components/Navigation/Header.vue'
export default {
  components: {
    Footer,
    Header,
  },
}
</script>
