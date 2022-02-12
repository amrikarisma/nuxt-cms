<template>
    <Blog />
</template>

<script>
export default {
    layout : 'Category',
    data() {
      return {
        title: 'Category - Nuxt CMS Blog'
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
