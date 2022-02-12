<script setup>
    const { data : sidebarPosts, pending, error } = useAsyncData('sidebarPosts', () => $fetch(`/wp-json/wp/v2/posts?_embed`, { baseURL : 'https://www.kentos.org' }))
</script>
<template>
    <div>
        <div class="page-section">
            <div class="card">
                <div class="card-body">
                    <h4 class="mb-3">Latest Post</h4>
                    <p v-if="pending">Fetching posts...</p>
                    <p v-else-if="error">Error while fetching posts</p>
                    <div v-else-if="sidebarPosts">
                        <div class="row" >
                            <article class="col-md-12 mb-4" v-for="(sidebarPost, index) in sidebarPosts" :key="index">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <NuxtLink :to="{ path: '/post/' + sidebarPost.id }" class="post-thumbnail">
                                                <img class="img-fluid" v-if="sidebarPost._embedded['wp:featuredmedia']" :src="sidebarPost._embedded['wp:featuredmedia'][0].source_url" />
                                            </NuxtLink>
                                        </div>
                                        <div class="col-md-8">
                                            <NuxtLink :to="{ path: '/post/' + sidebarPost.id }"><h6>{{ sidebarPost.title.rendered }}</h6></NuxtLink>
                                            <div class="mt-2">
                                                <span v-if="sidebarPost._embedded['author']">Posted by <strong>{{ sidebarPost._embedded['author'][0].name }}</strong></span> / <span v-if="sidebarPost.date">{{ sidebarPost.date }}</span>
                                            </div>
                                        </div>
                                    </div>
                            </article>
                        </div>
                    </div>
                    <p v-else>Something went wrong</p>
                </div>
            </div>
        </div>
    </div>
</template>