<template>
    <v-card class="comment-item">
        <v-card-title>
            <v-avatar class="comment-avatar">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar> 
            <a href="#">Username</a>
        </v-card-title>

        <v-card-text class="comment-content">
            Multi-Target Reload for XAML Hot Reload – This is amazing!!!
            Thank you guys, this is very helpful to all developers.
            In many cases, we need to validate many layouts on different platforms at the same time, the gain in productivity will increase a lot! 
            God, Alla, Buddha Bless you 😀
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'CommentItem',
    props: ['comment']
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