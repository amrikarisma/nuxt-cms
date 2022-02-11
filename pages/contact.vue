<template>
    <Contact />
</template>
<script>
export default {

    data() {
      return {
        title: 'Contact - Nuxt CMS Blog'
      }
    },
    head() {
      return {
          title: 'Contact - Nuxt CMS Blog',
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