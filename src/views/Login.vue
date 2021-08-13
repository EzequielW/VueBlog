<template>
    <v-container fill-height fluid>
        <v-row class="my-5" align="start" justify="center">
            <v-col cols="11" sm="7" md="5">
                <v-alert type="error" v-if="errorMessage" transition="slide-y-transition">{{errorMessage}}</v-alert>
                <v-card class="pa-10 rounded-lg" elevation="15">
                    <h1 class="display-1 mt-3 mb-10">Sign In</h1>
                    <v-form ref="form" class="px-8 mb-6">
                        <v-text-field v-model="email" :rules="emailRules" label="Email" required/>
                        <v-text-field v-model="password" :rules="passwordRules" :type="'password'" label="Password" required/>
                        
                        <p class="body-2 mt-2 mb-4"><a href="">Forgot password?</a></p>

                        <v-btn color="indigo lighten-1 white--text" block @click="login">Submit</v-btn>           
                    </v-form>
                    <p class="body-2 text-center">Not a member yet? <a href="./register">Sign up</a></p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
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
        async login(){
            try{
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.auth_token)
                this.$router.push('/')
            } catch(err){
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

    #register-link {
        text-align: center;
    }
</style>