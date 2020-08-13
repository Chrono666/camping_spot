<template>
  <div>
    <v-app-bar dense light>
      <v-toolbar-title @click="$router.push('/customer')"
        >CAMPING SPOT</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push('/customer')">
        <v-icon>home</v-icon>
      </v-btn>

      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="item.options"
            @click="selectedAction(index)"
          >
            <v-list-item-title>{{ item.options }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>-->
      <v-btn icon @click="$router.push('/map')">
        <v-icon>map</v-icon>
      </v-btn>
      <v-btn icon @click="onLogout">
        <v-icon>block</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { options: 'Customer Menu' },
        { options: 'Camping Map' },
        { options: 'Logout' },
      ],
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('changeLogin')
      this.$router.push('/')
    },
    selectedAction(index) {
      if (index === 0) {
        this.$router.push('/customer')
      }
      if (index === 1) {
        this.$router.push('/map')
      }
      if (index === 2) {
        this.onLogout()
      }
    },
  },
}
</script>
