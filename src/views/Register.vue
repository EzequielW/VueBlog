<template>
    <v-container fill-height fluid>
        <v-row align="start" justify="center">
            <v-col cols="5">
                <v-card id="register-wrap" elevation="15">
                    <v-form ref="form" class="ma-3 pa-6">
                        <h1 class="display-1">Sign Up</h1>
                        <v-text-field v-model="username" :rules="usernameRules" label="Username" required/>

                        <v-text-field v-model="email" :rules="emailRules" label="Email" required/>

                        <v-text-field v-model="password" :rules="passwordRules" :type="'password'" label="Password" required/>

                        <v-checkbox :rules="[v => !!v || 'You must agree to continue!']" label="You agree with our terms of service" required/>

                        <v-btn color="indigo darken-3 white--text" class="mr-4" block @click="register">Submit</v-btn>

                        <a href="./login"><p id="login-link" class="body-2">Already have an account? Sign in</p></a>
                    </v-form>
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
            ]
        }
    },
    methods: {
        async register(){
            const response = await AuthenticationService.register({
                name: this.username,
                email: this.email,
                password: this.password
            })
            console.log(response.data)
            this.$router.push('/login')
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

    #login-link {
        text-align: center;
        margin-top: 30%
    }

    #register-wrap {
        border-radius: 1%;
        padding: 5%;
    }
</style>