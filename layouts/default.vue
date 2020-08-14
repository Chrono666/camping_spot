<template>
  <v-app>
    <Header id="head" />
    <v-main id="main">
      <Nuxt />
    </v-main>
    <Footer id="footer" />
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

<style scoped>
#head {
  margin-top: 70px;
  display: block;
}
#main {
  overflow: auto;
  height: 100%;
}
</style>
