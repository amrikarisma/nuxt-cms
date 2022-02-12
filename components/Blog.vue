<script setup>
    const { data : posts, pending, error } = useAsyncData('posts', () => $fetch(`https://karismaid.com/wp-json/wp/v2/posts?_embed`))

</script>

<template>
    <section class="page-section" id="blog">
        <div class="container">
            <p v-if="pending">Fetching posts...</p>
            <p v-else-if="error">Error while fetching posts</p>
            <div v-else>
                <div class="row" >
                    <div class="col-md-4 mb-4" v-for="(post, index) in posts" :key="index">
                        <div class="card">
                            <NuxtLink :to="{ path: '/post/' + post.id }">
                                <img class="img-fluid" v-if="post._embedded['wp:featuredmedia']" :src="post._embedded['wp:featuredmedia'][0].source_url" />
                            </NuxtLink>
                            <div class="card-body">
                                <NuxtLink :to="{ path: '/post/' + post.id }"><h2>{{ post.title.rendered }}</h2></NuxtLink>
                                <div v-html="post.excerpt.rendered"></div>
                                <small><i>{{post.date }}</i></small>
                                <!-- {{ $route.params.slug }} -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>