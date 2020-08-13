<template>
  <v-container>
    <br />
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h1 class="text-center">Customer Menu</h1>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col>
        <v-row align="center" justify="center">
          <v-btn outlined width="200px" @click="onLoadCreation('New Customer')">
            New Customer
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-btn
            outlined
            width="200px"
            class="lineChart"
            @click="onLoadCreation('Edit Customer')"
            >Edit Customer</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-btn
            outlined
            width="200px"
            class="lineChart"
            @click="$router.push('/map')"
            >Camping Map</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      context: '',
    }
  },
  methods: {
    onLoadCreation(context) {
      this.$router.push('/customer/' + context)
    },
  },
}
</script>
