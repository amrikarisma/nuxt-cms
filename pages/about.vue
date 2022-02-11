<template>
    <About />
</template>
<script>
export default {

    data() {
      return {
        title: 'About - Nuxt CMS Blog'
      }
    },
    head() {
      return {
          title: 'About - Nuxt CMS Blog',
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
