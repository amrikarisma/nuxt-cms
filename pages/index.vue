<template>
    <div>
        <Header :title="title" />
        <Portofolio />
        <About />
        <Contact />
    </div>
</template>
<script>
export default {

    data() {
      return {
        title: 'Nuxt CMS Blog'
      }
    },
    head() {
      return {
          title: 'Nuxt CMS Blog',
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
