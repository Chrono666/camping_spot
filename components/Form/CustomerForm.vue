<template>
  <v-card>
    <v-container>
      <form>
        <v-text-field
          v-model="customer.firstName"
          :class="{ 'is-invalid': submitted && $v.customer.firstName.$error }"
          :error-messages="firstNameErrors"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.lastName"
          :class="{ 'is-invalid': submitted && $v.customer.lastName.$error }"
          :error-messages="lastNameErrors"
          label="Last Name"
          required
        ></v-text-field>
        <vue-tel-input-vuetify
          v-model="customer.phone"
          :class="{ 'is-invalid': submitted && $v.customer.phone.$error }"
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
              v-model="customer.customerAge"
              label="Enter customer age"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="customer.customerAge"
            @input="menu = false"
          ></v-date-picker>
        </v-menu>
        <v-select
          v-model="customer.select"
          :items="items"
          :error-messages="selectErrors"
          label="Type of Identification"
          required
        ></v-select>
        <v-text-field
          v-if="customer.select === 'other'"
          v-model="customer.other"
          label="Type of identification"
          required
        ></v-text-field>
        <v-text-field
          v-if="customer.select != null"
          v-model="customer.id"
          :class="{ 'is-invalid': submitted && $v.customer.id.$error }"
          :error-messages="idErrors"
          label="Identification Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.email"
          :class="{ 'is-invalid': submitted && $v.customer.email.$error }"
          :error-messages="emailErrors"
          label="E-mail"
          required
        ></v-text-field>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="3">
            <h3>Booking Period</h3>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="5">
            <v-date-picker
              v-model="customer.startDate"
              elevation="1"
            ></v-date-picker>
          </v-col>
          <v-col cols="12" md="5">
            <v-date-picker
              v-model="customer.endDate"
              elevation="1"
            ></v-date-picker>
          </v-col>
        </v-row>
        <br />
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
    customer: {
      firstName: { required },
      lastName: { required },
      id: { required },
      phone: { required },
      email: { email },
      select: { required },
    },
  },
  components: {
    VueTelInputVuetify,
  },
  data() {
    return {
      customer: {
        firstName: '',
        lastName: '',
        id: '',
        email: '',
        other: '',
        phone: '',
        select: null,
        customerAge: new Date().toISOString().substr(0, 10),
        startDate: new Date().toISOString().substr(0, 10),
        endDate: new Date().toISOString().substr(0, 10),
      },
      items: ['Driving Licence', 'Passport', 'Personal ID', 'other'],
      checkbox: false,
      submitted: false,
      submitStatus: null,
      menu: false,
    }
  },

  computed: {
    selectErrors() {
      const errors = []
      if (!this.$v.customer.select.$dirty) return errors
      !this.$v.customer.select.required && errors.push('Item is required')
      return errors
    },
    firstNameErrors() {
      const errors = []
      if (!this.$v.customer.firstName.$dirty) return errors
      !this.$v.customer.firstName.required &&
        errors.push('First name is required.')
      return errors
    },
    lastNameErrors() {
      const errors = []
      if (!this.$v.customer.lastName.$dirty) return errors
      !this.$v.customer.lastName.required &&
        errors.push('Last name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.customer.email.$dirty) return errors
      !this.$v.customer.email && errors.push('Must be valid e-mail')
      return errors
    },
    idErrors() {
      const errors = []
      if (!this.$v.customer.id.$dirty) return errors
      !this.$v.customer.id.required && errors.push('ID is required.')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.customer.phone.$dirty) return errors
      !this.$v.customer.phone.required &&
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
        console.log('error')
      } else {
        this.submitStatus = 'OK'
        console.log('submitted')
        console.log(this.customer)
      }
    },
    clear() {
      this.$v.$reset()
      this.customer.firstName = ''
      this.customer.lastName = ''
      this.customer.email = ''
      this.customer.id = ''
      this.customer.other = ''
      this.customer.select = null
      this.submitted = false
      this.menu = false
      this.customer.phone = ''
      this.customer.customerAge = new Date().toISOString().substr(0, 10)
      this.customer.startDate = new Date().toISOString().substr(0, 10)
      this.customer.endDate = new Date().toISOString().substr(0, 10)
    },
  },
}
</script>
