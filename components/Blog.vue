<script setup>
const { data } = await useAsyncData('count', () => $fetch('https://api.nuxtjs.dev/mountains'))
</script>

<template>
    <section class="page-section" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4" v-for="(post, index) in data" :key="index">
                    <NuxtLink :to="post.slug">
                        <div class="card">
                            <div v-if="post.image">
                                <img class="img-fluid" v-bind:src="post.image" />
                            </div>
                            <div class="card-body">
                                <h2>{{ post.title }}</h2>
                                <p>{{post.description}}</p>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>