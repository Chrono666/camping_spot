<template>
  <v-overlay absolute="true" :value="$store.getters.getOverlay">
    <v-row align="center" justify="center">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Security Password</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <span>Source</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              id="password"
              label="Security Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onLogin">OK</v-btn>
          <v-btn color="alert" @click="onChancel">CHANCEL</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-overlay>
</template>

<script>
export default {
  methods: {
    onChancel() {
      this.$store.dispatch('changeOverlay', false)
    },
  },
}
</script>
