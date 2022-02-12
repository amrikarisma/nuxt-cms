<script setup>
    const route = useRoute()
    let currentPage = route.params.page;
    const { data : posts, pending, error } = useAsyncData('posts', () => $fetch(`/wp-json/wp/v2/posts?page=${currentPage || 1 }&_embed`, { baseURL : 'https://www.kentos.org' }))
</script>
<template>
    <section class="page-section page-blog" id="blog">
        <p v-if="pending">Fetching posts...</p>
        <p v-else-if="error">Error while fetching posts</p>
        <div v-else-if="posts">
            <div v-if="posts.length > 0">
                <div class="row" >
                    <article class="col-md-12 mb-4" v-for="(post, index) in posts || [] " :key="index">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-4">
                                    <NuxtLink :to="{ path: '/post/' + post.slug }" class="post-thumbnail">
                                        <img class="img-fluid" v-if="post._embedded['wp:featuredmedia']" :src="post._embedded['wp:featuredmedia'][0].source_url" />
                                    </NuxtLink>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="mb-2">
                                            <span v-if="post._embedded['author']">Posted by <strong>{{ post._embedded['author'][0].name }}</strong></span> / <span v-if="post.date">{{ post.date }}</span>
                                        </div>
                                        <NuxtLink :to="{ path: '/post/' + post.slug }"><h2>{{ post.title.rendered }}</h2></NuxtLink>
                                        <div v-html="post.excerpt.rendered"></div>
                                        <div>
                                            <NuxtLink :to="{ path: '/post/' + post.slug }">Read More</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="row">
                    <div class="col">
                        <NuxtLink :to="{ path: '/blog/' + (currentPage > 1 ? parseInt(currentPage)-1 : 1) }" class="btn btn-primary">Previous</NuxtLink>
                    </div>
                    <div class="col">
                        <NuxtLink :to="{ path: '/blog/' + (currentPage > 0 ? parseInt(currentPage)+1 : 1) }" class="btn btn-primary">Next</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <p v-else>Something went wrong</p>
    </section>
</template>