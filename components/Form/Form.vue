<template>
  <v-card>
    <v-container>
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
        <vue-tel-input-vuetify
          v-model="phone"
          :class="{ 'is-invalid': submitted && $v.phone.$error }"
          :error-messages="phoneErrors"
        />
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Enter customer age"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
        </v-menu>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Type of Identification"
          required
        ></v-select>
        <v-text-field
          v-if="select === 'other'"
          v-model="other"
          :class="{ 'is-invalid': submitted && $v.other.$error }"
          :error-messages="otherErrors"
          label="Type of identification"
          required
        ></v-text-field>
        <v-text-field
          v-if="select != null"
          v-model="id"
          :class="{ 'is-invalid': submitted && $v.id.$error }"
          :error-messages="idErrors"
          label="Identification Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :class="{ 'is-invalid': submitted && $v.email.$error }"
          :error-messages="emailErrors"
          label="E-mail"
          required
        ></v-text-field>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="3">
            Booking Period
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="5">
            <v-date-picker v-model="date"></v-date-picker>
          </v-col>
          <v-col cols="12" md="5">
            <v-date-picker v-model="date"></v-date-picker>
          </v-col>
        </v-row>
        <v-btn class="mr-4" @click.prevent="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-container>
  </v-card>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
// https://vuejsexamples.com/international-telephone-input-with-vuetify/
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue'

export default {
  validations: {
    firstName: { required },
    lastName: { required },
    id: { required },
    other: { required },
    phone: { required },
    email: { email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      },
    },
  },
  components: {
    VueTelInputVuetify,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      id: '',
      email: '',
      other: '',
      select: null,
      items: ['Driving Licence', 'Passport', 'Personal ID', 'other'],
      checkbox: false,
      submitted: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      phone: '',
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
      return errors
    },
    idErrors() {
      const errors = []
      if (!this.$v.id.$dirty) return errors
      !this.$v.id.required && errors.push('ID is required.')
      return errors
    },
    otherErrors() {
      const errors = []
      if (!this.$v.other.$dirty) return errors
      !this.$v.other.required &&
        errors.push('Some type of Identification is required')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required &&
        errors.push('Customer phone number is required')
      return errors
    },
  },

  methods: {
    submit() {
      this.submitted = true
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
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.id = ''
      this.other = ''
      this.select = null
      this.submitted = false
      this.menu = false
      this.phone = ''
      this.date = new Date().toISOString().substr(0, 10)
    },
  },
}
</script>
