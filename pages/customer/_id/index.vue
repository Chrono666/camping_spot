<template>
  <v-container style="max-width: 800px;">
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h1>{{ $route.params.id }}</h1>
        </v-row>
      </v-col>
    </v-row>
    <br />
    <v-container>
      <Form />
    </v-container>
  </v-container>
</template>

<script>
import Form from '~/components/Form/Form'
export default {
  components: { Form },
}
</script>
