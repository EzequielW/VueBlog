<template>
    <v-card class="rounded-sm my-4 py-5" elevation="2">
        <h1 class="justify-center text-center single-post-title mb-0">{{post.title}}</h1>
        <v-card-subtitle class="text-center pa-0">
            <v-card-subtitle>
                <a class="body-1 ma-0" href="#">
                    Michael
                </a>
            </v-card-subtitle>
            <v-avatar size="50">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar> 
        </v-card-subtitle>
        
        <v-card-subtitle class="text-center">{{post.date}}</v-card-subtitle>
        <v-card-text>
            <div class="post-content text--primary" v-html="post.content"></div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'PostSingle',
    props: ['post']
}
</script>

<style scoped lang="scss">
    .single-post-title{
        margin-bottom: 4%;
    }

    .v-card{
        padding-left: 10rem;
        padding-right: 10rem;
    }

    .post-content{
        &::v-deep img {
            max-width: 100%;
            height: auto;
        }
    }
</style>