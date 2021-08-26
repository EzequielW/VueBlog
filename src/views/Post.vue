<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="10">
            <PostSingle :post="post"/>
            <CommentSection :comments="comments"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PostSingle from '../components/PostSingle'
import CommentSection from '../components/CommentSection'
import Api from '../services/Api'
import DateFormat from '../util/DateFormat'

export default {
    name: 'Post',
    data() {
        return {
            comments: '',
            post: ''
        }
    },
    components: {
        PostSingle,
        CommentSection
    },
    created() {
        Api().get('/posts/' + this.$route.params.id)
            .then(res => {

                this.post = {
                    title: res.data.title,
                    content: res.data.content,
                    date: DateFormat(res.data.date)
                }
                this.comments = res.data.comments
            })
            .catch(err => console.log(err))
    }
}
</script>