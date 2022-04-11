<template>
    <div>
        <h2>{{comments.length}} comments</h2>
        <v-card class="px-6 pt-6 pb-3 mt-3" elevation="0">
            <v-card-subtitle class="pa-0 pb-4">
                <!-- <v-avatar class="mr-2" size="50">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>  -->
                <a class="text-h6 font-weight-bold" href="#">
                    {{ this.$store.state.username }}
                </a>
            </v-card-subtitle>
            <v-form class="text-right" v-model="valid" ref="form" lazy-validation>
                <v-textarea label="Leave a message" rows="2" v-model="message" :rules="messageRules" @click="showSubmit = true" auto-grow required counter="400"></v-textarea>
                <transition name="fade">
                    <div v-if="showSubmit">
                        <v-btn class="text-end" text @click="showSubmit = false, message = '', this.$refs.form.resetValidation(), valid = true">cancel</v-btn>
                        <v-btn class="text-end ml-2" color="blue-grey" @click="postComment"><p class="text-white">submit</p></v-btn>
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
            valid: true,
            message: "",
            messageRules: [
                v => !!v || 'Comment is required',
                v => v.length >= 35 || 'Comments must be atleast 35 characters long',
                v => v.length < 400 || 'Comments cant be longer than 400 characters'
            ],
            showSubmit: false
        }
    },
    components: {
        CommentItem
    },
    mounted() {
        this.quantity = this.$props['comments'].length;
    },
    methods: {
        async postComment() {
            const res = await this.$refs.form.validate();
            if(res.valid){
                Api().post('posts/' + this.$route.params.id + '/comments', {
                    author: this.$store.state.userId,
                    message: this.message
                }, 
                {
                    headers: {
                        'auth-token': this.$store.state.token
                    }
                }).then(async () => {
                    this.$props['comments'].unshift({ 
                        _id: new Date().getMilliseconds(), 
                        author: this.$store.state.userId, 
                        authorName: this.$store.state.username, 
                        message: this.message, 
                        date: new Date()
                    });
                    await this.$refs.form.reset();
                    this.$nextTick(() => {
                        this.$refs.form.resetValidation();
                    });
                }).catch(err => {
                    console.error(err);
                })
            }
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