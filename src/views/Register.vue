<template>
    <v-container fill-height fluid>
        <v-row class="my-5" align="start" justify="center">
            <v-col cols="11" sm="7" md="5">
                <v-alert type="error" v-if="errorMessage">{{errorMessage}}</v-alert>
                <v-card class="pa-10 rounded-lg" elevation="15">
                    <h1 class="display-1 mt-3 mb-10">Sign Up</h1>
                    <v-form ref="form" class="px-8 mb-6">
                        <v-text-field v-model="username" :rules="usernameRules" label="Username" required/>
                        <v-text-field v-model="email" :rules="emailRules" label="Email" required/>
                        <v-text-field v-model="password" :rules="passwordRules" :type="'password'" label="Password" required/>

                        <v-checkbox class="my-2" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree with our terms?" required/>

                        <v-btn color="indigo darken-3 white--text" block @click="register">Submit</v-btn>
                    </v-form>
                    <p class="body-2 text-center">Already have an account? <a href="./login">Sign in</a></p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
    name: 'Register',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            usernameRules: [
                v => !!v || 'Username is required'
            ],
            emailRules: [
                v => !!v || 'Email is required'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password must be at least 8 characters long'
            ],
            errorMessage: null
        }
    },
    methods: {
        async register(){
            try{
                const response = await AuthenticationService.register({
                    name: this.username,
                    email: this.email,
                    password: this.password
                })
                console.log(response.data)
                this.$router.push('/login')
            } catch(err) {
                this.errorMessage = err.response.data
            }
            
        }
    }
}
</script>

<style scoped>
    h1 {
        text-align:center;
    }

    #login-link {
        text-align: center;
    }
</style>