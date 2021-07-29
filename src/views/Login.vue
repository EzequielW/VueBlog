<template>
    <v-row align="start" justify="center">
        <v-col cols="5">
            <v-card id="login-wrap" elevation="15">
                <v-form ref="form" class="ma-3 pa-6">
                    <h1 class="display-1">Sign In</h1>
                    <v-text-field v-model="email" :rules="emailRules" label="Email" required/>

                    <v-text-field v-model="password" :rules="passwordRules" :type="'password'" label="Password" required/>

                    <a href=""><p text-align="end" class="caption">Forgot password?</p></a>

                    <v-btn color="indigo lighten-1 white--text" class="mr-4" block @click="login">Submit</v-btn>

                    <a href="./register"><p id="register-link" class="body-2">Did you not Sign Up yet?</p></a>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
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
            ]
        }
    },
    methods: {
        async login(){
            try{
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
                console.log(response.data)
                this.$store.dispatch('setToken', response.data.auth_token)
                this.$router.push('/')
            } catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
    h1 {
        text-align:center;
        margin-bottom: 15%;
    }

    p {
        text-align: end;
    }

    #register-link {
        text-align: center;
        margin-top: 30%
    }

    #login-wrap {
        border-radius: 1%;
        padding: 5%;
    }
</style>