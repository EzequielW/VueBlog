<template>
    <v-card class="mt-4 pa-5">
        <div class="d-flex justify-space-between">
            <v-card-subtitle class="d-flex pa-0 pb-4 align-self-center">
                <v-avatar class="mr-3" size="50">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar> 
                <a class="body-1 ma-0 align-self-center" href="#">
                    This is a very long username
                </a>
            </v-card-subtitle>
            <span class="body-2 align-self-center">{{comment.date}}</span>
        </div>

        <v-card-text class="text--primary body-1">
            {{comment.message}}
        </v-card-text>
    </v-card>
</template>

<script>
import DateFormat from '../util/DateFormat'

export default {
    name: 'CommentItem',
    props: ['comment'],
    created() {
        this.$props['comment'].date = DateFormat(this.$props['comment'].date)
    }
}
</script>

<style scoped>
    .comment-item {
        margin-top: 2%;
        margin-bottom: 2%;
    }

    .comment-item a{
        text-decoration: none;
        margin-left: 1%;
    }
</style>