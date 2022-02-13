<template>
    <Blog :filter = filter />
</template>

<script>
export default {
    layout : 'blog',
    scrollToTop: true,

    data() {
      return {
        title: 'Blog - Nuxt CMS Blog',
        filter : 'index'
      }
    },
    head() {
      return {
          title: 'Blog - Nuxt CMS Blog',
          meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt CMS Blog cooming soon'
            }
        ]
      }
    }
}

</script>
