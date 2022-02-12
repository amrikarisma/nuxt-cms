<script setup>
    const route = useRoute()
    const { data : post, pending, error } = useAsyncData('post', () => $fetch(`https://karismaid.com/wp-json/wp/v2/posts/${route.params.slug}?_embed`))

    useMeta({
        title : 'Blog' ,
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            
        ],
    })
</script>

<template>
    <section class="page-section" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-4">
                    <p v-if="pending">Fetching posts...</p>
                    <p v-else-if="error">Error while fetching posts</p>
                    <div v-else>
                        <div class="card" v-if="post">
                            <div class="card-body">
                                <div class="text-center p-4">
                                    <NuxtLink :to="{ path: '/post/' + post.slug }"><h2>{{ post.title.rendered }}</h2></NuxtLink>
                                        Post by / Posted on <small><i>{{post.date}}</i></small>
                                </div>
                                <img class="img-fluid" v-if="post._embedded['wp:featuredmedia']" :src="post._embedded['wp:featuredmedia'][0].source_url" />
                                <div class="py-4">
                                    <div v-html="post.content.rendered"></div>
                                </div>
                                
                                <!-- {{ $route.params.slug }} -->
                            </div>
                            <div class="card-footer">
                                <ul class="list-inline"  v-if="post._embedded['wp:term']">
                                    <li class="list-inline-item" v-for="category in post._embedded['wp:term']" v-bind:key="category.id">
                                        <span class="badge bg-secondary">
                                            <nuxt-link :to="{ path: '/category/' + category.slug }">{{category.name}}</nuxt-link>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>