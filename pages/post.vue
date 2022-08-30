<script setup>
const route = useRoute()
const { data: posts, pending, error } = useAsyncData('post', () => $fetch(`/wp-json/wp/v2/posts/?slug=${route.params.slug}&_embed`, { baseURL: 'https://lagiviral.id' }))

useMeta({
    title: 'Blog',
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },

    ],
})
</script>
<script>
export default {
    layout: 'blog',
}
</script>
<template>
    <section class="page-section" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-4">
                    <p v-if="pending">Fetching posts...</p>
                    <p v-else-if="error">Error while fetching posts</p>
                    <div v-else-if="posts">
                        <article class="col-md-12 mb-4" v-for="(post, index) in posts || [] " :key="index">
                            <div v-if="post">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="text-center p-4">
                                            <h1>{{  post.title.rendered  }}</h1>
                                            <span v-if="post._embedded['author']">Posted by <strong>{{
                                                     post._embedded['author'][0].name  }}</strong></span> / <span
                                                v-if="post.date">{{  post.date  }}</span>
                                        </div>
                                        <img class="img-fluid" v-if="post._embedded['wp:featuredmedia']"
                                            :src="post._embedded['wp:featuredmedia'][0].source_url" />
                                        <div class="post-content-wrapper py-4">
                                            <div v-html="post.content.rendered"></div>
                                        </div>

                                    </div>
                                    <div class="card-footer">
                                        <ul class="list-inline" v-if="post._embedded['wp:term']">
                                            <li class="list-inline-item"
                                                v-for="category in post._embedded['wp:term'][0]"
                                                v-bind:key="category.id">
                                                <span class="badge bg-secondary">
                                                    <nuxt-link :to="{ path: '/category/' + category.slug }">
                                                        {{  category.name  }}</nuxt-link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p v-else>Something went wrong</p>
                        </article>
                    </div>
                    <p v-else>Something went wrong</p>
                </div>
            </div>
        </div>
    </section>
</template>