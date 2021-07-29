<template>
    <v-card elevation="0">
        <div class="post-wrap">
            <v-card-subtitle>{{date}}</v-card-subtitle>
            <v-card-title class="justify-center single-post-title">{{title}}</v-card-title>
            <v-card-text>
                <div class="post-content" v-html="content"></div>
            </v-card-text>
        </div>
    </v-card>
</template>

<script>
import Api from '../services/Api'

export default {
    name: 'PostSingle',
    props: ['post_id'],
    data() {
        return {
            title: '',
            content: '',
            date: ''
        }
    },
    created() {
        Api().get('/posts/' + this.post_id)
            .then(res => {
                this.title = res.data.title
                this.content = res.data.content
                this.date = res.data.date
                console.log(res)
            })
            .catch(err => console.log(err))
    }
}
</script>

<style scoped lang="scss">
    .single-post-title{
        margin-bottom: 4%;
    }

    .post-wrap{
        padding: 2% 15% 2% 15%;
    }

    .post-content{
        &::v-deep img {
            max-width: 100%;
            height: auto;
        }
    }
</style>