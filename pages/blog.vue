<template>
    <Blog />
</template>
<script>
export default {

    data() {
      return {
        title: 'Blog - Nuxt CMS Blog'
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
