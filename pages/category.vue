<template>
    <Category :filter = filter />
</template>

<script>
export default {
    layout : 'blog',
    data() {
      return {
        title: 'Category - Nuxt CMS Blog',
        filter : 'category',
      }
    },
    head() {
      return {
          title: 'Category - Nuxt CMS Blog',
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
