<template>
    <v-card class="post-item">
        <div class="d-flex flex-sm-row flex-column">
            <v-col class="pr-sm-0 pb-0 pb-sm-3" cols="12" sm="5" md="4">
                <v-img src="https://via.placeholder.com/400x400" max-height="250px"/>
            </v-col>
            <v-col class="pa-0" cols="12" sm="9" md="8">
                <router-link :to="'/posts/' + post._id">
                    <v-card-title class="pb-1">{{post.title}}</v-card-title>
                </router-link>
                
                <v-card-subtitle class="pt-0">
                    <v-avatar class="mr-2" size="40">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar> 
                    <a class="body-1" href="#">
                        {{post.author_id.name}}
                    </a>
                </v-card-subtitle>

                <v-card-text class="post-text body-1">{{post.intro}}</v-card-text>
            </v-col>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'PostItem',
    props: ['post']
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .post-item .post-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
</style>