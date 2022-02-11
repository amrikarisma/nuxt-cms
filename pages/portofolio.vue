<template>
    <Portofolio />
</template>
<script>
export default {

    data() {
      return {
        title: 'Portofolio - Nuxt CMS Blog'
      }
    },
    head() {
      return {
          title: 'Portofolio - Nuxt CMS Blog',
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