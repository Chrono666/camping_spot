<template>
  <div>
    <v-app-bar dense light>
      <v-toolbar-title>CAMPING SPOT</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="onLogout">
        <v-icon>block</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch('changeLogin')
      this.$router.push('/')
    },
  },
}
</script>
