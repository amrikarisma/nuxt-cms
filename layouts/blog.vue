<template>
    <div>
        <Navbar />
        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <slot />
                    </div>
                    <div class="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>