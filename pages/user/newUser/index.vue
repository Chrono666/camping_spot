<template>
  <v-container style="max-width: 800px;">
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h1>Create New User</h1>
        </v-row>
      </v-col>
    </v-row>
    <br />
    <v-container>
      <RegisterForm />
    </v-container>
  </v-container>
</template>

<script>
import RegisterForm from '@/components/Form/RegisterForm'
export default {
  components: { RegisterForm },
}
</script>
