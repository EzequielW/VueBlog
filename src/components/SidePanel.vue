<template>
    <div>    
        <v-card elevation="0" class="rounded-0" color="#fff">
            <v-card-title class="headline">Related Blogs</v-card-title>

            <v-card-text>
                <p>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                </p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'SidePanel'
}
</script>

<style scoped>
    a {
        text-decoration: none;
        display: block;
    }
</style>