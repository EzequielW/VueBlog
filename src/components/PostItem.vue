<template>
    <v-card class="post-item">
        <div class="d-flex flex-no-wrap">
            <v-img src="https://via.placeholder.com/348x248" aspect-ratio="1.4" height="250px" max-width="400px"/>
            <div>
                <router-link :to="'/posts/' + post._id">
                    <v-card-title>{{post.title}}</v-card-title>
                </router-link>
                
                <v-card-subtitle class="pt-0">
                    <a href="#">
                        <v-avatar class="mr-2">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-avatar> 
                        {{post.author_id.name}}
                    </a>
                </v-card-subtitle>

                <v-card-text class="post-text">{{post.intro}}</v-card-text>
            </div>
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

    .post-item .post-wrap .post-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
</style>