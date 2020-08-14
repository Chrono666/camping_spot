<template>
  <v-container style="min-width: 400px;">
    <v-row justify="center" align="center">
      <v-card v-for="(user, index) in users" :key="index">
        <v-card-title>Admin {{ index + 1 }}</v-card-title>
        <v-card-text>
          Firstname: {{ user.data.firstName }}
          <br />
          Lastname: {{ user.data.firstName }}
          <br />
          E-Mail: {{ user.data.email }}
          <br />
          Password: {{ user.data.password }}
        </v-card-text>
      </v-card>
    </v-row>
    <br />
    <v-row justify="center" align="center">
      <v-btn @click="$store.dispatch('changeOverlay', true)">
        Change Security Password
      </v-btn>
    </v-row>
    <ChangeSecurityAlert />
  </v-container>
</template>

<script>
import ChangeSecurityAlert from '@/components/Alert/ChangeSecurityAlert.vue'
export default {
  components: {
    ChangeSecurityAlert,
  },
  data() {
    return {
      securityCode: '',
      users: [
        { data: { firstName: 'aaaa', lastName: 'cccc', email: 'asdfsa' } },
        { data: { firstName: 'bbbbbbbbb' } },
      ],
    }
  },
  methods: {
    changeSecurityCode() {
      this.$store.dispatch('changeSecurityCode', this.securityCode)
    },
  },
}
</script>
