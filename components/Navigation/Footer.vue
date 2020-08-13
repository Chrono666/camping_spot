<template>
  <v-footer fixed>
    <v-row dense>
      <v-col cols="1">
        <nuxt-link to="/">Logout</nuxt-link>
      </v-col>
      <v-col cols="11">
        <v-row dense align="center" justify="center">
          <v-icon>copyright</v-icon> {{ new Date().getFullYear() }} —
          <strong>MReiber</strong>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
