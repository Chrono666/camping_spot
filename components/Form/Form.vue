<template>
  <form>
    <v-text-field
      v-model="firstName"
      :class="{ 'is-invalid': submitted && $v.firstName.$error }"
      :error-messages="firstNameErrors"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="lastName"
      :class="{ 'is-invalid': submitted && $v.lastName.$error }"
      :error-messages="lastNameErrors"
      label="Last Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :class="{ 'is-invalid': submitted && $v.email.$error }"
      :error-messages="emailErrors"
      label="E-mail"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Type of Identification"
      required
    ></v-select>
    <v-text-field
      v-if="select != null"
      v-model="id"
      :class="{ 'is-invalid': submitted && $v.id.$error }"
      :error-messages="idErrors"
      label="Identification Number"
      required
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn class="mr-4" @click.prevent="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  validations: {
    firstName: { required },
    lastName: { required },
    id: { required },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      },
    },
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      id: '',
      email: '',
      select: null,
      items: ['Driving Licence', 'Passport', 'Personal ID', 'other'],
      checkbox: false,
      submitted: false,
    }
  },

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    firstNameErrors() {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.minLength &&
        errors.push('Name must be at least 2 characters long')
      !this.$v.firstName.required && errors.push('First name is required.')
      return errors
    },
    lastNameErrors() {
      const errors = []
      if (!this.$v.lastName.$dirty) return errors
      !this.$v.lastName.minLength &&
        errors.push('Name must be at least 2 characters long')
      !this.$v.lastName.required && errors.push('Last name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    idErrors() {
      const errors = []
      if (!this.$v.id.$dirty) return errors
      !this.$v.id.required && errors.push('ID is required.')
      return errors
    },
  },

  methods: {
    submit() {
      this.submitted = true
      console.log(this.select)
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'OK'
        console.log('submit')
      }
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>
