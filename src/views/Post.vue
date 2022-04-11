<template>
    <v-container fluid class="pt-10">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <PostSingle :post="post"/>
                <CommentSection :comments="comments" class="pt-5"/>
            </v-col>
            <v-col cols="12" md="4">
                <SidePanel />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PostSingle from '../components/PostSingle'
import CommentSection from '../components/CommentSection'
import Api from '../services/Api'
import DateFormat from '../util/DateFormat'
import SidePanel from '../components/SidePanel'

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
        CommentSection,
        SidePanel
    },
    created() {
        Api().get('/posts/' + this.$route.params.id)
            .then(res => {
                this.post = {
                    title: res.data.title,
                    content: res.data.content,
                    date: DateFormat(res.data.date),
                    imgPreview: res.data.imgPreview
                }
                this.comments = res.data.comments
            })
            .catch(err => console.log(err))
    }
}
</script>

<style scoped>
    .v-container{
        background-color: transparent;
        padding-left: 15em;
        padding-right: 15em;
    }
</style>