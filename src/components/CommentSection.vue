<template>
    <div>
        <h2>{{quantity}} comments</h2>
        <v-card class="px-6 pt-6 pb-3 mt-3">
            <v-card-subtitle class="pa-0">
                <v-avatar class="mr-2" size="50">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar> 
                <a class="body-1" href="#">
                    Testname
                </a>
            </v-card-subtitle>
            <v-form class="text-right">
                <v-textarea label="Leave a message" rows="2" v-model="message" @click="showSubmit = true" auto-grow required></v-textarea>
                <transition name="fade">
                    <div v-if="showSubmit">
                        <v-btn class="text-end" text @click="showSubmit = false, message = ''">cancel</v-btn>
                        <v-btn class="text-end ml-2 white--text" color="blue-grey" @click="postComment">submit</v-btn>
                    </div>
                </transition>
            </v-form>
        </v-card>
        <div v-for="comment in comments" :key="comment._id">
            <CommentItem :comment="comment"/>
        </div>   
    </div>
</template>

<script>
import CommentItem from './CommentItem'
import Api from '../services/Api'

export default {
    name:'CommentSection',
    props: ['comments'],
    data() {
        return {
            quantity: this.$props['comments'].length,
            message: "",
            showSubmit: false
        }
    },
    components: {
        CommentItem
    },
    methods: {
        async postComment() {
            const response = await Api().post('posts/' + this.$route.params.id + '/comments', {
                author: this.$store.state.userId,
                message: this.message
            }, 
            {
                headers: {
                    'auth-token': this.$store.state.token
                }
            })
            console.log(response)
        }
    }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>