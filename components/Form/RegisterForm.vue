<template>
  <v-card>
    <v-container>
      <SecurityAlert />
      <form>
        <v-text-field
          v-model="user.firstName"
          :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
          :error-messages="firstNameErrors"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.lastName"
          :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
          :error-messages="lastNameErrors"
          label="Last Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.mail"
          :class="{ 'is-invalid': submitted && $v.user.mail.$error }"
          :error-messages="emailErrors"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :class="{ 'is-invalid': submitted && $v.user.password.$error }"
          :error-messages="passwordErrors"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="user.confirmPassword"
          :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
          :error-messages="confirmPasswordErrors"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          name="input-10-1"
          label="Confirm Password"
          counter
          @click:append="show2 = !show2"
        ></v-text-field>
        <v-btn large color="success" class="mr-4" @click="onSubmit"
          >submit</v-btn
        >
        <v-btn small color="error" @click="clear">clear</v-btn>
      </form>
    </v-container>
  </v-card>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import SecurityAlert from '~/components/SecurityAlert/SecurityAlert'

export default {
  components: {
    SecurityAlert,
  },
  validations: {
    user: {
      firstName: { required, minLength: minLength(2) },
      lastName: { required, minLength: minLength(2) },
      mail: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: {
        required,
        minLength: minLength(6),
        sameAsPassword: sameAs('password'),
      },
    },
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        mail: '',
        password: '',
        confirmPassword: '',
      },
      securityCode: '',
      show1: false,
      show2: false,
      show3: false,
      status: '',
      statusMessage: '',
      error: false,
      submitted: false,
    }
  },
  computed: {
    firstNameErrors() {
      const errors = []
      if (!this.$v.user.firstName.$dirty) return errors
      !this.$v.user.firstName.minLength &&
        errors.push('Name must be at least 2 characters long')
      !this.$v.user.firstName.required && errors.push('First name is required.')
      return errors
    },
    lastNameErrors() {
      const errors = []
      if (!this.$v.user.lastName.$dirty) return errors
      !this.$v.user.lastName.minLength &&
        errors.push('Name must be at least 2 characters long')
      !this.$v.user.lastName.required && errors.push('Last name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.user.mail.$dirty) return errors
      !this.$v.user.mail.email && errors.push('Must be valid e-mail')
      !this.$v.user.mail.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.user.password.$dirty) return errors
      !this.$v.user.password.minLength &&
        errors.push('Password must be at least 6 characters long')
      !this.$v.user.password.required && errors.push('Password is required')
      return errors
    },
    confirmPasswordErrors() {
      const errors = []
      if (!this.$v.user.confirmPassword.$dirty) return errors
      !this.$v.user.confirmPassword.minLength &&
        errors.push('Confirm password must be at least 6 characters long')
      !this.$v.user.confirmPassword.required &&
        errors.push('Confirm password is required')
      !this.$v.user.confirmPassword.sameAsPassword &&
        errors.push('Passwords have to match')
      return errors
    },
  },
  methods: {
    clear() {
      this.$v.$reset()
      this.user.firstName = ''
      this.user.lastName = ''
      this.user.mail = ''
      this.user.password = ''
      this.user.confirmPassword = ''
      this.securityCode = ''
      this.submitStatus = null
      this.error = false
      this.statusMessage = ''
      this.submitted = false
    },
    onSubmit(evt) {
      evt.preventDefault()
      this.submitted = true
      this.$store.dispatch('changeOverlay', true)
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('not ok')
      } else {
        console.log('OK')
        this.overlay = true
      }
    },
  },
}
</script>
