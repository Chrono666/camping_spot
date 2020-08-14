<template>
  <v-container>
    <v-row
      v-for="n in 30"
      :key="n"
      align="center"
      justify="center"
      class="rows"
    >
      <v-col v-for="n in 10" :key="n" class="collum">{{ n }}</v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.rows {
  height: 80px;
}

.collum {
  border: solid 1px black;
  height: 80px;
}
</style>
