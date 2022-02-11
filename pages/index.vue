<template>
    <Header />
    <Portofolio />
    <About />
    <Contact />
</template>
<script>
export default {
    asyncData() {
        return {
            rendering: process.server ? 'server' : 'client'
        }
    },

}

</script>
